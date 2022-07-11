import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeSeason } from './anime-season.enum';

@InputType()
export class EnumAnimeSeasonFieldUpdateOperationsInput {

    @Field(() => AnimeSeason, {nullable:true})
    set?: keyof typeof AnimeSeason;
}
