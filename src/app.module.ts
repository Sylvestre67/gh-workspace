import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SerpModule } from './serp/serp.module';
import { ConfigModule } from './config/config.module';
import { SerpService } from './serp/serp.service';

@Module({
  imports: [SerpModule, ConfigModule],
  controllers: [AppController],
  providers: [AppService, SerpService],
})
export class AppModule {}
