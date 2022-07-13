import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AnimeTrailerCreateInput {

    @Field(() => String, {nullable:true})
    youtubeId?: string;
}
