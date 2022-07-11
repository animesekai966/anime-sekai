import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AnimeThemeCount {

    @Field(() => Int, {nullable:false})
    animes?: number;
}
