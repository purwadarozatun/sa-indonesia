

const csv = require('csv-parser');
const fs = require('fs');



export const readCsvToEntity = (filename: string, model: any) => {
    console.log(model)
    fs.createReadStream(filename)
        .pipe(csv())
        .on('data', async (row: { [key: string]: string }) => {
            const modelData = await model.findOne({ id: row.id })
            if (!modelData) {
                await model.insert(row)
            } else {
                // console.log({ item: modelData.id, status: "Already Exsist" })
            }
        })
        .on('end', () => {
            console.log('CSV file successfully processed');
        });
}