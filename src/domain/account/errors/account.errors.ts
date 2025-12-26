import { HttpStatus } from '@nestjs/common';
import { DomainException } from 'src/exception-filter/domain-exception';

export class UnauthorizedCharacterAccess extends DomainException {
  constructor(accountId: string) {
    super(
      '',
      HttpStatus.UNAUTHORIZED,
      `Account ${accountId} cannot access this resource`,
    );
  }
}

export class AccountNotFoundForUser extends DomainException {
  constructor(userId: string) {
    super('', HttpStatus.NOT_FOUND, `Account not found for user ${userId}`);
  }
}
