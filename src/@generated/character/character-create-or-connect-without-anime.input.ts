import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterWhereUniqueInput } from './character-where-unique.input';
import { Type } from 'class-transformer';
import { CharacterCreateWithoutAnimeInput } from './character-create-without-anime.input';

@InputType()
export class CharacterCreateOrConnectWithoutAnimeInput {

    @Field(() => CharacterWhereUniqueInput, {nullable:false})
    @Type(() => CharacterWhereUniqueInput)
    where!: CharacterWhereUniqueInput;

    @Field(() => CharacterCreateWithoutAnimeInput, {nullable:false})
    @Type(() => CharacterCreateWithoutAnimeInput)
    create!: CharacterCreateWithoutAnimeInput;
}
