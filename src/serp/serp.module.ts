import { Module } from '@nestjs/common';
import { SerpService } from './serp.service';
import { ConfigModule } from '../config/config.module';
import { ConfigService } from '../config/config.service';

@Module({
  imports: [ConfigModule],
  providers: [SerpService, ConfigService],
})
export class SerpModule {}
