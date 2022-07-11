import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AnimeThemeCreateanimeIDsInput } from './anime-theme-createanime-i-ds.input';

@InputType()
export class AnimeThemeCreateWithoutAnimesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:false})
    malId!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => AnimeThemeCreateanimeIDsInput, {nullable:true})
    animeIDs?: AnimeThemeCreateanimeIDsInput;
}
