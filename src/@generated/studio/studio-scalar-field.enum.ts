import { registerEnumType } from '@nestjs/graphql';

export enum StudioScalarFieldEnum {
    id = "id"
}


registerEnumType(StudioScalarFieldEnum, { name: 'StudioScalarFieldEnum', description: undefined })
