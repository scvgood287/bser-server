import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

export const MongoDBModule = MongooseModule.forRootAsync({
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (configService: ConfigService) => ({
    uri: configService.get<string>('MONGO_DB_URL'),
  }),
})

@Module({
  imports: [MongoDBModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class DBModule {};
