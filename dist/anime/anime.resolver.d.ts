import { AnimeService } from './anime.service';
import { CreateAnimeInput } from './dto/create-anime.input';
import { UpdateAnimeInput } from './dto/update-anime.input';
export declare class AnimeResolver {
    private readonly animeService;
    constructor(animeService: AnimeService);
    createAnime(createAnimeInput: CreateAnimeInput): string;
    findAll(): string;
    findOne(id: number): string;
    updateAnime(updateAnimeInput: UpdateAnimeInput): string;
    removeAnime(id: number): string;
}
