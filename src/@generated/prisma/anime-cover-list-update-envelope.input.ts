import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeCoverCreateInput } from '../anime-cover/anime-cover-create.input';
import { Type } from 'class-transformer';
import { AnimeCoverUpdateManyInput } from '../anime-cover/anime-cover-update-many.input';
import { AnimeCoverDeleteManyInput } from './anime-cover-delete-many.input';

@InputType()
export class AnimeCoverListUpdateEnvelopeInput {

    @Field(() => [AnimeCoverCreateInput], {nullable:true})
    @Type(() => AnimeCoverCreateInput)
    set?: Array<AnimeCoverCreateInput>;

    @Field(() => [AnimeCoverCreateInput], {nullable:true})
    push?: Array<AnimeCoverCreateInput>;

    @Field(() => AnimeCoverUpdateManyInput, {nullable:true})
    @Type(() => AnimeCoverUpdateManyInput)
    updateMany?: AnimeCoverUpdateManyInput;

    @Field(() => AnimeCoverDeleteManyInput, {nullable:true})
    @Type(() => AnimeCoverDeleteManyInput)
    deleteMany?: AnimeCoverDeleteManyInput;
}
