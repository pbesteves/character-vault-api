export class System {
  private constructor(
    readonly name: string,
    readonly version: number,
  ) { }

  static create(props: { name: string; version: number }): System {
    if (!props.name.trim()) {
      throw new Error('System name cannot be empty');
    }

    if (props.version <= 0) {
      throw new Error('System version must be positive');
    }

    return new System(props.name, props.version);
  }

  equals(other: System): boolean {
    return this.name === other.name && this.version === other.version;
  }
}
