
import { readCsvToEntity } from "./utils/readscv";
import { BaseEntity } from "typeorm";
import { Province } from "./entity/Province";
import { City } from "./entity/City";
import { District } from "./entity/District";


const initIndoData = async ( 
    provinceModel: BaseEntity,
    cityModel: BaseEntity,
    districtModel: BaseEntity,) => {
    await readCsvToEntity(__dirname + "/../csv/provinces.csv", provinceModel)
    await readCsvToEntity(__dirname + "/../csv/districts.csv", districtModel)
    await readCsvToEntity(__dirname + "/../csv/cities.csv", cityModel)

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