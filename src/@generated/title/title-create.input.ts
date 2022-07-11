import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TitleCreatesynonymsInput } from './title-createsynonyms.input';

@InputType()
export class TitleCreateInput {

    @Field(() => String, {nullable:false})
    english!: string;

    @Field(() => String, {nullable:false})
    romaji!: string;

    @Field(() => TitleCreatesynonymsInput, {nullable:true})
    synonyms?: TitleCreatesynonymsInput;
}
