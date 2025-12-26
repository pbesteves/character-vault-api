import { ApiProperty } from '@nestjs/swagger';
import { DaggerheartSheetSchema } from 'src/infrastructure/validators/types/daggerheart/sheet.schema';
import { Dnd5eSheetSchema } from 'src/infrastructure/validators/types/dnd5e/sheet.schema';

export class CreateCharacterDto {
  @ApiProperty()
  sheet: Dnd5eSheetSchema | DaggerheartSheetSchema;

  @ApiProperty()
  image?: string;

  @ApiProperty()
  system: 'dnd5e' | 'daggerheart';
}
