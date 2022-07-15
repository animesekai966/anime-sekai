import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StudioCreateManyInput } from './studio-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyStudioArgs {

    @Field(() => [StudioCreateManyInput], {nullable:false})
    @Type(() => StudioCreateManyInput)
    data!: Array<StudioCreateManyInput>;
}
