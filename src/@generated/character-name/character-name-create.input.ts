import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterNameCreatealternatesInput } from './character-name-createalternates.input';

@InputType()
export class CharacterNameCreateInput {

    @Field(() => String, {nullable:false})
    english!: string;

    @Field(() => String, {nullable:false})
    native!: string;

    @Field(() => CharacterNameCreatealternatesInput, {nullable:true})
    alternates?: CharacterNameCreatealternatesInput;
}
