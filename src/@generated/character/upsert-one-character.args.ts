import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharacterWhereUniqueInput } from './character-where-unique.input';
import { Type } from 'class-transformer';
import { CharacterCreateInput } from './character-create.input';
import { CharacterUpdateInput } from './character-update.input';

@ArgsType()
export class UpsertOneCharacterArgs {

    @Field(() => CharacterWhereUniqueInput, {nullable:false})
    @Type(() => CharacterWhereUniqueInput)
    where!: CharacterWhereUniqueInput;

    @Field(() => CharacterCreateInput, {nullable:false})
    @Type(() => CharacterCreateInput)
    create!: CharacterCreateInput;

    @Field(() => CharacterUpdateInput, {nullable:false})
    @Type(() => CharacterUpdateInput)
    update!: CharacterUpdateInput;
}
