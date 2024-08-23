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
  name: string;
  @Column({
    allowNull: false,
  })
  password: string;
  @Column({
    allowNull: false,
  })
  email: string;
  @Column({
    allowNull: true,
  })
  image: string;
}
