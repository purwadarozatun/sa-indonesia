
import { Province } from "./entity/Province"
import { City } from "./entity/City";
import { readCsvToEntity } from "./utils/readscv";
import { District } from "./entity/District";


const initIndoData = async () => {
    await readCsvToEntity(__dirname + "/../csv/provinces.csv", Province)
    await readCsvToEntity(__dirname + "/../csv/districts.csv", District)
    await readCsvToEntity(__dirname + "/../csv/cities.csv", City)

}

export {
    Province,
    District,
    City,


    initIndoData
}
// (async () => {
//     await createConnection()
//     await initIndoData()

//     return
// })()