import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeCoverCreateInput } from '../anime-cover/anime-cover-create.input';
import { Type } from 'class-transformer';

@InputType()
export class AnimeCoverListCreateEnvelopeInput {

    @Field(() => [AnimeCoverCreateInput], {nullable:true})
    @Type(() => AnimeCoverCreateInput)
    set?: Array<AnimeCoverCreateInput>;
}
