import { Test, TestingModule } from '@nestjs/testing';
import { SerpService } from './serp.service';
import { SerpApi } from 'serpapi';

jest.mock('serpapi');

describe('SerpService', () => {
  let service: SerpService;
  let serpApiMock: jest.Mocked<SerpApi>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SerpService],
    }).compile();

    service = module.get<SerpService>(SerpService);
    serpApiMock = SerpApi as jest.Mocked<typeof SerpApi>;
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('searchGoogle', () => {
    it('should call SerpApi.json with Google engine', async () => {
      const query = 'test query';
      const searchResult = { data: 'some data' };
      serpApiMock.prototype.json.mockResolvedValue(searchResult);

      const result = await service.searchGoogle(query);

      expect(serpApiMock.prototype.json).toHaveBeenCalledWith(query, { engine: 'google' });
      expect(result).toEqual(searchResult);
    });
  });

  describe('searchDuckDuckGo', () => {
    it('should call SerpApi.json with DuckDuckGo engine', async () => {
      const query = 'test query';
      const searchResult = { data: 'some data' };
      serpApiMock.prototype.json.mockResolvedValue(searchResult);

      const result = await service.searchDuckDuckGo(query);

      expect(serpApiMock.prototype.json).toHaveBeenCalledWith(query, { engine: 'duckduckgo' });
      expect(result).toEqual(searchResult);
    });
  });
});
