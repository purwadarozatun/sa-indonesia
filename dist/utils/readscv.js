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
exports.readCsvToEntity = void 0;
const csv = require('csv-parser');
const fs = require('fs');
const readCsvToEntity = (filename, model) => {
    console.log(model);
    fs.createReadStream(filename)
        .pipe(csv())
        .on('data', (row) => __awaiter(void 0, void 0, void 0, function* () {
        const modelData = yield model.findOne({ id: row.id });
        if (!modelData) {
            yield model.insert(row);
        }
        else {
        }
    }))
        .on('end', () => {
        console.log('CSV file successfully processed');
    });
};
exports.readCsvToEntity = readCsvToEntity;
//# sourceMappingURL=readscv.js.map