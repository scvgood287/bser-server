import { Module } from '@nestjs/common';

import { CacheDBModule } from '../cache-db.module';
import { OpenApiController } from './open-api.controller';
import { OpenApiService } from './open-api.service';

@Module({
  imports: [CacheDBModule],
  controllers: [OpenApiController],
  providers: [OpenApiService],
  exports: [OpenApiService],
})
export class OpenApiModule {};
