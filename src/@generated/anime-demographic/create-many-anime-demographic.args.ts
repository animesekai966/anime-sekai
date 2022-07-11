import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnimeDemographicCreateManyInput } from './anime-demographic-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyAnimeDemographicArgs {

    @Field(() => [AnimeDemographicCreateManyInput], {nullable:false})
    @Type(() => AnimeDemographicCreateManyInput)
    data!: Array<AnimeDemographicCreateManyInput>;
}
