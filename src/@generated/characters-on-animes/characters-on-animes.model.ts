import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { CharacterRole } from '../prisma/character-role.enum';
import { Character } from '../character/character.model';
import { Staff } from '../staff/staff.model';
import { Anime } from '../anime/anime.model';

@ObjectType()
export class CharactersOnAnimes {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => CharacterRole, {nullable:false,defaultValue:'MAIN'})
    role!: keyof typeof CharacterRole;

    @Field(() => Character, {nullable:false})
    character?: Character;

    @Field(() => Staff, {nullable:false})
    staff?: Staff;

    @Field(() => Anime, {nullable:false})
    anime?: Anime;

    @Field(() => String, {nullable:false})
    characterId!: string;

    @Field(() => String, {nullable:false})
    staffId!: string;

    @Field(() => String, {nullable:false})
    animeId!: string;
}
