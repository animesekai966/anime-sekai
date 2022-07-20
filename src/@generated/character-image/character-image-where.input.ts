import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class CharacterImageWhereInput {

    @Field(() => [CharacterImageWhereInput], {nullable:true})
    AND?: Array<CharacterImageWhereInput>;

    @Field(() => [CharacterImageWhereInput], {nullable:true})
    OR?: Array<CharacterImageWhereInput>;

    @Field(() => [CharacterImageWhereInput], {nullable:true})
    NOT?: Array<CharacterImageWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    large?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    medium?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    small?: StringFilter;
}
