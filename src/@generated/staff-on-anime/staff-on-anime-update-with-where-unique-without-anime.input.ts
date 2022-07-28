import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffOnAnimeWhereUniqueInput } from './staff-on-anime-where-unique.input';
import { Type } from 'class-transformer';
import { StaffOnAnimeUpdateWithoutAnimeInput } from './staff-on-anime-update-without-anime.input';

@InputType()
export class StaffOnAnimeUpdateWithWhereUniqueWithoutAnimeInput {

    @Field(() => StaffOnAnimeWhereUniqueInput, {nullable:false})
    @Type(() => StaffOnAnimeWhereUniqueInput)
    where!: StaffOnAnimeWhereUniqueInput;

    @Field(() => StaffOnAnimeUpdateWithoutAnimeInput, {nullable:false})
    @Type(() => StaffOnAnimeUpdateWithoutAnimeInput)
    data!: StaffOnAnimeUpdateWithoutAnimeInput;
}
