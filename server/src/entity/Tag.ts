import { Entity, Column, Unique } from "typeorm";
import Model from "./Model";

@Entity("tags")
@Unique(["name"])
export class Tag extends Model {
  @Column()
  name: string;
}
