import { Module } from '@nestjs/common';
import { CharactersController } from './characters.controller';
import { CharactersModule } from 'src/application/characters/characters.module';

@Module({
  imports: [CharactersModule],
  controllers: [CharactersController],
})
export class CharactersPresentationModule { }
