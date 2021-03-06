import { Entity, ManyToMany, JoinTable, Column } from "typeorm";
import Model from "./Model";
import { Tag } from "./Tag";

@Entity("events")
export class Event extends Model {
  @Column()
  dateTime: string;

  @ManyToMany(() => Tag)
  @JoinTable()
  tags: Tag[];
}
