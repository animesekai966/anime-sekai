import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeSource } from './anime-source.enum';

@InputType()
export class EnumAnimeSourceFieldUpdateOperationsInput {

    @Field(() => AnimeSource, {nullable:true})
    set?: keyof typeof AnimeSource;
}
