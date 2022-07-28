import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Anime } from '../anime/anime.model';
import { Staff } from '../staff/staff.model';
import { CharacterRole } from '../prisma/character-role.enum';

@ObjectType()
export class CharacterOnAnime {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Anime, {nullable:false})
    anime?: Anime;

    @Field(() => Staff, {nullable:false})
    voiceActor?: Staff;

    @Field(() => CharacterRole, {nullable:false})
    role!: keyof typeof CharacterRole;

    @Field(() => String, {nullable:false})
    animeId!: string;

    @Field(() => String, {nullable:false})
    staffId!: string;
}
