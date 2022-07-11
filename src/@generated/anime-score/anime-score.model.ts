import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AnimeScoreType } from '../anime-score-type/anime-score-type.model';

@ObjectType()
export class AnimeScore {

    @Field(() => AnimeScoreType, {nullable:false})
    mal?: AnimeScoreType;

    @Field(() => AnimeScoreType, {nullable:false})
    anilist?: AnimeScoreType;
}
