import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StudioUpdateInput } from './studio-update.input';
import { Type } from 'class-transformer';
import { StudioWhereUniqueInput } from './studio-where-unique.input';

@ArgsType()
export class UpdateOneStudioArgs {

    @Field(() => StudioUpdateInput, {nullable:false})
    @Type(() => StudioUpdateInput)
    data!: StudioUpdateInput;

    @Field(() => StudioWhereUniqueInput, {nullable:false})
    @Type(() => StudioWhereUniqueInput)
    where!: StudioWhereUniqueInput;
}
