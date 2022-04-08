import { Module } from '@nestjs/common';

import { OpenApiModule } from '../open-api.module';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';

@Module({
  imports: [OpenApiModule],
  controllers: [ApiController],
  providers: [ApiService],
  exports: [ApiService],
})
export class ApiModule {};