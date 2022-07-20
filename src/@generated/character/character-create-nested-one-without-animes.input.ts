import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterCreateWithoutAnimesInput } from './character-create-without-animes.input';
import { Type } from 'class-transformer';
import { CharacterCreateOrConnectWithoutAnimesInput } from './character-create-or-connect-without-animes.input';
import { CharacterWhereUniqueInput } from './character-where-unique.input';

@InputType()
export class CharacterCreateNestedOneWithoutAnimesInput {

    @Field(() => CharacterCreateWithoutAnimesInput, {nullable:true})
    @Type(() => CharacterCreateWithoutAnimesInput)
    create?: CharacterCreateWithoutAnimesInput;

    @Field(() => CharacterCreateOrConnectWithoutAnimesInput, {nullable:true})
    @Type(() => CharacterCreateOrConnectWithoutAnimesInput)
    connectOrCreate?: CharacterCreateOrConnectWithoutAnimesInput;

    @Field(() => CharacterWhereUniqueInput, {nullable:true})
    @Type(() => CharacterWhereUniqueInput)
    connect?: CharacterWhereUniqueInput;
}
