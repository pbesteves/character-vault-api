import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { AccountsService } from 'src/application/accounts/accounts.service';
import { CharactersService } from 'src/application/characters/characters.service';
import { Character } from 'src/domain/character/character';
import { ExceptionDetailsResponse } from 'src/exception-filter/utils';
import {
  GetCurrentUser,
  type CurrentUser,
} from 'src/infrastructure/decorators/get-current-user.decorator';
import { CreateCharacterDto } from 'src/presentation/dtos/character/create-character.dto';
import { fromCharacterDomainToViewModel } from './mappers/characters.mapper';
import {
  CharacterViewModel,
  CharacterViewModelSchema,
} from './types/character.viewmodel';

@Controller('characters')
export class CharactersController {
  constructor(
    private readonly charactersService: CharactersService,
    private readonly accountsService: AccountsService,
  ) { }

  @Get(':id')
  @ApiOperation({
    summary: 'Get character details by ID',
  })
  @ApiOkResponse({ type: CharacterViewModel, description: 'Character details' })
  @ApiNotFoundResponse({
    type: ExceptionDetailsResponse,
    description: 'Character not found',
  })
  @ApiUnauthorizedResponse({
    type: ExceptionDetailsResponse,
    description: 'Current user cannot access this resource',
  })
  async getCharacterById(
    @Param('id') characterId: string,
    @GetCurrentUser() currentUser: CurrentUser,
  ): Promise<CharacterViewModelSchema> {
    const {
      account: { id },
    } = currentUser;

    const account = await this.accountsService.findById(id);

    const character = await this.charactersService.getCharacterByIdAndAccount(
      characterId,
      account,
    );

    return fromCharacterDomainToViewModel(character);
  }

  @Post()
  @ApiOperation({ summary: 'Creates a new character for the current user' })
  async create(
    @Body() createCharacterDto: CreateCharacterDto,
    @GetCurrentUser() currentUser: CurrentUser,
  ): Promise<void> {
    const {
      account: { id },
    } = currentUser;

    await this.charactersService.create(createCharacterDto, id);
  }
}
