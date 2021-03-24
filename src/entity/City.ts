import {
  Entity,
  Column,
  BaseEntity,
} from "typeorm";

@Entity("sa_indo_city")
export class City extends BaseEntity {
  // id,province_id,city,lat,long
  @Column("uuid", { primary: true })
  id: string;

  @Column("varchar")
  province_id: string;
  @Column("varchar")
  city: string;
  @Column("varchar")
  lat: string;

  @Column("varchar")
  long: string;



}

