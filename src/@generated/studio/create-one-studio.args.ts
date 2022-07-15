import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StudioCreateInput } from './studio-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneStudioArgs {

    @Field(() => StudioCreateInput, {nullable:false})
    @Type(() => StudioCreateInput)
    data!: StudioCreateInput;
}
