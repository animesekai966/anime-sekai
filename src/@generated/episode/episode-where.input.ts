import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { EpisodeServerObjectEqualityInput } from '../prisma/episode-server-object-equality.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class EpisodeWhereInput {

    @Field(() => [EpisodeWhereInput], {nullable:true})
    AND?: Array<EpisodeWhereInput>;

    @Field(() => [EpisodeWhereInput], {nullable:true})
    OR?: Array<EpisodeWhereInput>;

    @Field(() => [EpisodeWhereInput], {nullable:true})
    NOT?: Array<EpisodeWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    number?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    filler?: BoolFilter;

    @Field(() => [EpisodeServerObjectEqualityInput], {nullable:true})
    servers?: Array<EpisodeServerObjectEqualityInput>;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;
}
