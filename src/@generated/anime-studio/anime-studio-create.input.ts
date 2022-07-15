import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AnimeCreateNestedManyWithoutStudiosInput } from '../anime/anime-create-nested-many-without-studios.input';
import { AnimeStudioCreateanimeIDsInput } from './anime-studio-createanime-i-ds.input';
import { HideField } from '@nestjs/graphql';
import { AnimeCreateNestedManyWithoutProducersInput } from '../anime/anime-create-nested-many-without-producers.input';

@InputType()
export class AnimeStudioCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:false})
    malId!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => AnimeCreateNestedManyWithoutStudiosInput, {nullable:true})
    animes?: AnimeCreateNestedManyWithoutStudiosInput;

    @HideField()
    animeIDs?: AnimeStudioCreateanimeIDsInput;

    @HideField()
    animesProduced?: AnimeCreateNestedManyWithoutProducersInput;
}
