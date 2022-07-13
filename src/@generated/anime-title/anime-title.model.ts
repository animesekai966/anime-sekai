import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AnimeTitle {

    @Field(() => String, {nullable:false})
    romaji!: string;

    @Field(() => String, {nullable:true})
    english!: string | null;

    @Field(() => String, {nullable:true})
    native!: string | null;

    @Field(() => [String], {nullable:true})
    synonyms!: Array<string>;
}
