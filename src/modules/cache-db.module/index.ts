import { Module, CacheModule } from '@nestjs/common';
import redisStore from 'cache-manager-redis-store';
import { ConfigService, ConfigModule } from '@nestjs/config';

import { CacheDBController } from './cache-db.controller';
import { CacheDBService } from './cache-db.service';

export const RedisDBModule = CacheModule.registerAsync({
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (configService: ConfigService) => ({
    store: redisStore,
    host: configService.get<string>('CACHE_DB_HOST'),
    port: configService.get<string>('CACHE_DB_PORT'),
    ttl: 0,
    auth_pass: configService.get<string>('CACHE_DB_AUTH_PASS'),
  }),
});

@Module({
  imports: [RedisDBModule],
  controllers: [CacheDBController],
  providers: [CacheDBService],
  exports: [CacheDBService],
})
export class CacheDBModule {};