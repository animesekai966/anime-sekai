import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class GenreWhereInput {

    @Field(() => [GenreWhereInput], {nullable:true})
    AND?: Array<GenreWhereInput>;

    @Field(() => [GenreWhereInput], {nullable:true})
    OR?: Array<GenreWhereInput>;

    @Field(() => [GenreWhereInput], {nullable:true})
    NOT?: Array<GenreWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;
}
