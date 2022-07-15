import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StudioWhereInput } from './studio-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyStudioArgs {

    @Field(() => StudioWhereInput, {nullable:true})
    @Type(() => StudioWhereInput)
    where?: StudioWhereInput;
}
