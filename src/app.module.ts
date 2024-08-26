import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Posts } from '../db/models/posts_model';
import { WebModule } from './posts/web.module';
import { User } from 'db/models/users_model';
import { PostTags } from 'db/models/post_tags_model';
import { Tags } from 'db/models/tags_model';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        dialect: configService.get('DB_DIALECT'),
        host: configService.get('DB_HOST'),
        port: Number(configService.get('DB_PORT')),
        username: configService.get('DB_USER'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        models: [Posts, User, PostTags, Tags],
      }),
    }),
    WebModule,
  ],
})
export class PostModule {}
