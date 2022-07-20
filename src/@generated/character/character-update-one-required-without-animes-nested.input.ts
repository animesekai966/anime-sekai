import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterCreateWithoutAnimesInput } from './character-create-without-animes.input';
import { Type } from 'class-transformer';
import { CharacterCreateOrConnectWithoutAnimesInput } from './character-create-or-connect-without-animes.input';
import { CharacterUpsertWithoutAnimesInput } from './character-upsert-without-animes.input';
import { CharacterWhereUniqueInput } from './character-where-unique.input';
import { CharacterUpdateWithoutAnimesInput } from './character-update-without-animes.input';

@InputType()
export class CharacterUpdateOneRequiredWithoutAnimesNestedInput {

    @Field(() => CharacterCreateWithoutAnimesInput, {nullable:true})
    @Type(() => CharacterCreateWithoutAnimesInput)
    create?: CharacterCreateWithoutAnimesInput;

    @Field(() => CharacterCreateOrConnectWithoutAnimesInput, {nullable:true})
    @Type(() => CharacterCreateOrConnectWithoutAnimesInput)
    connectOrCreate?: CharacterCreateOrConnectWithoutAnimesInput;

    @Field(() => CharacterUpsertWithoutAnimesInput, {nullable:true})
    @Type(() => CharacterUpsertWithoutAnimesInput)
    upsert?: CharacterUpsertWithoutAnimesInput;

    @Field(() => CharacterWhereUniqueInput, {nullable:true})
    @Type(() => CharacterWhereUniqueInput)
    connect?: CharacterWhereUniqueInput;

    @Field(() => CharacterUpdateWithoutAnimesInput, {nullable:true})
    @Type(() => CharacterUpdateWithoutAnimesInput)
    update?: CharacterUpdateWithoutAnimesInput;
}
