import { Inject, Injectable } from '@nestjs/common';
import { Account } from 'src/domain/account/account';
import { ACCOUNT_REPOSITORY } from 'src/domain/account/account.repository';
import { AccountNotFoundForUser } from 'src/domain/account/errors/account.errors';
import { PrismaAccountRepository } from 'src/infrastructure/prisma/repositories/prisma-account.repository';

@Injectable()
export class AccountsService {
  constructor(
    @Inject(ACCOUNT_REPOSITORY)
    private readonly prismaAccountRepository: PrismaAccountRepository,
  ) { }

  async findById(id: string): Promise<Account> {
    const account = await this.prismaAccountRepository.findById(id);

    if (!account) {
      throw new AccountNotFoundForUser(id);
    }

    return account;
  }
}
