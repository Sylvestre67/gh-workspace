import { Injectable } from '@nestjs/common';
import { SerpApi } from 'serpapi';
import { ConfigService } from '../config/config.service';

@Injectable()
export class SerpService {
  private readonly serpApi: SerpApi;

  constructor(private readonly configService: ConfigService) {
    const apiKey = this.configService.get('SERP_API_KEY');
    this.serpApi = new SerpApi(apiKey);
  }

  async search(query: string): Promise<any> {
    return this.serpApi.json(query);
  }

  async searchGoogle(query: string): Promise<any> {
    return this.serpApi.json(query, { engine: 'google' });
  }

  async searchDuckDuckGo(query: string): Promise<any> {
    return this.serpApi.json(query, { engine: 'duckduckgo' });
  }
}
