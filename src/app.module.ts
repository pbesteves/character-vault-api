import { Module } from '@nestjs/common';
import { HealthModule } from './controllers/health/health.module';
import { DatabaseModule } from './infrastructure/prisma/repositories/database.module';
import { CharactersPresentationModule } from './controllers/characters/characters-presentation.module';

@Module({
  imports: [DatabaseModule, HealthModule, CharactersPresentationModule],
})
export class AppModule { }
