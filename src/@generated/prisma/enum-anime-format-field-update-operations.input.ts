import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeFormat } from './anime-format.enum';

@InputType()
export class EnumAnimeFormatFieldUpdateOperationsInput {

    @Field(() => AnimeFormat, {nullable:true})
    set?: keyof typeof AnimeFormat;
}
