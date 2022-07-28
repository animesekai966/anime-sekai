import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffOnAnimeCreateManyAnimeInput } from './staff-on-anime-create-many-anime.input';
import { Type } from 'class-transformer';

@InputType()
export class StaffOnAnimeCreateManyAnimeInputEnvelope {

    @Field(() => [StaffOnAnimeCreateManyAnimeInput], {nullable:false})
    @Type(() => StaffOnAnimeCreateManyAnimeInput)
    data!: Array<StaffOnAnimeCreateManyAnimeInput>;
}
