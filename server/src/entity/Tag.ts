import { Entity, Column, Unique, ManyToMany } from "typeorm";
import { Event } from "./Event";
import Model from "./Model";

@Entity("tags")
@Unique(["name"])
export class Tag extends Model {
  @Column()
  name: string;

  @ManyToMany(() => Event, (event) => event.tags, { cascade: true })
  events: Event[];
}
