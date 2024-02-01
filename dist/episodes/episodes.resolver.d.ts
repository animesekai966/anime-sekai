import { EpisodesService } from './episodes.service';
import { CreateEpisodeInput } from './dto/create-episode.input';
import { UpdateEpisodeInput } from './dto/update-episode.input';
export declare class EpisodesResolver {
    private readonly episodesService;
    constructor(episodesService: EpisodesService);
    createEpisode(createEpisodeInput: CreateEpisodeInput): string;
    findAll(): string;
    findOne(id: number): string;
    updateEpisode(updateEpisodeInput: UpdateEpisodeInput): string;
    removeEpisode(id: number): string;
}
