import { Account } from 'src/domain/account/account';
import { AccountModel as PrismaAccount } from 'src/generated/prisma/models';

export class AccountMapper {
  static toDomain(raw: PrismaAccount): Account {
    return Account.rehydrate(raw.id);
  }
}
