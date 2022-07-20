import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterUpdateWithoutAnimesInput } from './character-update-without-animes.input';
import { Type } from 'class-transformer';
import { CharacterCreateWithoutAnimesInput } from './character-create-without-animes.input';

@InputType()
export class CharacterUpsertWithoutAnimesInput {

    @Field(() => CharacterUpdateWithoutAnimesInput, {nullable:false})
    @Type(() => CharacterUpdateWithoutAnimesInput)
    update!: CharacterUpdateWithoutAnimesInput;

    @Field(() => CharacterCreateWithoutAnimesInput, {nullable:false})
    @Type(() => CharacterCreateWithoutAnimesInput)
    create!: CharacterCreateWithoutAnimesInput;
}
