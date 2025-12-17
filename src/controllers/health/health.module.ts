import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { HealthController } from './health.controller';
import { HttpModule } from '@nestjs/axios';
import { PrismaService } from 'src/application/prisma/prisma.service';

@Module({
  imports: [TerminusModule.forRoot({ errorLogStyle: 'pretty' }), HttpModule],
  controllers: [HealthController],
  providers: [PrismaService],
})
export class HealthModule { }
