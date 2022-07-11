import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnimeCreateInput } from './anime-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneAnimeArgs {

    @Field(() => AnimeCreateInput, {nullable:false})
    @Type(() => AnimeCreateInput)
    data!: AnimeCreateInput;
}
