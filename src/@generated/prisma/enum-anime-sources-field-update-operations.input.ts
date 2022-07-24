import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeSources } from './anime-sources.enum';

@InputType()
export class EnumAnimeSourcesFieldUpdateOperationsInput {

    @Field(() => AnimeSources, {nullable:true})
    set?: keyof typeof AnimeSources;
}
