import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnimeDemographicWhereInput } from './anime-demographic-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyAnimeDemographicArgs {

    @Field(() => AnimeDemographicWhereInput, {nullable:true})
    @Type(() => AnimeDemographicWhereInput)
    where?: AnimeDemographicWhereInput;
}
