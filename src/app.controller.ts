import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AppService } from './app.service';
import { SerpService } from './serp/serp.service';

@ApiTags('Search')
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly serpService: SerpService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('search/google')
  @ApiOperation({ summary: 'Perform a Google search' })
  @ApiResponse({ status: 200, description: 'Search results' })
  async searchGoogle(@Query('query') query: string): Promise<any> {
    return this.serpService.searchGoogle(query);
  }

  @Get('search/duckduckgo')
  @ApiOperation({ summary: 'Perform a DuckDuckGo search' })
  @ApiResponse({ status: 200, description: 'Search results' })
  async searchDuckDuckGo(@Query('query') query: string): Promise<any> {
    return this.serpService.searchDuckDuckGo(query);
  }
}
