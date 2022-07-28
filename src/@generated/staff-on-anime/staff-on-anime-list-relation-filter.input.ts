import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffOnAnimeWhereInput } from './staff-on-anime-where.input';

@InputType()
export class StaffOnAnimeListRelationFilter {

    @Field(() => StaffOnAnimeWhereInput, {nullable:true})
    every?: StaffOnAnimeWhereInput;

    @Field(() => StaffOnAnimeWhereInput, {nullable:true})
    some?: StaffOnAnimeWhereInput;

    @Field(() => StaffOnAnimeWhereInput, {nullable:true})
    none?: StaffOnAnimeWhereInput;
}
