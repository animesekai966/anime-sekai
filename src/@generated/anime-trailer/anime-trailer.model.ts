import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AnimeTrailer {

    @Field(() => String, {nullable:true})
    url!: string | null;

    @Field(() => String, {nullable:true})
    thumbnail!: string | null;
}
