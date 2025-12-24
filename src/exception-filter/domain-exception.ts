import { HttpStatus } from '@nestjs/common';

export class DomainException extends Error {
  readonly messages: string[];

  constructor(
    public readonly code: string,
    public readonly httpStatus: HttpStatus,
    message: string | string[],
  ) {
    super();
    this.name = this.constructor.name;
    this.messages = Array.isArray(message) ? message : [message];
  }
}
