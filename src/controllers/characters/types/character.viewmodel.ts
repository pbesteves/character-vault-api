import { ApiProperty } from '@nestjs/swagger';
import { type SupportedSystems } from 'src/domain/system/types';
import { DaggerheartSheetSchema } from 'src/infrastructure/validators/types/daggerheart/sheet.schema';
import { Dnd5eSheetSchema } from 'src/infrastructure/validators/types/dnd5e/sheet.schema';
import z from 'zod';

export const CharacterViewModelSchema = z.object({
  id: z.uuidv4(),
  accountId: z.uuid(),
  system: z.object({ name: z.enum(['daggerheart', 'dnd5e']) }),
  sheet: z.union([Dnd5eSheetSchema, DaggerheartSheetSchema]),
  image: z.string().optional(),
});
export type CharacterViewModelSchema = z.infer<typeof CharacterViewModelSchema>;

export class CharacterViewModel implements CharacterViewModelSchema {
  @ApiProperty()
  id: string;

  @ApiProperty()
  accountId: string;

  @ApiProperty()
  image?: string;

  @ApiProperty()
  sheet: Dnd5eSheetSchema | DaggerheartSheetSchema;

  @ApiProperty()
  system: { name: SupportedSystems };
}
