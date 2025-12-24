import { Inject, Injectable } from '@nestjs/common';
import { Character } from 'src/domain/character/character';
import { CHARACTER_REPOSITORY } from 'src/domain/character/character.repository';
import { CharacterNotFound } from 'src/domain/character/errors/character.error';
import { PrismaCharacterRepository } from 'src/infrastructure/prisma/repositories/prisma-character.repository';

@Injectable()
export class CharactersService {
  constructor(
    @Inject(CHARACTER_REPOSITORY)
    private readonly prismaCharacterRepository: PrismaCharacterRepository,
  ) { }

  async getCharacterById(id: string): Promise<Character> {
    const character = await this.prismaCharacterRepository.findById(id);

    if (!character) {
      throw new CharacterNotFound(id);
    }

    return character;
  }
}
