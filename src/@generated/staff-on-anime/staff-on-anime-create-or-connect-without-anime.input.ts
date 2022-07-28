import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffOnAnimeWhereUniqueInput } from './staff-on-anime-where-unique.input';
import { Type } from 'class-transformer';
import { StaffOnAnimeCreateWithoutAnimeInput } from './staff-on-anime-create-without-anime.input';

@InputType()
export class StaffOnAnimeCreateOrConnectWithoutAnimeInput {

    @Field(() => StaffOnAnimeWhereUniqueInput, {nullable:false})
    @Type(() => StaffOnAnimeWhereUniqueInput)
    where!: StaffOnAnimeWhereUniqueInput;

    @Field(() => StaffOnAnimeCreateWithoutAnimeInput, {nullable:false})
    @Type(() => StaffOnAnimeCreateWithoutAnimeInput)
    create!: StaffOnAnimeCreateWithoutAnimeInput;
}
