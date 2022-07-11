import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { EpisodeServerCreateInput } from '../episode-server/episode-server-create.input';

@InputType()
export class EpisodeCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Float, {nullable:false})
    number!: number;

    @Field(() => Boolean, {nullable:true})
    filler?: boolean;

    @Field(() => [EpisodeServerCreateInput], {nullable:true})
    servers?: Array<EpisodeServerCreateInput>;
}
