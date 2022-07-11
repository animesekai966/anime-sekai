import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumServerQuailtyFilter } from '../prisma/enum-server-quailty-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class EpisodeServerWhereInput {

    @Field(() => [EpisodeServerWhereInput], {nullable:true})
    AND?: Array<EpisodeServerWhereInput>;

    @Field(() => [EpisodeServerWhereInput], {nullable:true})
    OR?: Array<EpisodeServerWhereInput>;

    @Field(() => [EpisodeServerWhereInput], {nullable:true})
    NOT?: Array<EpisodeServerWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    url?: StringFilter;

    @Field(() => EnumServerQuailtyFilter, {nullable:true})
    quality?: EnumServerQuailtyFilter;

    @Field(() => StringFilter, {nullable:true})
    translatedBy?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    dateAdded?: DateTimeFilter;
}
