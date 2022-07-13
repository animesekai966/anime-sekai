import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AnimeTrailer {

    @Field(() => String, {nullable:true})
    youtubeId!: string | null;
}
