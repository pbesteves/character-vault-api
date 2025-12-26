import { HttpStatus } from '@nestjs/common';
import { DomainException } from 'src/exception-filter/domain-exception';

export class SystemNameCannotBeEmpty extends DomainException {
  constructor() {
    super('', HttpStatus.BAD_REQUEST, 'System name cannot be empty');
  }
}

export class SystemNotSupported extends DomainException {
  constructor(systemName: string) {
    super('', HttpStatus.BAD_REQUEST, `System ${systemName} is not supported`);
  }
}
