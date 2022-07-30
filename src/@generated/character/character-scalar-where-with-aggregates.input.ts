import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class CharacterScalarWhereWithAggregatesInput {

    @Field(() => [CharacterScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CharacterScalarWhereWithAggregatesInput>;

    @Field(() => [CharacterScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CharacterScalarWhereWithAggregatesInput>;

    @Field(() => [CharacterScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CharacterScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    malId?: IntWithAggregatesFilter;
}
