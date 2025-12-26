import { JsonValue } from 'src/generated/prisma/internal/prismaNamespace';
import { Dnd5eSheetSchema } from './types/dnd5e/sheet.schema';
import { Strategy } from './sheet-validator.strategy';
import { DomainJson } from 'src/domain/types/domain-json';

export class Dnd5eValidatorStrategy implements Strategy {
  constructor() { }

  validate(sheet: JsonValue): DomainJson {
    const parsed = Dnd5eSheetSchema.parse(sheet);
    return parsed as unknown as DomainJson;
  }
}

