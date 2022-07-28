import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Description {

    @Field(() => String, {nullable:true})
    ar!: string | null;

    @Field(() => String, {nullable:true})
    en!: string | null;
}
