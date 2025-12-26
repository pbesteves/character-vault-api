import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/application/prisma/prisma.service';
import { Account } from 'src/domain/account/account';
import { AccountRepository } from 'src/domain/account/account.repository';
import { AccountMapper } from '../mappers/account/account.mapper';

@Injectable()
export class PrismaAccountRepository implements AccountRepository {
  constructor(private readonly prismaService: PrismaService) { }

  async findById(id: string): Promise<Account | null> {
    const record = await this.prismaService.account.findUnique({
      where: { id },
    });

    if (!record) return null;

    return AccountMapper.toDomain(record);
  }

  async findByAccountId(accountId: string): Promise<Account | null> {
    const record = await this.prismaService.account.findFirst({
      where: { accountId },
    });

    if (!record) return null;

    return AccountMapper.toDomain(record);
  }
}
