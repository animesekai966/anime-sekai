import { registerEnumType } from '@nestjs/graphql';

export enum ServerQuailty {
    FHD = "FHD",
    HD = "HD",
    SD = "SD"
}


registerEnumType(ServerQuailty, { name: 'ServerQuailty', description: undefined })
