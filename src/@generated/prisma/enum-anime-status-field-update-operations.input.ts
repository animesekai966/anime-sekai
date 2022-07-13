import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeStatus } from './anime-status.enum';

@InputType()
export class EnumAnimeStatusFieldUpdateOperationsInput {

    @Field(() => AnimeStatus, {nullable:true})
    set?: keyof typeof AnimeStatus;
}
