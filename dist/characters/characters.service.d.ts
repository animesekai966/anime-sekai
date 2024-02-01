import { CreateCharacterInput } from './dto/create-character.input';
import { UpdateCharacterInput } from './dto/update-character.input';
export declare class CharactersService {
    create(createCharacterInput: CreateCharacterInput): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateCharacterInput: UpdateCharacterInput): string;
    remove(id: number): string;
}
