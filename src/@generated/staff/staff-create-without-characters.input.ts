import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { StaffNameCreateEnvelopeInput } from '../staff-name/staff-name-create-envelope.input';
import { ImageCreateEnvelopeInput } from '../image/image-create-envelope.input';
import { DescriptionCreateEnvelopeInput } from '../description/description-create-envelope.input';
import { StaffOnAnimeCreateNestedManyWithoutStaffInput } from '../staff-on-anime/staff-on-anime-create-nested-many-without-staff.input';
import { StaffCreatecharacterIDsInput } from './staff-createcharacter-i-ds.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class StaffCreateWithoutCharactersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:true})
    malId?: number;

    @Field(() => StaffNameCreateEnvelopeInput, {nullable:false})
    name!: StaffNameCreateEnvelopeInput;

    @Field(() => ImageCreateEnvelopeInput, {nullable:false})
    image!: ImageCreateEnvelopeInput;

    @Field(() => DescriptionCreateEnvelopeInput, {nullable:false})
    description!: DescriptionCreateEnvelopeInput;

    @Field(() => StaffOnAnimeCreateNestedManyWithoutStaffInput, {nullable:true})
    animeRoles?: StaffOnAnimeCreateNestedManyWithoutStaffInput;

    @HideField()
    characterIDs?: StaffCreatecharacterIDsInput;
}
