import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AnimeCreateNestedManyWithoutStudiosInput } from '../anime/anime-create-nested-many-without-studios.input';
import { StudioCreateanimatedAnimeIDsInput } from './studio-createanimated-anime-i-ds.input';
import { StudioCreateproducedAnimeIDsInput } from './studio-createproduced-anime-i-ds.input';

@InputType()
export class StudioCreateWithoutProducedAnimesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:false})
    malId!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => AnimeCreateNestedManyWithoutStudiosInput, {nullable:true})
    animatedAnimes?: AnimeCreateNestedManyWithoutStudiosInput;

    @Field(() => StudioCreateanimatedAnimeIDsInput, {nullable:true})
    animatedAnimeIDs?: StudioCreateanimatedAnimeIDsInput;

    @Field(() => StudioCreateproducedAnimeIDsInput, {nullable:true})
    producedAnimeIDs?: StudioCreateproducedAnimeIDsInput;
}
