import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterWhereInput } from './character-where.input';

@InputType()
export class CharacterRelationFilter {

    @Field(() => CharacterWhereInput, {nullable:true})
    is?: CharacterWhereInput;

    @Field(() => CharacterWhereInput, {nullable:true})
    isNot?: CharacterWhereInput;
}
