import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { GoogleTokenVerifier } from './google-token-verifier';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly verifier: GoogleTokenVerifier) { }

  async canActivate(ctx: ExecutionContext): Promise<boolean> {
    const request = ctx.switchToHttp().getRequest<Request>();
    const authHeader = request.headers.authorization;

    if (!authHeader?.startsWith('Bearer ')) {
      throw new UnauthorizedException('Missing Authorization header');
    }

    const idToken = authHeader.replace('Bearer ', '');

    const payload = await this.verifier.verify(idToken);

    request.user = {
      id: payload.sub,
      email: payload.email,
      emailVerified: payload.email_verified,
      name: payload.name,
    };

    return true;
  }
}
