import { MatchingModes, MatchingTeamModes, SeasonId } from "src/types/api/open-api";

export const OPEN_API_KEY: string = 'OPEN_API_KEY';
export const OPEN_API_USERNAME: string = 'OPEN_API_USERNAME';
export const OPEN_API_PASSWORD: string = 'OPEN_API_PASSWORD';
export const ENTER = 'Enter';
export const CODE = 'code';
export const LATEST_SEASON_ID: SeasonId = 7;

export const matchingTeamModes: MatchingTeamModes = {
  solo: 1,
  duo: 2,
  squad: 3,
};
export const matchingModes: MatchingModes = {
  normal: 2,
  ranked: 3,
};

const ApiDictionary = {
  OPEN_API_USERNAME,
  OPEN_API_PASSWORD,
  OPEN_API_KEY,
  ENTER,
  CODE,
  LATEST_SEASON_ID,
  matchingTeamModes,
  matchingModes
};

export default ApiDictionary;