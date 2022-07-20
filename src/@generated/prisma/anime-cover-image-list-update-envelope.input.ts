import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeCoverImageCreateInput } from '../anime-cover-image/anime-cover-image-create.input';
import { Type } from 'class-transformer';
import { AnimeCoverImageUpdateManyInput } from '../anime-cover-image/anime-cover-image-update-many.input';
import { AnimeCoverImageDeleteManyInput } from './anime-cover-image-delete-many.input';

@InputType()
export class AnimeCoverImageListUpdateEnvelopeInput {

    @Field(() => [AnimeCoverImageCreateInput], {nullable:true})
    @Type(() => AnimeCoverImageCreateInput)
    set?: Array<AnimeCoverImageCreateInput>;

    @Field(() => [AnimeCoverImageCreateInput], {nullable:true})
    push?: Array<AnimeCoverImageCreateInput>;

    @Field(() => AnimeCoverImageUpdateManyInput, {nullable:true})
    @Type(() => AnimeCoverImageUpdateManyInput)
    updateMany?: AnimeCoverImageUpdateManyInput;

    @Field(() => AnimeCoverImageDeleteManyInput, {nullable:true})
    @Type(() => AnimeCoverImageDeleteManyInput)
    deleteMany?: AnimeCoverImageDeleteManyInput;
}
