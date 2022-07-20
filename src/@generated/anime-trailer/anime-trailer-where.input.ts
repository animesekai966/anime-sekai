import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class AnimeTrailerWhereInput {

    @Field(() => [AnimeTrailerWhereInput], {nullable:true})
    AND?: Array<AnimeTrailerWhereInput>;

    @Field(() => [AnimeTrailerWhereInput], {nullable:true})
    OR?: Array<AnimeTrailerWhereInput>;

    @Field(() => [AnimeTrailerWhereInput], {nullable:true})
    NOT?: Array<AnimeTrailerWhereInput>;

    @Field(() => StringNullableFilter, {nullable:true})
    url?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    thumbnail?: StringNullableFilter;
}
