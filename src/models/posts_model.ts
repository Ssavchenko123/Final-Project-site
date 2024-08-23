import { Column, Table, Model } from 'sequelize-typescript';

@Table
export class Task extends Model<Task> {
  @Column({
    allowNull: false,
  })
  id: number;
  @Column({
    allowNull: false,
  })
  owner: string;
  @Column({
    allowNull: false,
  })
  title: string;
  @Column({
    allowNull: false,
  })
  text: string;
  @Column({
    allowNull: true,
  })
  image: string;
  @Column({
    allowNull: false,
  })
  createdAt: Date;
  @Column({
    allowNull: false,
  })
  updatedAt: Date;
}
