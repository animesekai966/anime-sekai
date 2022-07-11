import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { EpisodeServer } from '../episode-server/episode-server.model';

@ObjectType()
export class Episode {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Float, {nullable:false})
    number!: number;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    filler!: boolean;

    @Field(() => [EpisodeServer], {nullable:true})
    servers?: Array<EpisodeServer>;
}
