import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AnimeStudioType } from '../prisma/anime-studio-type.enum';
import { AnimeStudioCreateanimeIDsInput } from './anime-studio-createanime-i-ds.input';

@InputType()
export class AnimeStudioCreateWithoutAnimesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:false})
    malId!: number;

    @Field(() => AnimeStudioType, {nullable:true})
    type?: keyof typeof AnimeStudioType;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => AnimeStudioCreateanimeIDsInput, {nullable:true})
    animeIDs?: AnimeStudioCreateanimeIDsInput;
}
