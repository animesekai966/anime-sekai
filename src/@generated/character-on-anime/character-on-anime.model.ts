import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { Anime } from '../anime/anime.model';
import { Staff } from '../staff/staff.model';
import { Character } from '../character/character.model';
import { CharacterRole } from '../prisma/character-role.enum';
import { CharacterOnAnimeCount } from '../character/character-on-anime-count.output';

@ObjectType()
export class CharacterOnAnime {

    @Field(() => ID, {nullable:false})
    id!: string;

    @HideField()
    relationId!: string;

    @Field(() => Anime, {nullable:false})
    anime?: Anime;

    @Field(() => [Staff], {nullable:true})
    voiceActors?: Array<Staff>;

    @Field(() => Character, {nullable:false})
    character?: Character;

    @Field(() => CharacterRole, {nullable:false})
    role!: keyof typeof CharacterRole;

    @HideField()
    animeId!: string;

    @HideField()
    staffId!: Array<string>;

    @HideField()
    characterId!: string;

    @Field(() => CharacterOnAnimeCount, {nullable:false})
    _count?: CharacterOnAnimeCount;
}
