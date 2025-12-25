import { Module } from '@nestjs/common';
import { GoogleTokenVerifier } from './google-token-verifier';
import { AuthGuard } from './auth-guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
  providers: [GoogleTokenVerifier, { provide: APP_GUARD, useClass: AuthGuard }],
})
export class AuthenticationModule { }
