export class Account {
  private constructor(private readonly _id: string) { }

  public get id(): string {
    return this._id;
  }

  static rehydrate(id: string): Account {
    return new Account(id);
  }

  ownsCharacter(characterAccountId: string): boolean {
    return this.id === characterAccountId;
  }
}
