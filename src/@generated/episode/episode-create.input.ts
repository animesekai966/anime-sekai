import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeCreateNestedOneWithoutEpisodesInput } from '../anime/anime-create-nested-one-without-episodes.input';
import { Float } from '@nestjs/graphql';
import { ServerCreateInput } from '../server/server-create.input';
import { AnimeSources } from '../prisma/anime-sources.enum';
import { EpisodeLanguage } from '../prisma/episode-language.enum';

@InputType()
export class EpisodeCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => AnimeCreateNestedOneWithoutEpisodesInput, {nullable:false})
    anime!: AnimeCreateNestedOneWithoutEpisodesInput;

    @Field(() => Float, {nullable:false})
    number!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => [ServerCreateInput], {nullable:true})
    servers?: Array<ServerCreateInput>;

    @Field(() => AnimeSources, {nullable:true})
    source?: keyof typeof AnimeSources;

    @Field(() => Boolean, {nullable:true})
    filler?: boolean;

    @Field(() => Boolean, {nullable:true})
    last?: boolean;

    @Field(() => EpisodeLanguage, {nullable:true})
    language?: keyof typeof EpisodeLanguage;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
