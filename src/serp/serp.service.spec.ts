import { Test, TestingModule } from '@nestjs/testing';
import { SerpService } from './serp.service';
import { ConfigService } from '../config/config.service';
import { getJson } from 'serpapi';

jest.mock('serpapi');

describe('SerpService', () => {
  let service: SerpService;
  let getJsonMock: jest.MockedFunction<typeof getJson>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SerpService,
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn().mockReturnValue('test-api-key'),
          },
        },
      ],
    }).compile();

    service = module.get<SerpService>(SerpService);
    getJsonMock = getJson as jest.MockedFunction<typeof getJson>;
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('searchGoogle', () => {
    it('should call getJson with Google engine', async () => {
      const query = 'test query';
      const searchResult = { data: 'some data' };
      getJsonMock.mockResolvedValue(searchResult);

      const result = await service.searchGoogle(query);

      expect(getJsonMock).toHaveBeenCalledWith({ engine: 'google', q: query });
      expect(result).toEqual(searchResult);
    });
  });

  describe('searchDuckDuckGo', () => {
    it('should call getJson with DuckDuckGo engine', async () => {
      const query = 'test query';
      const searchResult = { data: 'some data' };
      getJsonMock.mockResolvedValue(searchResult);

      const result = await service.searchDuckDuckGo(query);

      expect(getJsonMock).toHaveBeenCalledWith({
        engine: 'duckduckgo',
        q: query,
      });
      expect(result).toEqual(searchResult);
    });
  });
});
