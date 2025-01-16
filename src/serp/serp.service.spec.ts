import { Test, TestingModule } from '@nestjs/testing';
import { SerpService } from './serp.service';
import { SerpClient } from 'serp-sdk';

jest.mock('serp-sdk');

describe('SerpService', () => {
  let service: SerpService;
  let serpClientMock: jest.Mocked<SerpClient>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SerpService],
    }).compile();

    service = module.get<SerpService>(SerpService);
    serpClientMock = SerpClient as jest.Mocked<typeof SerpClient>;
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('searchGoogle', () => {
    it('should call SerpClient.search with Google engine', async () => {
      const query = 'test query';
      const searchResult = { data: 'some data' };
      serpClientMock.prototype.search.mockResolvedValue(searchResult);

      const result = await service.searchGoogle(query);

      expect(serpClientMock.prototype.search).toHaveBeenCalledWith(query, { engine: 'google' });
      expect(result).toEqual(searchResult);
    });
  });

  describe('searchDuckDuckGo', () => {
    it('should call SerpClient.search with DuckDuckGo engine', async () => {
      const query = 'test query';
      const searchResult = { data: 'some data' };
      serpClientMock.prototype.search.mockResolvedValue(searchResult);

      const result = await service.searchDuckDuckGo(query);

      expect(serpClientMock.prototype.search).toHaveBeenCalledWith(query, { engine: 'duckduckgo' });
      expect(result).toEqual(searchResult);
    });
  });
});
