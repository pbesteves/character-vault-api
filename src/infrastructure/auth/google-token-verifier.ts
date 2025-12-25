import { Injectable, UnauthorizedException } from '@nestjs/common';
import { OAuth2Client, TokenPayload } from 'google-auth-library';

@Injectable()
export class GoogleTokenVerifier {
  private client: OAuth2Client;

  constructor() {
    this.client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
  }

  async verify(idToken: string): Promise<TokenPayload> {
    try {
      const ticket = await this.client.verifyIdToken({
        idToken,
        audience: process.env.GOOGLE_CLIENT_ID,
      });

      const payload = ticket.getPayload();

      if (!payload) {
        throw new UnauthorizedException('Invalid Google Token payload');
      }

      return payload;
    } catch (error) {
      throw new UnauthorizedException('Invalid or expired Google ID token');
    }
  }
}
