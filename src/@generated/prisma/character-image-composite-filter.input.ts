import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterImageObjectEqualityInput } from './character-image-object-equality.input';
import { CharacterImageWhereInput } from '../character-image/character-image-where.input';

@InputType()
export class CharacterImageCompositeFilter {

    @Field(() => CharacterImageObjectEqualityInput, {nullable:true})
    equals?: CharacterImageObjectEqualityInput;

    @Field(() => CharacterImageWhereInput, {nullable:true})
    is?: CharacterImageWhereInput;

    @Field(() => CharacterImageWhereInput, {nullable:true})
    isNot?: CharacterImageWhereInput;
}
