import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Posts } from '../../db/models/posts_model';

@Injectable()
export class AppService {
  constructor(@InjectModel(Posts) private readonly postModel: typeof Posts) {}

  getPosts(): Promise<Posts[]> {
    return this.postModel.findAll();
  }
}
