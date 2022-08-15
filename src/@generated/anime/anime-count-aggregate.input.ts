import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class AnimeCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    malId?: true;

    @Field(() => Boolean, {nullable:true})
    anilistId?: true;

    @HideField()
    animeXId?: true;

    @Field(() => Boolean, {nullable:true})
    format?: true;

    @Field(() => Boolean, {nullable:true})
    status?: true;

    @Field(() => Boolean, {nullable:true})
    season?: true;

    @Field(() => Boolean, {nullable:true})
    episodesCount?: true;

    @Field(() => Boolean, {nullable:true})
    duration?: true;

    @Field(() => Boolean, {nullable:true})
    countryOfOrigin?: true;

    @Field(() => Boolean, {nullable:true})
    isLicensed?: true;

    @Field(() => Boolean, {nullable:true})
    isAdult?: true;

    @Field(() => Boolean, {nullable:true})
    rating?: true;

    @Field(() => Boolean, {nullable:true})
    source?: true;

    @Field(() => Boolean, {nullable:true})
    openings?: true;

    @Field(() => Boolean, {nullable:true})
    endings?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @HideField()
    producerIDs?: true;

    @HideField()
    studioIDs?: true;

    @HideField()
    genreIDs?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
