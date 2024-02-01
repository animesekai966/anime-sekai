import { CharactersService } from './characters.service';
import { CreateCharacterInput } from './dto/create-character.input';
import { UpdateCharacterInput } from './dto/update-character.input';
export declare class CharactersResolver {
    private readonly charactersService;
    constructor(charactersService: CharactersService);
    createCharacter(createCharacterInput: CreateCharacterInput): string;
    findAll(): string;
    findOne(id: number): string;
    updateCharacter(updateCharacterInput: UpdateCharacterInput): string;
    removeCharacter(id: number): string;
}
