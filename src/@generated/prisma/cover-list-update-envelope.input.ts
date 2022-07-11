import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CoverCreateInput } from '../cover/cover-create.input';
import { Type } from 'class-transformer';
import { CoverUpdateManyInput } from '../cover/cover-update-many.input';
import { CoverDeleteManyInput } from './cover-delete-many.input';

@InputType()
export class CoverListUpdateEnvelopeInput {

    @Field(() => [CoverCreateInput], {nullable:true})
    @Type(() => CoverCreateInput)
    set?: Array<CoverCreateInput>;

    @Field(() => [CoverCreateInput], {nullable:true})
    push?: Array<CoverCreateInput>;

    @Field(() => CoverUpdateManyInput, {nullable:true})
    @Type(() => CoverUpdateManyInput)
    updateMany?: CoverUpdateManyInput;

    @Field(() => CoverDeleteManyInput, {nullable:true})
    @Type(() => CoverDeleteManyInput)
    deleteMany?: CoverDeleteManyInput;
}
