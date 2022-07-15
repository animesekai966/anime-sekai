import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StudioWhereUniqueInput } from './studio-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneStudioArgs {

    @Field(() => StudioWhereUniqueInput, {nullable:false})
    @Type(() => StudioWhereUniqueInput)
    where!: StudioWhereUniqueInput;
}
