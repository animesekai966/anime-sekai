import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StudioWhereUniqueInput } from './studio-where-unique.input';
import { Type } from 'class-transformer';
import { StudioCreateInput } from './studio-create.input';
import { StudioUpdateInput } from './studio-update.input';

@ArgsType()
export class UpsertOneStudioArgs {

    @Field(() => StudioWhereUniqueInput, {nullable:false})
    @Type(() => StudioWhereUniqueInput)
    where!: StudioWhereUniqueInput;

    @Field(() => StudioCreateInput, {nullable:false})
    @Type(() => StudioCreateInput)
    create!: StudioCreateInput;

    @Field(() => StudioUpdateInput, {nullable:false})
    @Type(() => StudioUpdateInput)
    update!: StudioUpdateInput;
}
