import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AnimeUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;
}
