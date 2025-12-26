import { SupportedSystems } from './types';

export class System {
  private constructor(readonly name: SupportedSystems) { }

  static create(props: { name: SupportedSystems }): System {
    if (!props.name.trim()) {
      throw new Error('System name cannot be empty');
    }

    return new System(props.name);
  }

  equals(other: System): boolean {
    return this.name === other.name;
  }
}
