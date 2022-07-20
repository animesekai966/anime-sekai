import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { StudioCreateanimatedAnimeIDsInput } from './studio-createanimated-anime-i-ds.input';
import { StudioCreateproducedAnimeIDsInput } from './studio-createproduced-anime-i-ds.input';

@InputType()
export class StudioCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:false})
    malId!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => StudioCreateanimatedAnimeIDsInput, {nullable:true})
    animatedAnimeIDs?: StudioCreateanimatedAnimeIDsInput;

    @Field(() => StudioCreateproducedAnimeIDsInput, {nullable:true})
    producedAnimeIDs?: StudioCreateproducedAnimeIDsInput;
}
