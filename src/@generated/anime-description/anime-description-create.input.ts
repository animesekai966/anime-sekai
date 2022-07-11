import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AnimeDescriptionCreateInput {

    @Field(() => String, {nullable:false})
    ar!: string;

    @Field(() => String, {nullable:false})
    en!: string;
}
