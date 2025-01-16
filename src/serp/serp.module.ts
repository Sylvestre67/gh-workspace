import { Module } from '@nestjs/common';
import { SerpService } from './serp.service';
import { ConfigModule } from '../config/config.module';
import { ConfigService } from '../config/config.service';
import { SerpController } from './serp.controller';

@Module({
  imports: [ConfigModule],
  providers: [SerpService, ConfigService],
  controllers: [SerpController],
  exports: [SerpService], // Add this line to export SerpService
})
export class SerpModule {}
