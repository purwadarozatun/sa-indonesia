"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initIndoData = exports.City = exports.District = exports.Province = void 0;
const readscv_1 = require("./utils/readscv");
const Province_1 = require("./entity/Province");
Object.defineProperty(exports, "Province", { enumerable: true, get: function () { return Province_1.Province; } });
const City_1 = require("./entity/City");
Object.defineProperty(exports, "City", { enumerable: true, get: function () { return City_1.City; } });
const District_1 = require("./entity/District");
Object.defineProperty(exports, "District", { enumerable: true, get: function () { return District_1.District; } });
const initIndoData = (provinceModel, cityModel, districtModel) => __awaiter(void 0, void 0, void 0, function* () {
    yield readscv_1.readCsvToEntity(__dirname + "/../csv/provinces.csv", provinceModel);
    yield readscv_1.readCsvToEntity(__dirname + "/../csv/districts.csv", districtModel);
    yield readscv_1.readCsvToEntity(__dirname + "/../csv/cities.csv", cityModel);
});
exports.initIndoData = initIndoData;
//# sourceMappingURL=index.js.map