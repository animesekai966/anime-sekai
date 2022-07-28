import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ImageWhereInput {

    @Field(() => [ImageWhereInput], {nullable:true})
    AND?: Array<ImageWhereInput>;

    @Field(() => [ImageWhereInput], {nullable:true})
    OR?: Array<ImageWhereInput>;

    @Field(() => [ImageWhereInput], {nullable:true})
    NOT?: Array<ImageWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    source?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    key?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;
}
