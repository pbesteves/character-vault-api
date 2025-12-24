import { Module } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { DatabaseModule } from 'src/infrastructure/prisma/repositories/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [CharactersService],
  exports: [CharactersService],
})
export class CharactersModule { }
