import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeCreateNestedOneWithoutCharactersInput } from '../anime/anime-create-nested-one-without-characters.input';
import { CharacterRole } from '../prisma/character-role.enum';

@InputType()
export class CharacterOnAnimeCreateWithoutVoiceActorInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => AnimeCreateNestedOneWithoutCharactersInput, {nullable:false})
    anime!: AnimeCreateNestedOneWithoutCharactersInput;

    @Field(() => CharacterRole, {nullable:false})
    role!: keyof typeof CharacterRole;
}
