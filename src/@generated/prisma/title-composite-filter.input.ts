import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TitleObjectEqualityInput } from './title-object-equality.input';
import { TitleWhereInput } from '../title/title-where.input';

@InputType()
export class TitleCompositeFilter {

    @Field(() => TitleObjectEqualityInput, {nullable:true})
    equals?: TitleObjectEqualityInput;

    @Field(() => TitleWhereInput, {nullable:true})
    is?: TitleWhereInput;

    @Field(() => TitleWhereInput, {nullable:true})
    isNot?: TitleWhereInput;
}
