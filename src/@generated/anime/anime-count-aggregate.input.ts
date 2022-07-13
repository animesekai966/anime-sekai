import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AnimeCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    malId?: true;

    @Field(() => Boolean, {nullable:true})
    anilistId?: true;

    @Field(() => Boolean, {nullable:true})
    animeXId?: true;

    @Field(() => Boolean, {nullable:true})
    banner?: true;

    @Field(() => Boolean, {nullable:true})
    type?: true;

    @Field(() => Boolean, {nullable:true})
    duration?: true;

    @Field(() => Boolean, {nullable:true})
    ageRating?: true;

    @Field(() => Boolean, {nullable:true})
    season?: true;

    @Field(() => Boolean, {nullable:true})
    source?: true;

    @Field(() => Boolean, {nullable:true})
    status?: true;

    @Field(() => Boolean, {nullable:true})
    episodesCount?: true;

    @Field(() => Boolean, {nullable:true})
    openings?: true;

    @Field(() => Boolean, {nullable:true})
    endings?: true;

    @Field(() => Boolean, {nullable:true})
    genreIDs?: true;

    @Field(() => Boolean, {nullable:true})
    studioIDs?: true;

    @Field(() => Boolean, {nullable:true})
    producerIDs?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}