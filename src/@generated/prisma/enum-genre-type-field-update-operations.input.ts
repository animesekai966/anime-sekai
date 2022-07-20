import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenreType } from './genre-type.enum';

@InputType()
export class EnumGenreTypeFieldUpdateOperationsInput {

    @Field(() => GenreType, {nullable:true})
    set?: keyof typeof GenreType;
}
