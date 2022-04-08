import { Controller, Get, Param } from "@nestjs/common";

import { ApiService } from '../api.service';
import { GameId, SeasonId, UserNum } from "src/types/api/open-api";

@Controller('api')
export class ApiController {
  constructor(
    private readonly apiService: ApiService
  ) {}

  @Get('test')
  async test() {
    await this.apiService.test();
    return "done";
  }

  @Get('top-rankers-by-each-team-mode/:seasonId')
  async getTopRankersByEachTeamMode(@Param('seasonId') seasonId: SeasonId): Promise<Array<UserNum>> {
    console.log('start getTopRankersByEachTeamMode()');
    console.time('getTopRankersByEachTeamMode() performence');

    const topRankers = await this.apiService.getTopRankersByEachTeamMode(seasonId);
    
    console.timeEnd('getTopRankersByEachTeamMode() performence');
    console.log('end getTopRankersByEachTeamMode()');

    return [...topRankers];
  }

  @Get('top-rankers-recent-matches')
  async getTopRankersRecentMatches(): Promise<Array<GameId>> {
    console.log('start getTopRankersRecentMatches()');
    console.time('getTopRankersRecentMatches() performence');

    const recentMatches = await this.apiService.getTopRankersRecentMatches();

    console.timeEnd('getTopRankersRecentMatches() performence');
    console.log('end getTopRankersRecentMatches()');

    return [...recentMatches];
  }

  @Get('top-rankers-match-results')
  async getTopRankersMatchResults(): Promise<Object> {
    console.log('start getTopRankersMatchResults()');
    console.time('getTopRankersMatchResults() performence');

    const matchResults = await this.apiService.getTopRankersMatchResults();

    console.timeEnd('getTopRankersMatchResults() performence');
    console.log('end getTopRankersMatchResults()');

    return matchResults;
  }
}