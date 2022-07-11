import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AnimeDemographicCreateanimeIDsInput } from './anime-demographic-createanime-i-ds.input';
import { AnimeUncheckedCreateNestedManyWithoutDemographicsInput } from '../anime/anime-unchecked-create-nested-many-without-demographics.input';

@InputType()
export class AnimeDemographicUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:false})
    malId!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => AnimeDemographicCreateanimeIDsInput, {nullable:true})
    animeIDs?: AnimeDemographicCreateanimeIDsInput;

    @Field(() => AnimeUncheckedCreateNestedManyWithoutDemographicsInput, {nullable:true})
    animes?: AnimeUncheckedCreateNestedManyWithoutDemographicsInput;
}
