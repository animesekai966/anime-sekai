import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnimeDemographicWhereUniqueInput } from './anime-demographic-where-unique.input';
import { Type } from 'class-transformer';
import { AnimeDemographicCreateInput } from './anime-demographic-create.input';
import { AnimeDemographicUpdateInput } from './anime-demographic-update.input';

@ArgsType()
export class UpsertOneAnimeDemographicArgs {

    @Field(() => AnimeDemographicWhereUniqueInput, {nullable:false})
    @Type(() => AnimeDemographicWhereUniqueInput)
    where!: AnimeDemographicWhereUniqueInput;

    @Field(() => AnimeDemographicCreateInput, {nullable:false})
    @Type(() => AnimeDemographicCreateInput)
    create!: AnimeDemographicCreateInput;

    @Field(() => AnimeDemographicUpdateInput, {nullable:false})
    @Type(() => AnimeDemographicUpdateInput)
    update!: AnimeDemographicUpdateInput;
}
