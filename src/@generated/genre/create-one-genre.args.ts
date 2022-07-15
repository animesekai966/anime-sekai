import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GenreCreateInput } from './genre-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneGenreArgs {

    @Field(() => GenreCreateInput, {nullable:false})
    @Type(() => GenreCreateInput)
    data!: GenreCreateInput;
}
