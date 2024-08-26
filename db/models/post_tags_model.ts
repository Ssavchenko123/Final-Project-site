import {
  Column,
  Table,
  Model,
  AllowNull,
  ForeignKey,
} from 'sequelize-typescript';
import { Posts } from './posts_model';
import { Tags } from './tags_model';

@Table({
  tableName: 'post_tags',
  underscored: true,
  timestamps: true,
})
export class PostTags extends Model<PostTags> {
  @AllowNull(false)
  @Column
  postId: number;

  @ForeignKey(() => Posts)
  @Column
  postsId: number;

  @AllowNull(false)
  @ForeignKey(() => Tags)
  @Column
  tagsId: number;
}
