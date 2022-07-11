import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnimeCreateManyInput } from './anime-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyAnimeArgs {

    @Field(() => [AnimeCreateManyInput], {nullable:false})
    @Type(() => AnimeCreateManyInput)
    data!: Array<AnimeCreateManyInput>;
}
