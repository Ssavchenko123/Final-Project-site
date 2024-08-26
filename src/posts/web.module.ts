import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { Posts } from '../../db/models/posts_model';

@Module({
  imports: [SequelizeModule.forFeature([Posts])],
  providers: [AppService],
  controllers: [AppController],
})
export class WebModule {}
