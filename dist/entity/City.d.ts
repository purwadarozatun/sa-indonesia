import { BaseEntity } from "typeorm";
export declare class City extends BaseEntity {
    id: string;
    province_id: string;
    city: string;
    lat: string;
    long: string;
}
