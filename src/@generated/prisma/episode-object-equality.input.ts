import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EpisodeServerObjectEqualityInput } from './episode-server-object-equality.input';

@InputType()
export class EpisodeObjectEqualityInput {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    number!: string;

    @Field(() => Boolean, {nullable:false})
    filler!: boolean;

    @Field(() => [EpisodeServerObjectEqualityInput], {nullable:true})
    servers?: Array<EpisodeServerObjectEqualityInput>;
}
