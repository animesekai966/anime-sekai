import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { CharacterNameCompositeFilter } from '../prisma/character-name-composite-filter.input';
import { ImageCompositeFilter } from '../prisma/image-composite-filter.input';
import { DescriptionCompositeFilter } from '../prisma/description-composite-filter.input';
import { CharacterOnAnimeListRelationFilter } from '../character-on-anime/character-on-anime-list-relation-filter.input';

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

    @Field(() => IntFilter, {nullable:true})
    malId?: IntFilter;

    @Field(() => CharacterNameCompositeFilter, {nullable:true})
    name?: CharacterNameCompositeFilter;

    @Field(() => ImageCompositeFilter, {nullable:true})
    image?: ImageCompositeFilter;

    @Field(() => DescriptionCompositeFilter, {nullable:true})
    description?: DescriptionCompositeFilter;

    @Field(() => CharacterOnAnimeListRelationFilter, {nullable:true})
    anime?: CharacterOnAnimeListRelationFilter;
}
