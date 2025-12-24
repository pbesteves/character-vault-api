import { ApiProperty } from '@nestjs/swagger';

interface ExceptionDetailsResponseSchema {
  title: string;
  detail: string[];
  status: number;
  instance: string;
}

export class ExceptionDetailsResponse implements ExceptionDetailsResponseSchema {
  @ApiProperty()
  title!: string;

  @ApiProperty()
  detail!: string[];

  @ApiProperty()
  status!: number;

  @ApiProperty()
  instance!: string;
}
