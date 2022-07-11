import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnimeDemographicWhereUniqueInput } from './anime-demographic-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueAnimeDemographicArgs {

    @Field(() => AnimeDemographicWhereUniqueInput, {nullable:false})
    @Type(() => AnimeDemographicWhereUniqueInput)
    where!: AnimeDemographicWhereUniqueInput;
}
