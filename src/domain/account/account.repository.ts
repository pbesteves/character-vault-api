import { Account } from './account';

export const ACCOUNT_REPOSITORY = Symbol('AccountRepository');

export interface AccountRepository {
  findById(id: string): Promise<Account | null>;
  findByAccountId(accountId: string): Promise<Account | null>;
}
