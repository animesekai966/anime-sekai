import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EpisodeLanguage } from './episode-language.enum';

@InputType()
export class EnumEpisodeLanguageFieldUpdateOperationsInput {

    @Field(() => EpisodeLanguage, {nullable:true})
    set?: keyof typeof EpisodeLanguage;
}
