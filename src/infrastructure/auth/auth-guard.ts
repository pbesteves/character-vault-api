import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { GoogleTokenVerifier } from './google-token-verifier';
import { Request } from 'express';
import { PrismaAccountRepository } from '../prisma/repositories/prisma-account.repository';
import { ACCOUNT_REPOSITORY } from 'src/domain/account/account.repository';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly verifier: GoogleTokenVerifier,
    @Inject(ACCOUNT_REPOSITORY)
    private readonly prismaAccountRepository: PrismaAccountRepository,
  ) { }

  async canActivate(ctx: ExecutionContext): Promise<boolean> {
    const request = ctx.switchToHttp().getRequest<Request>();
    const authHeader = request.headers.authorization;

    if (!authHeader?.startsWith('Bearer ')) {
      throw new UnauthorizedException('Missing Authorization header');
    }

    const idToken = authHeader.replace('Bearer ', '');

    const payload = await this.verifier.verify(idToken);
    const accountId = payload.sub;

    const account =
      await this.prismaAccountRepository.findByAccountId(accountId);

    if (!account) {
      throw new UnauthorizedException();
    }

    request.user = {
      account: { id: account?.id },
      provider: {
        accountId: payload.sub,
        email: payload.email,
        emailVerified: payload.email_verified,
        name: payload.name,
      },
    };

    return true;
  }
}
