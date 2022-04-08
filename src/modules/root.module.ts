import { Module } from '@nestjs/common';

import { ConfigsModule } from './configs.module';
import { CacheDBModule } from './cache-db.module';
import { DBModule } from './db.module';
import { OpenApiModule } from './open-api.module';
import { ApiModule } from './api.module';

@Module({
  imports: [ConfigsModule, CacheDBModule, DBModule, OpenApiModule, ApiModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class RootModule {};
