import { JsonValue } from 'src/generated/prisma/internal/prismaNamespace';
import { System } from '../system/system';

export class Character {
  private constructor(
    readonly id: string,
    readonly accountId: string,
    private _system: System,
    private _sheet: JsonValue,
    private _image: string | null,
  ) { }

  static create(props: {
    id: string;
    accountId: string;
    system: System;
    sheet: JsonValue;
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

  public get sheet(): JsonValue {
    return this._sheet;
  }

  public get image(): string | null {
    return this._image ?? null;
  }
}
