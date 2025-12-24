import { HttpStatus } from '@nestjs/common';
import { DomainException } from 'src/exception-filter/domain-exception';

export class CharacterNotFound extends DomainException {
  constructor(characterId: string) {
    super('', HttpStatus.NOT_FOUND, `Character ${characterId} not found`);
  }
}
