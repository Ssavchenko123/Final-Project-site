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
  title: string;
}
