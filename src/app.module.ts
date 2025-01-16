import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SerpModule } from './serp/serp.module';

@Module({
  imports: [SerpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
