import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterWhereUniqueInput } from './character-where-unique.input';
import { Type } from 'class-transformer';
import { CharacterCreateWithoutAnimesInput } from './character-create-without-animes.input';

@InputType()
export class CharacterCreateOrConnectWithoutAnimesInput {

    @Field(() => CharacterWhereUniqueInput, {nullable:false})
    @Type(() => CharacterWhereUniqueInput)
    where!: CharacterWhereUniqueInput;

    @Field(() => CharacterCreateWithoutAnimesInput, {nullable:false})
    @Type(() => CharacterCreateWithoutAnimesInput)
    create!: CharacterCreateWithoutAnimesInput;
}
