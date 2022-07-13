import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';

@InputType()
export class AnimeTitleWhereInput {

    @Field(() => [AnimeTitleWhereInput], {nullable:true})
    AND?: Array<AnimeTitleWhereInput>;

    @Field(() => [AnimeTitleWhereInput], {nullable:true})
    OR?: Array<AnimeTitleWhereInput>;

    @Field(() => [AnimeTitleWhereInput], {nullable:true})
    NOT?: Array<AnimeTitleWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    romaji?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    english?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    native?: StringNullableFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    synonyms?: StringNullableListFilter;
}
