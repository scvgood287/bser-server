import { Injectable } from "@nestjs/common";
import { AxiosResponse } from 'axios';

import { LATEST_SEASON_ID, matchingTeamModes } from 'src/dictionaries/common';
import { HASH } from 'src/dictionaries/default-path';
import { 
  userNumberApi,
  topRankersApi,
  userRankApi,
  userStatsApi,
  userMatchesApi,
  matchResultsApi,
  gameDataTableApi,
  languageDataApi,
} from 'src/api/open-api';
import { CacheDBService } from "src/modules/cache-db.module/cache-db.service";
import {
  SeasonId,
  TopRankersResponse,
  MatchingTeamMode,
  UserMatchesResponse,
  MatchResultsResponse,
  UserNum,
  GameId,
  Nickname,
  MetaType,
  Language,
  UserNumberResponse,
  UserRankResponse,
  UserStatsResponse,
  GameDataTableResponse,
  LanguageDataResponse
} from "src/types/api/open-api";
import { KOREAN } from "src/dictionaries/language";

@Injectable()
export class OpenApiService {
  constructor(
    private readonly cacheDBService: CacheDBService
  ) {}

  // defaults

  async getUserNumber(nickname: Nickname): Promise<AxiosResponse<UserNumberResponse>> {
    const { key } = await this.cacheDBService.getOpenApiKey();

    const response = await userNumberApi(nickname, key);
    
    return response;
  }

  async getUserRank(userNum: UserNum, seasonId: SeasonId = LATEST_SEASON_ID, matchingTeamMode: MatchingTeamMode = 1): Promise<AxiosResponse<UserRankResponse>> {
    const { key } = await this.cacheDBService.getOpenApiKey();

    const response = await userRankApi(userNum, seasonId, matchingTeamMode, key);
    
    return response;
  }

  async getUserStats(userNum: UserNum, seasonId: SeasonId = LATEST_SEASON_ID): Promise<AxiosResponse<UserStatsResponse>> {
    const { key } = await this.cacheDBService.getOpenApiKey();

    const response = await userStatsApi(userNum, seasonId, key);
    
    return response;
  }

  async getGameDataTable(metaType: MetaType = HASH): Promise<AxiosResponse<GameDataTableResponse>> {
    const { key } = await this.cacheDBService.getOpenApiKey();

    const response = await gameDataTableApi(metaType, key);
    
    return response;
  }

  async getLanguageData(language: Language = KOREAN): Promise<AxiosResponse<LanguageDataResponse>> {
    const { key } = await this.cacheDBService.getOpenApiKey();

    const response = await languageDataApi(language, key);
    
    return response;
  }

  async getTopRankers(seasonId: SeasonId = LATEST_SEASON_ID, matchingTeamMode: MatchingTeamMode = 1): Promise<AxiosResponse<TopRankersResponse>> {
    const { key } = await this.cacheDBService.getOpenApiKey();
    
    const response = await topRankersApi(seasonId, matchingTeamMode, key);

    return response;
  }

  async getUserMatches(userNum: UserNum): Promise<AxiosResponse<UserMatchesResponse>> {
    const { key } = await this.cacheDBService.getOpenApiKey();

    const response = await userMatchesApi(userNum, key);

    return response;
  }

  async getMatchResults(gameId: GameId): Promise<AxiosResponse<MatchResultsResponse>> {
    const { key } = await this.cacheDBService.getOpenApiKey();

    const response = await matchResultsApi(gameId, key);

    return response;
  }
}