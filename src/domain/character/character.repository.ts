import { Character } from './character';

export const CHARACTER_REPOSITORY = Symbol('CharacterRepository');

export interface CharacterRepository {
  findById(id: string): Promise<Character | null>;
  findAll(): Promise<Character[]>;
  save(character: Character): Promise<void>;
  delete(id: string): Promise<void>;
}
