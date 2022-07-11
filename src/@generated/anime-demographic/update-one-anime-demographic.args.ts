import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnimeDemographicUpdateInput } from './anime-demographic-update.input';
import { Type } from 'class-transformer';
import { AnimeDemographicWhereUniqueInput } from './anime-demographic-where-unique.input';

@ArgsType()
export class UpdateOneAnimeDemographicArgs {

    @Field(() => AnimeDemographicUpdateInput, {nullable:false})
    @Type(() => AnimeDemographicUpdateInput)
    data!: AnimeDemographicUpdateInput;

    @Field(() => AnimeDemographicWhereUniqueInput, {nullable:false})
    @Type(() => AnimeDemographicWhereUniqueInput)
    where!: AnimeDemographicWhereUniqueInput;
}
