import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharacterWhereUniqueInput } from './character-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueCharacterArgs {

    @Field(() => CharacterWhereUniqueInput, {nullable:false})
    @Type(() => CharacterWhereUniqueInput)
    where!: CharacterWhereUniqueInput;
}
