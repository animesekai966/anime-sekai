import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffOnAnimeWhereUniqueInput } from './staff-on-anime-where-unique.input';
import { Type } from 'class-transformer';
import { StaffOnAnimeUpdateWithoutAnimeInput } from './staff-on-anime-update-without-anime.input';
import { StaffOnAnimeCreateWithoutAnimeInput } from './staff-on-anime-create-without-anime.input';

@InputType()
export class StaffOnAnimeUpsertWithWhereUniqueWithoutAnimeInput {

    @Field(() => StaffOnAnimeWhereUniqueInput, {nullable:false})
    @Type(() => StaffOnAnimeWhereUniqueInput)
    where!: StaffOnAnimeWhereUniqueInput;

    @Field(() => StaffOnAnimeUpdateWithoutAnimeInput, {nullable:false})
    @Type(() => StaffOnAnimeUpdateWithoutAnimeInput)
    update!: StaffOnAnimeUpdateWithoutAnimeInput;

    @Field(() => StaffOnAnimeCreateWithoutAnimeInput, {nullable:false})
    @Type(() => StaffOnAnimeCreateWithoutAnimeInput)
    create!: StaffOnAnimeCreateWithoutAnimeInput;
}
