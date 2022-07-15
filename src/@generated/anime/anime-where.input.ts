import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class AnimeWhereInput {

    @Field(() => [AnimeWhereInput], {nullable:true})
    AND?: Array<AnimeWhereInput>;

    @Field(() => [AnimeWhereInput], {nullable:true})
    OR?: Array<AnimeWhereInput>;

    @Field(() => [AnimeWhereInput], {nullable:true})
    NOT?: Array<AnimeWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;
}
