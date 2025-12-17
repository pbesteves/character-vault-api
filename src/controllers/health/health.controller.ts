import { Controller, Get } from '@nestjs/common';
import {
  HealthCheck,
  HealthCheckService,
  HttpHealthIndicator,
  PrismaHealthIndicator,
} from '@nestjs/terminus';
import { PrismaService } from 'src/application/prisma/prisma.service';
import { PrismaClient } from 'src/generated/prisma/client';
@Controller('health')
export class HealthController {
  constructor(
    private healthCheckService: HealthCheckService,
    private http: HttpHealthIndicator,
    private db: PrismaHealthIndicator,
    private prismaService: PrismaService,
  ) { }

  @Get()
  @HealthCheck()
  check() {
    return this.healthCheckService.check([
      // () => this.http.pingCheck('nestjs-docs', 'https://docs.nestjs.com'),
      async () => this.db.pingCheck('database', this.prismaService),
    ]);
  }
}
