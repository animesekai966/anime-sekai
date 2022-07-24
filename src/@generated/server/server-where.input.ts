import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumServerQualityFilter } from '../prisma/enum-server-quality-filter.input';

@InputType()
export class ServerWhereInput {

    @Field(() => [ServerWhereInput], {nullable:true})
    AND?: Array<ServerWhereInput>;

    @Field(() => [ServerWhereInput], {nullable:true})
    OR?: Array<ServerWhereInput>;

    @Field(() => [ServerWhereInput], {nullable:true})
    NOT?: Array<ServerWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    translatedBy?: StringFilter;

    @Field(() => EnumServerQualityFilter, {nullable:true})
    quality?: EnumServerQualityFilter;

    @Field(() => StringFilter, {nullable:true})
    url?: StringFilter;
}
