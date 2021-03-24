import { BaseEntity } from "typeorm";
import { Province } from "./entity/Province";
import { City } from "./entity/City";
import { District } from "./entity/District";
declare const initIndoData: (provinceModel: BaseEntity, cityModel: BaseEntity, districtModel: BaseEntity) => Promise<void>;
export { Province, District, City, initIndoData };
