import { HttpStatus } from '@nestjs/common';
import { DomainException } from 'src/exception-filter/domain-exception';

export class CharacterNotFound extends DomainException {
  constructor(characterId: string) {
    super('', HttpStatus.NOT_FOUND, `Character ${characterId} not found.`);
  }
}

export class InvalidCharacterSheet extends DomainException {
  constructor(systemName: string) {
    super(
      '',
      HttpStatus.BAD_REQUEST,
      `Character sheet for ${systemName} is invalid.`,
    );
  }
}
