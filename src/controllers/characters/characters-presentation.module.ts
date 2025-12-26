import { Module } from '@nestjs/common';
import { CharactersController } from './characters.controller';
import { CharactersModule } from 'src/application/characters/characters.module';
import { AccountsModule } from 'src/application/accounts/accounts.module';

@Module({
  imports: [CharactersModule, AccountsModule],
  controllers: [CharactersController],
})
export class CharactersPresentationModule { }
