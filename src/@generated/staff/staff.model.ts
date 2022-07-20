import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { StaffImage } from '../staff-image/staff-image.model';
import { StaffName } from '../staff-name/staff-name.model';
import { FuzzyDate } from '../fuzzy-date/fuzzy-date.model';
import { CharactersOnAnimes } from '../characters-on-animes/characters-on-animes.model';
import { StaffCount } from './staff-count.output';

@ObjectType()
export class Staff {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Int, {nullable:true})
    malId!: number | null;

    @Field(() => Int, {nullable:true})
    anilistId!: number | null;

    @Field(() => String, {nullable:false})
    language!: string;

    @Field(() => StaffImage, {nullable:false})
    image?: StaffImage;

    @Field(() => StaffName, {nullable:false})
    name?: StaffName;

    @Field(() => Int, {nullable:true})
    age!: number | null;

    @Field(() => String, {nullable:true})
    gender!: string | null;

    @Field(() => [Int], {nullable:true})
    yearsActive!: Array<number>;

    @Field(() => [String], {nullable:true})
    homeTown!: Array<string>;

    @Field(() => String, {nullable:false})
    bloodType!: string;

    @Field(() => FuzzyDate, {nullable:false})
    dateOfBirth?: FuzzyDate;

    @Field(() => FuzzyDate, {nullable:false})
    dateOfDeath?: FuzzyDate;

    @Field(() => [CharactersOnAnimes], {nullable:true})
    animes?: Array<CharactersOnAnimes>;

    @Field(() => StaffCount, {nullable:false})
    _count?: StaffCount;
}
