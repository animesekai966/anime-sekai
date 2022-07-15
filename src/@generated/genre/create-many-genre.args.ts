import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GenreCreateManyInput } from './genre-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyGenreArgs {

    @Field(() => [GenreCreateManyInput], {nullable:false})
    @Type(() => GenreCreateManyInput)
    data!: Array<GenreCreateManyInput>;
}
