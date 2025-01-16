import { Module } from '@nestjs/common';
import { SerpService } from './serp.service';
import { ConfigModule } from '../config/config.module';
import { ConfigService } from '../config/config.service';

@Module({
  imports: [ConfigModule],
  providers: [SerpService, ConfigService],
  exports: [SerpService], // Add this line to export SerpService
})
export class SerpModule {}
