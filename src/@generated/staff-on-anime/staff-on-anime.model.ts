import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Anime } from '../anime/anime.model';
import { Staff } from '../staff/staff.model';

@ObjectType()
export class StaffOnAnime {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    relationId!: string;

    @Field(() => Anime, {nullable:false})
    anime?: Anime;

    @Field(() => Staff, {nullable:false})
    staff?: Staff;

    @Field(() => String, {nullable:false})
    role!: string;

    @Field(() => String, {nullable:false})
    animeId!: string;

    @Field(() => String, {nullable:false})
    staffId!: string;
}
