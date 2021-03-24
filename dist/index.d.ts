import { Province } from "./entity/Province";
import { City } from "./entity/City";
import { District } from "./entity/District";
declare const initIndoData: (provinceModel: any, cityModel: any, districtModel: any) => Promise<void>;
export { Province, District, City, initIndoData };
