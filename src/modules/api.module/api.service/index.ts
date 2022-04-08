import { Injectable } from "@nestjs/common";

import { OpenApiService } from 'src/modules/open-api.module/open-api.service'
import { sleep, testApi } from "src/utils/api/open-api";
import { LATEST_SEASON_ID, matchingTeamModes } from 'src/dictionaries/common';
import { GameId, SeasonId, UserNum } from "src/types/api/open-api";

@Injectable()
export class ApiService {
  constructor(
    private readonly openApiService: OpenApiService
  ) {}

  async test() {
    await testApi();
  }

  // 대략 4초
  async getTopRankersByEachTeamMode(seasonId: SeasonId): Promise<Set<UserNum>> {
    let topRankers = new Set<UserNum>();

    for await (let matchingTeamMode of Object.values(matchingTeamModes)) {
      const { data: { topRanks } } = await this.openApiService.getTopRankers(seasonId, matchingTeamMode);
      sleep(1000);

      const topRanksLength = topRanks.length;

      for (let i = 0; i < topRanksLength; i++) {
        const { userNum } = topRanks[i];

        topRankers.add(userNum);
      };
    };

    return topRankers;
  }

  // 대략 52분 정도
  async getTopRankersRecentMatches(): Promise<Set<GameId>> {
    let recentMatches = new Set<GameId>();

    const topRankers = await this.getTopRankersByEachTeamMode(LATEST_SEASON_ID);
    const complete = topRankers.size;
    let index = 0;

    for await (let userNum of topRankers) {
      const { data: { userGames } } = await this.openApiService.getUserMatches(userNum);
      sleep(1000);

      const userGamesLength = userGames.length;

      for (let i = 0; i < userGamesLength; i++) {
        const { gameId } = userGames[i];

        recentMatches.add(gameId);
      };

      index += 1;
      console.log(`상위 1000위 유저들의 최근 10 게임 ID 가져오기 ${index * 100 / complete} % 완료`);
    };

    return recentMatches;
  }

  async getTopRankersMatchResults(): Promise<Object> {
    let matchResults = Object.values(matchingTeamModes).reduce<Object>((acc, matchingTeamMode) => {
      acc[matchingTeamMode] = {};

      return acc;
    }, {});

    // const recentMatches = [15271406,15270078,15269698,15269548,15269211,15269091,15268934,15268779,15268590,15245994];
    // 15190142,15189910,15189698,15189501,15189055,15188620,15188147,15175436,15175336,15175060,15272825,15272596,15272383,15272144,15271775,15271630,15271004,15270861,15270730,15270597,15240299,15240189,15240102,15239972,15239845,15239731,15239682,15239534,15239477,15239366,15280403,15280325,15280160,15280042,15279932,15279818,15279714,15279642,15279376,15279242
    const recentMatches = await this.getTopRankersRecentMatches();
    const complete = recentMatches.size;
    console.log(`길이 ${complete}`);
    let index = 0;

    for await (let gameId of recentMatches) {
      const { data: { userGames } } = await this.openApiService.getMatchResults(gameId);
      sleep(1000);

      const userGamesLength = userGames.length;

      for (let i = 0; i < userGamesLength; i++) {
        const matchResult = userGames[i];
        const { matchingTeamMode, characterNum, bestWeapon } = matchResult;

        if (!matchResults[matchingTeamMode].hasOwnProperty(characterNum)) {
          matchResults[matchingTeamMode][characterNum] = {
            [bestWeapon]: [],
          };
        } else if (!matchResults[matchingTeamMode][characterNum].hasOwnProperty(bestWeapon)) {
          matchResults[matchingTeamMode][characterNum][bestWeapon] = [];
        };

        matchResults[matchingTeamMode][characterNum][bestWeapon] = [...matchResults[matchingTeamMode][characterNum][bestWeapon], matchResult];
      };

      index += 1;
      console.log(`상위 1000위 유저들의 최근 10 게임 세부정보 가져오기 ${index * 100 / complete} % 완료`);
    };

    return matchResults;
  }
}
