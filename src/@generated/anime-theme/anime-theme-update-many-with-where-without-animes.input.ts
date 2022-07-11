import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeThemeScalarWhereInput } from './anime-theme-scalar-where.input';
import { Type } from 'class-transformer';
import { AnimeThemeUpdateManyMutationInput } from './anime-theme-update-many-mutation.input';

@InputType()
export class AnimeThemeUpdateManyWithWhereWithoutAnimesInput {

    @Field(() => AnimeThemeScalarWhereInput, {nullable:false})
    @Type(() => AnimeThemeScalarWhereInput)
    where!: AnimeThemeScalarWhereInput;

    @Field(() => AnimeThemeUpdateManyMutationInput, {nullable:false})
    @Type(() => AnimeThemeUpdateManyMutationInput)
    data!: AnimeThemeUpdateManyMutationInput;
}
