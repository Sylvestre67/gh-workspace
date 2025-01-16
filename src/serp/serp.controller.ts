import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SerpService } from './serp.service';

@ApiTags('Search')
@Controller()
export class SerpController {
  constructor(private readonly serpService: SerpService) {}

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
