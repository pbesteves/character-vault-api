import { JsonValue } from 'src/generated/prisma/internal/prismaNamespace';
import { System } from '../system/system';
import { ValidatorStrategy } from 'src/infrastructure/validators/sheet-validator.strategy';
import { DomainJson } from '../types/domain-json';
import { Account } from '../account/account';
import { v4 as uuidv4 } from 'uuid';

export class Character {
  private constructor(
    readonly id: string,
    readonly accountId: string,
    private _system: System,
    private _sheet: DomainJson,
    private _image: string | null,
  ) { }

  static create(props: {
    accountId: string;
    system: System;
    sheet: DomainJson;
    image?: string | null;
  }): Character {
    return new Character(
      uuidv4(),
      props.accountId,
      props.system,
      props.sheet,
      props.image ?? null,
    );
  }

  static restore(props: {
    id: string;
    accountId: string;
    system: System;
    sheet: DomainJson;
    image?: string | null;
  }): Character {
    return new Character(
      props.id,
      props.accountId,
      props.system,
      props.sheet,
      props.image ?? null,
    );
  }

  public get system(): System {
    return this._system;
  }

  public get sheet(): DomainJson {
    return this._sheet;
  }

  public get image(): string | null {
    return this._image ?? null;
  }

  public updateSheet(sheet: JsonValue): void {
    const validator = new ValidatorStrategy(this._system.name);

    this._sheet = validator.validate(sheet);
  }

  public isOwnedByAccount(account: Account): boolean {
    return account.ownsCharacter(this.accountId);
  }
}
