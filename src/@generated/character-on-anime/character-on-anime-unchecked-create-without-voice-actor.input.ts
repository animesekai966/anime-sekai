import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterRole } from '../prisma/character-role.enum';

@InputType()
export class CharacterOnAnimeUncheckedCreateWithoutVoiceActorInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => CharacterRole, {nullable:false})
    role!: keyof typeof CharacterRole;

    @Field(() => String, {nullable:false})
    animeId!: string;
}
