import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AnimeCoverImage {

    @Field(() => String, {nullable:false})
    large!: string;

    @Field(() => String, {nullable:false})
    medium!: string;

    @Field(() => String, {nullable:false})
    small!: string;

    @Field(() => String, {nullable:true})
    color!: string | null;
}
