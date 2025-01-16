import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpService, HttpModule } from '@nestjs/axios';
import { SerpService } from './serp/serp.service';

describe('AppController', () => {
  let appController: AppController;
  let serpService: SerpService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [AppController],
      providers: [AppService, SerpService, HttpService],
    }).compile();

    appController = app.get<AppController>(AppController);
    serpService = app.get<SerpService>(SerpService);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });

  describe('searchGoogle', () => {
    it('should return search results from Google', async () => {
      const query = 'test query';
      const searchResult = { data: 'some data' };
      jest.spyOn(serpService, 'searchGoogle').mockResolvedValue(searchResult);

      const result = await appController.searchGoogle(query);

      expect(result).toEqual(searchResult);
      expect(serpService.searchGoogle).toHaveBeenCalledWith(query);
    });
  });

  describe('searchDuckDuckGo', () => {
    it('should return search results from DuckDuckGo', async () => {
      const query = 'test query';
      const searchResult = { data: 'some data' };
      jest.spyOn(serpService, 'searchDuckDuckGo').mockResolvedValue(searchResult);

      const result = await appController.searchDuckDuckGo(query);

      expect(result).toEqual(searchResult);
      expect(serpService.searchDuckDuckGo).toHaveBeenCalledWith(query);
    });
  });
});
