import {
  Entity,
  Column,
  BaseEntity,
} from "typeorm";

@Entity("sa_indo_province")
export class Province extends BaseEntity {
  @Column("uuid", { primary: true })
  id: string;

  @Column("varchar")
  province: string;
  @Column("varchar")
  lat: string;

  @Column("varchar")
  long: string;



}

