import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharacterCreateManyInput } from './character-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyCharacterArgs {

    @Field(() => [CharacterCreateManyInput], {nullable:false})
    @Type(() => CharacterCreateManyInput)
    data!: Array<CharacterCreateManyInput>;
}
