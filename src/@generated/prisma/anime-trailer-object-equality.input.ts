import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AnimeTrailerObjectEqualityInput {

    @Field(() => String, {nullable:true})
    youtubeId?: string;
}
