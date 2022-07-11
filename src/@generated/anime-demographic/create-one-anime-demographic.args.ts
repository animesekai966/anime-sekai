import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnimeDemographicCreateInput } from './anime-demographic-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneAnimeDemographicArgs {

    @Field(() => AnimeDemographicCreateInput, {nullable:false})
    @Type(() => AnimeDemographicCreateInput)
    data!: AnimeDemographicCreateInput;
}
