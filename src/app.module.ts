import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthModule } from './controllers/health/health.module';
import { PrismaService } from './application/prisma/prisma.service';

@Module({
  imports: [HealthModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule { }
