import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { SerpModule } from './serp/serp.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [SerpModule, ConfigModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
