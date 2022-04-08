import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

import { HASH, BSER_OPEN_API_VERSION } from 'src/dictionaries/default-path'; 
import { KOREAN } from 'src/dictionaries/language';
import {
  getUserNumberPath,
  topRankersPath,
  userRankPath,
  userStatsPath,
  userMatchesPath,
  matchResultsPath,
  getGameDataTablePath,
  getFreeCharactersPath,
  getLanguageDataPath,
  createDefaultAxiosRequestHeaders,
} from 'src/utils/api/open-api';
import {
  Nickname,
  SeasonId,
  MatchingTeamMode,
  UserNum,
  GameId,
  MetaType,
  Language,
  OpenApiKey,
  UserNumberResponse,
  TopRankersResponse,
  UserRankResponse,
  UserStatsResponse,
  UserMatchesResponse,
  MatchResultsResponse,
  GameDataTableResponse,
  FreeCharactersResponse,
  LanguageDataResponse,
  MatchingMode,
} from 'src/types/api/open-api';

const bserRequest = axios.create({ baseURL: `${process.env.BSER_OPEN_API_URL}/${BSER_OPEN_API_VERSION}` });

export const userNumberApi = async<T = any> (nickname: Nickname, openApiKey: OpenApiKey, config?: AxiosRequestConfig<T>): Promise<AxiosResponse<UserNumberResponse>> => {
  const defaultAxiosRequestHeaders = createDefaultAxiosRequestHeaders(openApiKey);

  // const start = performance.now();
  
  const response = await bserRequest.get<UserNumberResponse>(getUserNumberPath(nickname), { ...config, headers: defaultAxiosRequestHeaders });
  
  // const duration = performance.now() - start;
  // response.data.duration = duration;

  return response;
};

export const topRankersApi = async<T = any> (seasonId: SeasonId = 0, matchingTeamMode: MatchingTeamMode = 1, openApiKey: OpenApiKey, config?: AxiosRequestConfig<T>): Promise<AxiosResponse<TopRankersResponse>> => {
  const defaultAxiosRequestHeaders = createDefaultAxiosRequestHeaders(openApiKey);

  // const start = performance.now();
  
  const response = await bserRequest.get<TopRankersResponse>(topRankersPath(seasonId, matchingTeamMode), { ...config, headers: defaultAxiosRequestHeaders });

  // const duration = performance.now() - start;
  // response.data.duration = duration;

  return response;
};

export const userRankApi = async<T = any> (userNum: UserNum, seasonId: SeasonId = 0, matchingTeamMode: MatchingTeamMode = 1, openApiKey: OpenApiKey, config?: AxiosRequestConfig<T>): Promise<AxiosResponse<UserRankResponse>> => {
  const defaultAxiosRequestHeaders = createDefaultAxiosRequestHeaders(openApiKey);

  // const start = performance.now();
  
  const response = await bserRequest.get<UserRankResponse>(userRankPath(userNum, seasonId, matchingTeamMode), { ...config, headers: defaultAxiosRequestHeaders });

  // const duration = performance.now() - start;
  // response.data.duration = duration;

  return response;
};

export const userStatsApi = async<T = any> (userNum: UserNum, seasonId: SeasonId = 0, openApiKey: OpenApiKey, config?: AxiosRequestConfig<T>): Promise<AxiosResponse<UserStatsResponse>> => {
  const defaultAxiosRequestHeaders = createDefaultAxiosRequestHeaders(openApiKey);

  // const start = performance.now();
  
  const response = await bserRequest.get<UserStatsResponse>(userStatsPath(userNum, seasonId), { ...config, headers: defaultAxiosRequestHeaders });

  // const duration = performance.now() - start;
  // response.data.duration = duration;

  return response;
};

export const userMatchesApi = async<T = any> (userNum: UserNum, openApiKey: OpenApiKey, config?: AxiosRequestConfig<T>): Promise<AxiosResponse<UserMatchesResponse>> => {
  const defaultAxiosRequestHeaders = createDefaultAxiosRequestHeaders(openApiKey);

  // const start = performance.now();
  
  const response = await bserRequest.get<UserMatchesResponse>(userMatchesPath(userNum), { ...config, headers: defaultAxiosRequestHeaders });

  // const duration = performance.now() - start;
  // response.data.duration = duration;

  return response;
};

export const matchResultsApi = async<T = any> (gameId: GameId, openApiKey: OpenApiKey, config?: AxiosRequestConfig<T>): Promise<AxiosResponse<MatchResultsResponse>> => {
  const defaultAxiosRequestHeaders = createDefaultAxiosRequestHeaders(openApiKey);

  // const start = performance.now();
  
  const response = await bserRequest.get<MatchResultsResponse>(matchResultsPath(gameId), { ...config, headers: defaultAxiosRequestHeaders });

  // const duration = performance.now() - start;
  // response.data.duration = duration;

  return response;
};

export const gameDataTableApi = async<T = any> (metaType: MetaType = HASH, openApiKey: OpenApiKey, config?: AxiosRequestConfig<T>): Promise<AxiosResponse<GameDataTableResponse>> => {
  const defaultAxiosRequestHeaders = createDefaultAxiosRequestHeaders(openApiKey);

  // const start = performance.now();
  
  const response = await bserRequest.get<GameDataTableResponse>(getGameDataTablePath(metaType), { ...config, headers: defaultAxiosRequestHeaders });

  // const duration = performance.now() - start;
  // response.data.duration = duration;

  return response;
};

export const freeCharactersApi = async<T = any> (matchingMode: MatchingMode = 2, openApiKey: OpenApiKey, config?: AxiosRequestConfig<T>): Promise<AxiosResponse<FreeCharactersResponse>> => {
  const defaultAxiosRequestHeaders = createDefaultAxiosRequestHeaders(openApiKey);

  // const start = performance.now();
  
  const response = await bserRequest.get<FreeCharactersResponse>(getFreeCharactersPath(matchingMode), { ...config, headers: defaultAxiosRequestHeaders });

  return response;
};

export const languageDataApi = async<T = any> (language: Language = KOREAN, openApiKey: OpenApiKey, config?: AxiosRequestConfig<T>): Promise<AxiosResponse<LanguageDataResponse>> => {
  const defaultAxiosRequestHeaders = createDefaultAxiosRequestHeaders(openApiKey);

  // const start = performance.now();
  
  const response = await bserRequest.get<LanguageDataResponse>(getLanguageDataPath(language), { ...config, headers: defaultAxiosRequestHeaders });

  return response;
};

const openApi = {
  userNumberApi,
  topRankersApi,
  userRankApi,
  userStatsApi,
  userMatchesApi,
  matchResultsApi,
  gameDataTableApi,
  languageDataApi,
};

export default openApi;