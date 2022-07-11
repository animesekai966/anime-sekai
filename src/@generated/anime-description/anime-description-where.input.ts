import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class AnimeDescriptionWhereInput {

    @Field(() => [AnimeDescriptionWhereInput], {nullable:true})
    AND?: Array<AnimeDescriptionWhereInput>;

    @Field(() => [AnimeDescriptionWhereInput], {nullable:true})
    OR?: Array<AnimeDescriptionWhereInput>;

    @Field(() => [AnimeDescriptionWhereInput], {nullable:true})
    NOT?: Array<AnimeDescriptionWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    ar?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    en?: StringFilter;
}
