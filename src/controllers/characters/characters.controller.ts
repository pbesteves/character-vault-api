import { Controller, Get, Param } from '@nestjs/common';
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { CharactersService } from 'src/application/characters/characters.service';
import { Character } from 'src/domain/character/character';
import { ExceptionDetailsResponse } from 'src/exception-filter/utils';

@Controller('characters')
export class CharactersController {
  constructor(private readonly charactersService: CharactersService) { }

  @Get(':id')
  @ApiOperation({
    summary: 'Get character details by ID',
  })
  @ApiOkResponse({ type: Character, description: 'Character details' })
  @ApiNotFoundResponse({
    type: ExceptionDetailsResponse,
    description: 'Character not found',
  })
  async getCharacterById(@Param('id') characterId: string): Promise<Character> {
    const character =
      await this.charactersService.getCharacterById(characterId);

    return character;
  }
}
