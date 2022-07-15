import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AnimeCoverObjectEqualityInput {

    @Field(() => String, {nullable:false})
    large!: string;

    @Field(() => String, {nullable:false})
    medium!: string;

    @Field(() => String, {nullable:false})
    small!: string;

    @Field(() => String, {nullable:true})
    color?: string;
}
