import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharacterWhereInput } from './character-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyCharacterArgs {

    @Field(() => CharacterWhereInput, {nullable:true})
    @Type(() => CharacterWhereInput)
    where?: CharacterWhereInput;
}
