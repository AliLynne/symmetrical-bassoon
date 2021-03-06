import {
  BaseEntity,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from "typeorm";

@Unique(["id"])
export default abstract class Model extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  constructor(model?: Partial<any>) {
    super();
    Object.assign(this, model);
  }
}
