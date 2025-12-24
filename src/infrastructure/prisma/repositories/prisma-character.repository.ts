import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/application/prisma/prisma.service';
import { Character } from 'src/domain/character/character';
import { CharacterMapper } from '../mappers/character/character.mapper';
import { CharacterRepository } from 'src/domain/character/character.repository';

@Injectable()
export class PrismaCharacterRepository implements CharacterRepository {
  constructor(private readonly prismaService: PrismaService) { }

  async findAll(): Promise<Character[]> {
    const records = await this.prismaService.character.findMany();

    return records.map((r) => CharacterMapper.toDomain(r));
  }

  async findById(id: string): Promise<Character | null> {
    const record = await this.prismaService.character.findUnique({
      where: { id },
    });

    if (!record) return null;

    return CharacterMapper.toDomain(record);
  }

  async save(character: Character): Promise<void> {
    await this.prismaService.character.upsert({
      where: { id: character.id },
      update: CharacterMapper.toUpdateInput(character),
      create: CharacterMapper.toCreateInput(character),
    });
  }

  async delete(id: string): Promise<void> {
    await this.prismaService.character.delete({ where: { id } });
  }
}
