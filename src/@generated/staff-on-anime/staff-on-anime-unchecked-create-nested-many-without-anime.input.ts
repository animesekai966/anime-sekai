import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffOnAnimeCreateWithoutAnimeInput } from './staff-on-anime-create-without-anime.input';
import { Type } from 'class-transformer';
import { StaffOnAnimeCreateOrConnectWithoutAnimeInput } from './staff-on-anime-create-or-connect-without-anime.input';
import { StaffOnAnimeCreateManyAnimeInputEnvelope } from './staff-on-anime-create-many-anime-input-envelope.input';
import { StaffOnAnimeWhereUniqueInput } from './staff-on-anime-where-unique.input';

@InputType()
export class StaffOnAnimeUncheckedCreateNestedManyWithoutAnimeInput {

    @Field(() => [StaffOnAnimeCreateWithoutAnimeInput], {nullable:true})
    @Type(() => StaffOnAnimeCreateWithoutAnimeInput)
    create?: Array<StaffOnAnimeCreateWithoutAnimeInput>;

    @Field(() => [StaffOnAnimeCreateOrConnectWithoutAnimeInput], {nullable:true})
    @Type(() => StaffOnAnimeCreateOrConnectWithoutAnimeInput)
    connectOrCreate?: Array<StaffOnAnimeCreateOrConnectWithoutAnimeInput>;

    @Field(() => StaffOnAnimeCreateManyAnimeInputEnvelope, {nullable:true})
    @Type(() => StaffOnAnimeCreateManyAnimeInputEnvelope)
    createMany?: StaffOnAnimeCreateManyAnimeInputEnvelope;

    @Field(() => [StaffOnAnimeWhereUniqueInput], {nullable:true})
    @Type(() => StaffOnAnimeWhereUniqueInput)
    connect?: Array<StaffOnAnimeWhereUniqueInput>;
}
