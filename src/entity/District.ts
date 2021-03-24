import {
  Entity,
  Column,
  BaseEntity,
} from "typeorm";

@Entity("sa_indo_district")
export class District extends BaseEntity {
  @Column("uuid", { primary: true })
  id: string;

  @Column("varchar")
  city_id: string;
  @Column("varchar")
  district: string;
  @Column("varchar")
  lat: string;

  @Column("varchar")
  long: string;



}

