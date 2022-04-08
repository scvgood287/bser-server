import { Controller, Get } from '@nestjs/common';
import { CacheDBService } from '../cache-db.service';

@Controller('cache-db')
export class CacheDBController {
  constructor(
    private readonly cacheDBService: CacheDBService
  ) {}

  @Get('open-api-key')
  async getOpenApiKey() {
    return await this.cacheDBService.getOpenApiKey();
  }
}