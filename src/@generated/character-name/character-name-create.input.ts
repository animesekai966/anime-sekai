import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterNameCreatealternativeInput } from './character-name-createalternative.input';
import { CharacterNameCreatealternativeSpoilerInput } from './character-name-createalternative-spoiler.input';

@InputType()
export class CharacterNameCreateInput {

    @Field(() => String, {nullable:true})
    first?: string;

    @Field(() => String, {nullable:true})
    middle?: string;

    @Field(() => String, {nullable:true})
    last?: string;

    @Field(() => String, {nullable:true})
    full?: string;

    @Field(() => String, {nullable:true})
    native?: string;

    @Field(() => CharacterNameCreatealternativeInput, {nullable:true})
    alternative?: CharacterNameCreatealternativeInput;

    @Field(() => CharacterNameCreatealternativeSpoilerInput, {nullable:true})
    alternativeSpoiler?: CharacterNameCreatealternativeSpoilerInput;
}
