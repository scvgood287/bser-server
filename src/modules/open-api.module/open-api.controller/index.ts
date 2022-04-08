import { Controller } from "@nestjs/common";
import { OpenApiService } from '../open-api.service';

@Controller('open-api')
export class OpenApiController {
  constructor(
    private readonly openApiService: OpenApiService
  ) {}

  // @Get('top-rankers')
  // async getTopRankers() {
  //   return await this.openApiService.getTopRankers();
  // }


  // @Get('user-matches')
  // async getUserMatches() {
  //   return await this.openApiService.getUserMatches();
  // }


  // @Get('match-results')
  // async getMatchResults() {
  //   return await this.openApiService.getMatchResults();
  // }
}