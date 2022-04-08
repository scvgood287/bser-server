import { Path, MetaType } from 'src/types/api/open-api';

export const HASH: MetaType = "hash";

export const GET_USER_NUMBER_PATH: Path = "user/nickname";
export const TOP_RANKERS_PATH: Path = "rank/top";
export const USER_RANK_PATH: Path = "rank";
export const USER_STATS_PATH: Path = "user/stats";
export const USER_MATCHES_PATH: Path = "user/games";
export const MATCH_RESULTS_PATH: Path = "games";
export const GET_GAME_DATA_TABLE_PATH: Path = "data";
export const GET_FREE_CHARACTERS_PATH: Path = "freeCharacters";
export const GET_LANGUAGE_DATA_PATH: Path = "l10n";
export const BSER_DEV_PAGE_PATH: Path = "https://developer.eternalreturn.io/";
export const BSER_OPEN_API_VERSION: Path = "v1";

const DefalutPathDictionary = {
  HASH,
  GET_USER_NUMBER_PATH,
  TOP_RANKERS_PATH,
  USER_RANK_PATH,
  USER_STATS_PATH,
  USER_MATCHES_PATH,
  MATCH_RESULTS_PATH,
  GET_GAME_DATA_TABLE_PATH,
  GET_LANGUAGE_DATA_PATH,
  GET_FREE_CHARACTERS_PATH,
  BSER_DEV_PAGE_PATH,
  BSER_OPEN_API_VERSION,
};

export default DefalutPathDictionary;