import { Character } from 'src/domain/character/character';
import { System } from 'src/domain/system/system';
import { SupportedSystems } from 'src/domain/system/types';
import { DomainJson } from 'src/domain/types/domain-json';
import {
  InputJsonValue,
  JsonValue,
} from 'src/generated/prisma/internal/prismaNamespace';
import {
  CharacterCreateInput,
  CharacterUpdateInput,
  CharacterModel as PrismaCharacter,
} from 'src/generated/prisma/models';

interface CharacterPersistance {
  id: string;
  accountId: string;
  systemName: SupportedSystems;
  sheet: JsonValue;
  image: string | null;
}

export class CharacterMapper {
  static toDomain(raw: PrismaCharacter): Character {
    return Character.restore({
      id: raw.id,
      accountId: raw.accountId,
      system: System.create({
        name: raw.systemName as SupportedSystems,
      }),
      sheet: raw.sheet as DomainJson,
      image: raw.image,
    });
  }

  static toPersistance(character: Character): CharacterPersistance {
    return {
      id: character.id,
      accountId: character.accountId,
      systemName: character.system.name,
      sheet: character.sheet,
      image: character.image,
    } satisfies CharacterPersistance;
  }

  static toCreateInput(character: Character): CharacterCreateInput {
    return {
      id: character.id,
      account: { connect: { id: character.accountId } },
      systemName: character.system.name,
      sheet: character.sheet as InputJsonValue,
      image: character.image,
    };
  }

  static toUpdateInput(character: Character): CharacterUpdateInput {
    return {
      systemName: character.system.name,
      sheet: character.sheet as InputJsonValue,
      image: character.image ?? null,
    };
  }
}
