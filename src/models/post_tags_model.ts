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
  post_id: number;
  @Column({
    allowNull: false,
  })
  tag_id: number;
}
