import { BaseEntity } from "typeorm";
export declare class District extends BaseEntity {
    id: string;
    city_id: string;
    district: string;
    lat: string;
    long: string;
}
