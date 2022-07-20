import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharacterUpdateInput } from './character-update.input';
import { Type } from 'class-transformer';
import { CharacterWhereUniqueInput } from './character-where-unique.input';

@ArgsType()
export class UpdateOneCharacterArgs {

    @Field(() => CharacterUpdateInput, {nullable:false})
    @Type(() => CharacterUpdateInput)
    data!: CharacterUpdateInput;

    @Field(() => CharacterWhereUniqueInput, {nullable:false})
    @Type(() => CharacterWhereUniqueInput)
    where!: CharacterWhereUniqueInput;
}
