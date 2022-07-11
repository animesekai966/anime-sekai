import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AnimeDemographicCreateanimeIDsInput } from './anime-demographic-createanime-i-ds.input';
import { AnimeCreateNestedManyWithoutDemographicsInput } from '../anime/anime-create-nested-many-without-demographics.input';

@InputType()
export class AnimeDemographicCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:false})
    malId!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => AnimeDemographicCreateanimeIDsInput, {nullable:true})
    animeIDs?: AnimeDemographicCreateanimeIDsInput;

    @Field(() => AnimeCreateNestedManyWithoutDemographicsInput, {nullable:true})
    animes?: AnimeCreateNestedManyWithoutDemographicsInput;
}
