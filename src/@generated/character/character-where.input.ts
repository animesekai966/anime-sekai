import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { CharacterNameCompositeFilter } from '../prisma/character-name-composite-filter.input';
import { ImageCompositeFilter } from '../prisma/image-composite-filter.input';
import { DescriptionCompositeFilter } from '../prisma/description-composite-filter.input';

@InputType()
export class CharacterWhereInput {

    @Field(() => [CharacterWhereInput], {nullable:true})
    AND?: Array<CharacterWhereInput>;

    @Field(() => [CharacterWhereInput], {nullable:true})
    OR?: Array<CharacterWhereInput>;

    @Field(() => [CharacterWhereInput], {nullable:true})
    NOT?: Array<CharacterWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    malId?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    anilistId?: IntNullableFilter;

    @Field(() => CharacterNameCompositeFilter, {nullable:true})
    name?: CharacterNameCompositeFilter;

    @Field(() => ImageCompositeFilter, {nullable:true})
    image?: ImageCompositeFilter;

    @Field(() => DescriptionCompositeFilter, {nullable:true})
    description?: DescriptionCompositeFilter;
}
