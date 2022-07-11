import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AnimeStudioRole } from '../prisma/anime-studio-role.enum';
import { AnimeStudioCreateanimeIDsInput } from './anime-studio-createanime-i-ds.input';

@InputType()
export class AnimeStudioCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:false})
    malId!: number;

    @Field(() => AnimeStudioRole, {nullable:true})
    role?: keyof typeof AnimeStudioRole;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => AnimeStudioCreateanimeIDsInput, {nullable:true})
    animeIDs?: AnimeStudioCreateanimeIDsInput;
}
