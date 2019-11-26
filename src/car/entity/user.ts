import { BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId } from "typeorm";


@Entity("user", { schema: "test_typeorm" })
export class User {

  @PrimaryGeneratedColumn({
    type: "int",
    name: "id"
  })
  id: number;


  @Column("varchar", {
    nullable: true,
    name: "name"
  })
  name: string | null;


  @Column("int", {
    nullable: true,
    name: "age"
  })
  age: number | null;


  @Column("varchar", {
    nullable: true,
    name: "address"
  })
  address: string | null;

}
