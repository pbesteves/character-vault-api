import { Character } from 'src/domain/character/character';
import { CharacterViewModelSchema } from '../types/character.viewmodel';
import { Dnd5eSheetSchema } from 'src/infrastructure/validators/types/dnd5e/sheet.schema';
import { DaggerheartSheetSchema } from 'src/infrastructure/validators/types/daggerheart/sheet.schema';

export function fromCharacterDomainToViewModel(
  character: Character,
): CharacterViewModelSchema {
  return {
    accountId: character.accountId,
    id: character.id,
    image: character.image ?? '',
    sheet: character.sheet as Dnd5eSheetSchema | DaggerheartSheetSchema,
    system: character.system,
  };
}
