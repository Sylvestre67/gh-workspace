import { Injectable } from '@nestjs/common';
import { SerpClient } from 'serp-sdk';
import { ConfigService } from '../config/config.service';

@Injectable()
export class SerpService {
  private readonly serpClient: SerpClient;

  constructor(private readonly configService: ConfigService) {
    const apiKey = this.configService.get('SERP_API_KEY');
    this.serpClient = new SerpClient(apiKey);
  }

  async search(query: string): Promise<any> {
    return this.serpClient.search(query);
  }

  async searchGoogle(query: string): Promise<any> {
    return this.serpClient.search(query, { engine: 'google' });
  }

  async searchDuckDuckGo(query: string): Promise<any> {
    return this.serpClient.search(query, { engine: 'duckduckgo' });
  }
}
