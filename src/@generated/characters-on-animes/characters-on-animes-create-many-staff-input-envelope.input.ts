import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharactersOnAnimesCreateManyStaffInput } from './characters-on-animes-create-many-staff.input';
import { Type } from 'class-transformer';

@InputType()
export class CharactersOnAnimesCreateManyStaffInputEnvelope {

    @Field(() => [CharactersOnAnimesCreateManyStaffInput], {nullable:false})
    @Type(() => CharactersOnAnimesCreateManyStaffInput)
    data!: Array<CharactersOnAnimesCreateManyStaffInput>;
}
