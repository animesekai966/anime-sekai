import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AnimeStudioCreateanimeIDsInput } from './anime-studio-createanime-i-ds.input';
import { HideField } from '@nestjs/graphql';
import { AnimeUncheckedCreateNestedManyWithoutProducersInput } from '../anime/anime-unchecked-create-nested-many-without-producers.input';

@InputType()
export class AnimeStudioUncheckedCreateWithoutAnimesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:false})
    malId!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @HideField()
    animeIDs?: AnimeStudioCreateanimeIDsInput;

    @HideField()
    animesProduced?: AnimeUncheckedCreateNestedManyWithoutProducersInput;
}
