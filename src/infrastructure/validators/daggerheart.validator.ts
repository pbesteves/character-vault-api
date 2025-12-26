import { JsonValue } from 'src/generated/prisma/internal/prismaNamespace';
import { Strategy } from './sheet-validator.strategy';
import { DaggerheartSheetSchema } from './types/daggerheart/sheet.schema';
import { DomainJson } from 'src/domain/types/domain-json';

export class DaggerheartValidatorStrategy implements Strategy {
  constructor() { }

  validate(sheet: JsonValue): DomainJson {
    const parsed = DaggerheartSheetSchema.parse(sheet);
    return parsed as unknown as DomainJson;
  }
}
