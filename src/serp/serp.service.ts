import { Injectable } from '@nestjs/common';
import { config, getJson } from 'serpapi';
import { ConfigService } from '../config/config.service';

@Injectable()
export class SerpService {
  constructor(private readonly configService: ConfigService) {
    const apiKey = this.configService.get('SERP_API_KEY');
    config.api_key = apiKey;
  }

  async search(query: string): Promise<any> {
    return getJson({ q: query });
  }

  async searchGoogle(query: string): Promise<any> {
    return getJson({ engine: 'google', q: query });
  }

  async searchDuckDuckGo(query: string): Promise<any> {
    return getJson({ engine: 'duckduckgo', q: query });
  }
}
