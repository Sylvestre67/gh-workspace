import { Injectable } from '@nestjs/common';
import { SerpClient } from 'serp-sdk';

@Injectable()
export class SerpService {
  private readonly serpClient: SerpClient;

  constructor() {
    this.serpClient = new SerpClient();
  }

  async search(query: string): Promise<any> {
    return this.serpClient.search(query);
  }
}
