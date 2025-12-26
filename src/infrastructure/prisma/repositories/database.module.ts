import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/application/prisma/prisma.module';
import { CHARACTER_REPOSITORY } from 'src/domain/character/character.repository';
import { PrismaCharacterRepository } from './prisma-character.repository';
import { ACCOUNT_REPOSITORY } from 'src/domain/account/account.repository';
import { PrismaAccountRepository } from './prisma-account.repository';

@Module({
  imports: [PrismaModule],
  providers: [
    {
      provide: CHARACTER_REPOSITORY,
      useClass: PrismaCharacterRepository,
    },
    {
      provide: ACCOUNT_REPOSITORY,
      useClass: PrismaAccountRepository,
    },
  ],
  exports: [CHARACTER_REPOSITORY, ACCOUNT_REPOSITORY],
})
export class DatabaseModule { }
