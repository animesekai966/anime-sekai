import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterNameObjectEqualityInput } from './character-name-object-equality.input';
import { CharacterNameWhereInput } from '../character-name/character-name-where.input';

@InputType()
export class CharacterNameCompositeFilter {

    @Field(() => CharacterNameObjectEqualityInput, {nullable:true})
    equals?: CharacterNameObjectEqualityInput;

    @Field(() => CharacterNameWhereInput, {nullable:true})
    is?: CharacterNameWhereInput;

    @Field(() => CharacterNameWhereInput, {nullable:true})
    isNot?: CharacterNameWhereInput;
}
