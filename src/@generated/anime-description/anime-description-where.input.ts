import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class AnimeDescriptionWhereInput {

    @Field(() => [AnimeDescriptionWhereInput], {nullable:true})
    AND?: Array<AnimeDescriptionWhereInput>;

    @Field(() => [AnimeDescriptionWhereInput], {nullable:true})
    OR?: Array<AnimeDescriptionWhereInput>;

    @Field(() => [AnimeDescriptionWhereInput], {nullable:true})
    NOT?: Array<AnimeDescriptionWhereInput>;

    @Field(() => StringNullableFilter, {nullable:true})
    ar?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    en?: StringNullableFilter;
}
