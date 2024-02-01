import { CreateAnimeInput } from './dto/create-anime.input';
import { UpdateAnimeInput } from './dto/update-anime.input';
export declare class AnimeService {
    create(createAnimeInput: CreateAnimeInput): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateAnimeInput: UpdateAnimeInput): string;
    remove(id: number): string;
}
