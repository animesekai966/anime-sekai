import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AnimeDescription {

    @Field(() => String, {nullable:false})
    ar!: string;

    @Field(() => String, {nullable:false})
    en!: string;
}
