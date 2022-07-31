import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { StaffName } from '../staff-name/staff-name.model';
import { Image } from '../image/image.model';
import { Description } from '../description/description.model';
import { CharacterOnAnime } from '../character-on-anime/character-on-anime.model';
import { StaffOnAnime } from '../staff-on-anime/staff-on-anime.model';
import { HideField } from '@nestjs/graphql';
import { StaffCount } from './staff-count.output';

@ObjectType()
export class Staff {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Int, {nullable:true})
    malId!: number | null;

    @Field(() => StaffName, {nullable:false})
    name?: StaffName;

    @Field(() => Image, {nullable:false})
    image?: Image;

    @Field(() => String, {nullable:true})
    info!: string | null;

    @Field(() => Description, {nullable:false})
    description?: Description;

    @Field(() => [CharacterOnAnime], {nullable:true})
    characters?: Array<CharacterOnAnime>;

    @Field(() => [StaffOnAnime], {nullable:true})
    animeRoles?: Array<StaffOnAnime>;

    @HideField()
    characterIDs!: Array<string>;

    @Field(() => StaffCount, {nullable:false})
    _count?: StaffCount;
}
