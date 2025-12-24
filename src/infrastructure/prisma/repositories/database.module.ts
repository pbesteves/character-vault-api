import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/application/prisma/prisma.module';
import { CHARACTER_REPOSITORY } from 'src/domain/character/character.repository';
import { PrismaCharacterRepository } from './prisma-character.repository';

@Module({
  imports: [PrismaModule],
  providers: [
    {
      provide: CHARACTER_REPOSITORY,
      useClass: PrismaCharacterRepository,
    },
  ],
  exports: [CHARACTER_REPOSITORY],
})
export class DatabaseModule { }
