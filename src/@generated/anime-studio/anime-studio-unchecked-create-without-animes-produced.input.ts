import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AnimeUncheckedCreateNestedManyWithoutStudiosInput } from '../anime/anime-unchecked-create-nested-many-without-studios.input';
import { AnimeStudioCreateanimeIDsInput } from './anime-studio-createanime-i-ds.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class AnimeStudioUncheckedCreateWithoutAnimesProducedInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:false})
    malId!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => AnimeUncheckedCreateNestedManyWithoutStudiosInput, {nullable:true})
    animes?: AnimeUncheckedCreateNestedManyWithoutStudiosInput;

    @HideField()
    animeIDs?: AnimeStudioCreateanimeIDsInput;
}
