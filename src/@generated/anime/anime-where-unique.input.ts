import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class AnimeWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    slug?: string;

    @Field(() => Int, {nullable:true})
    malId?: number;

    @Field(() => Int, {nullable:true})
    anilistId?: number;

    @Field(() => String, {nullable:true})
    animeXId?: string;

    @Field(() => String, {nullable:true})
    animeBlkomId?: string;
}
