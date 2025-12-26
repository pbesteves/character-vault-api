import { Module } from '@nestjs/common';
import { HealthModule } from './controllers/health/health.module';
import { DatabaseModule } from './infrastructure/prisma/repositories/database.module';
import { CharactersPresentationModule } from './controllers/characters/characters-presentation.module';
import { AuthenticationModule } from './infrastructure/auth/authentication.module';
import { AccountsService } from './application/accounts/accounts.service';

@Module({
  imports: [
    AuthenticationModule,
    DatabaseModule,
    HealthModule,
    CharactersPresentationModule,
  ],
  providers: [AccountsService],
})
export class AppModule { }
