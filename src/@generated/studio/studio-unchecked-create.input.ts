import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AnimeUncheckedCreateNestedManyWithoutStudiosInput } from '../anime/anime-unchecked-create-nested-many-without-studios.input';
import { AnimeUncheckedCreateNestedManyWithoutProducersInput } from '../anime/anime-unchecked-create-nested-many-without-producers.input';
import { StudioCreateanimatedAnimeIDsInput } from './studio-createanimated-anime-i-ds.input';
import { StudioCreateproducedAnimeIDsInput } from './studio-createproduced-anime-i-ds.input';

@InputType()
export class StudioUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:false})
    malId!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => AnimeUncheckedCreateNestedManyWithoutStudiosInput, {nullable:true})
    animatedAnimes?: AnimeUncheckedCreateNestedManyWithoutStudiosInput;

    @Field(() => AnimeUncheckedCreateNestedManyWithoutProducersInput, {nullable:true})
    producedAnimes?: AnimeUncheckedCreateNestedManyWithoutProducersInput;

    @Field(() => StudioCreateanimatedAnimeIDsInput, {nullable:true})
    animatedAnimeIDs?: StudioCreateanimatedAnimeIDsInput;

    @Field(() => StudioCreateproducedAnimeIDsInput, {nullable:true})
    producedAnimeIDs?: StudioCreateproducedAnimeIDsInput;
}
