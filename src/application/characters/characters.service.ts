import { Inject, Injectable } from '@nestjs/common';
import { Account } from 'src/domain/account/account';
import { UnauthorizedCharacterAccess } from 'src/domain/account/errors/account.errors';
import { Character } from 'src/domain/character/character';
import { CHARACTER_REPOSITORY } from 'src/domain/character/character.repository';
import {
  CharacterNotFound,
  InvalidCharacterSheet,
} from 'src/domain/character/errors/character.error';
import {
  SystemNameCannotBeEmpty,
  SystemNotSupported,
} from 'src/domain/system/errors/system.errors';
import { System } from 'src/domain/system/system';
import { DomainJson } from 'src/domain/types/domain-json';
import { PrismaCharacterRepository } from 'src/infrastructure/prisma/repositories/prisma-character.repository';
import { CreateCharacterDto } from 'src/presentation/dtos/character/create-character.dto';

@Injectable()
export class CharactersService {
  constructor(
    @Inject(CHARACTER_REPOSITORY)
    private readonly prismaCharacterRepository: PrismaCharacterRepository,
  ) { }

  async getCharacterByIdAndAccount(
    id: string,
    account: Account,
  ): Promise<Character> {
    const character = await this.prismaCharacterRepository.findById(id);

    if (!character) {
      throw new CharacterNotFound(id);
    }

    if (!character.isOwnedByAccount(account)) {
      throw new UnauthorizedCharacterAccess(account.id);
    }

    return character;
  }

  async create(createCharacterDto: CreateCharacterDto, id: string) {
    const { image, sheet, system: systemName } = createCharacterDto;

    if (!systemName) {
      throw new SystemNameCannotBeEmpty();
    }

    if (systemName !== 'daggerheart' && systemName !== 'dnd5e') {
      throw new SystemNotSupported(systemName);
    }

    const system = System.create({ name: systemName });
    const character = Character.create({
      accountId: id,
      sheet: sheet as unknown as DomainJson,
      system,
      image,
    });

    character.updateSheet(sheet as unknown as DomainJson);

    if (!character.sheet) {
      throw new InvalidCharacterSheet(systemName);
    }

    await this.prismaCharacterRepository.save(character);
  }
}
