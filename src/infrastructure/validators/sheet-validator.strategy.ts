import { DomainJson } from 'src/domain/types/domain-json';
import { JsonValue } from 'src/generated/prisma/internal/prismaNamespace';
import { Dnd5eValidatorStrategy } from './dnd5e.validator';
import { DaggerheartValidatorStrategy } from './daggerheart.validator';
import { SupportedSystems } from 'src/domain/system/types';

export interface Strategy {
  validate(sheet: JsonValue): DomainJson;
}

export class ValidatorStrategy {
  private _strategy: Strategy;

  constructor(systemName: SupportedSystems) {
    if (systemName === 'dnd5e') {
      this._strategy = new Dnd5eValidatorStrategy();
    } else if (systemName === 'daggerheart') {
      this._strategy = new DaggerheartValidatorStrategy();
    }
  }

  public set strategy(value: Strategy) {
    this._strategy = value;
  }

  validate(sheet: JsonValue): DomainJson {
    return this._strategy.validate(sheet);
  }
}
