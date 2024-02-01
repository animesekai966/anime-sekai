import { CreateEpisodeInput } from './dto/create-episode.input';
import { UpdateEpisodeInput } from './dto/update-episode.input';
export declare class EpisodesService {
    create(createEpisodeInput: CreateEpisodeInput): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateEpisodeInput: UpdateEpisodeInput): string;
    remove(id: number): string;
}
