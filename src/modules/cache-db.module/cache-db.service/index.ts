import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Cache, WrapArgsType } from 'cache-manager';

import { OPEN_API_KEY, OPEN_API_USERNAME, OPEN_API_PASSWORD } from 'src/dictionaries/common';
import { Issued, OpenApiKey, OpenApiKeyInfo } from 'src/types/api/open-api';
import { getToday } from 'src/utils';
import { getFreshOpenApiKey } from 'src/utils/api/open-api';
 
@Injectable()
export class CacheDBService {
  constructor(
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
    private readonly config: ConfigService,
  ) {}

  // defaults

  async getCache<T>(key: string): Promise<T | undefined> {
    const cache = await this.cacheManager.get<T>(key);
    return cache;
  }

  async setCache<T>(key: string, value: T): Promise<T> {
    return await this.cacheManager.set<T>(key, value);
  }

  async wrapCache<T>(...args: WrapArgsType<T>[]): Promise<T> {
    return await this.cacheManager.wrap(...args);
  }

  async delCache(key: string): Promise<any> {
    return await this.cacheManager.del(key);
  }

  async resetCache(): Promise<void> {
    return await this.cacheManager.reset();
  }

  // customs
 
  async setOpenApiKey(today: Issued = getToday()): Promise<OpenApiKeyInfo> {
    const username = this.config.get(OPEN_API_USERNAME);
    const password = this.config.get(OPEN_API_PASSWORD);

    const freshOpenApiKey: OpenApiKey = await getFreshOpenApiKey(username, password);
    const openApiKeyInfo: OpenApiKeyInfo = {
      issued: today,
      key: freshOpenApiKey
    };

    await this.setCache<OpenApiKeyInfo>(OPEN_API_KEY, openApiKeyInfo);
    
    return openApiKeyInfo;
  }

  async getOpenApiKey(): Promise<OpenApiKeyInfo> {
    let openApiKeyInfo: OpenApiKeyInfo = await this.getCache<OpenApiKeyInfo>(OPEN_API_KEY);
    const today: Issued = getToday();

    if (!openApiKeyInfo || openApiKeyInfo.issued !== today) {
      openApiKeyInfo = await this.setOpenApiKey(today);
    };

    return openApiKeyInfo;
  }
}