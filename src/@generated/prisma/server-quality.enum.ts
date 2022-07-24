import { registerEnumType } from '@nestjs/graphql';

export enum ServerQuality {
    FHD = "FHD",
    HD = "HD",
    SD = "SD",
    LD = "LD"
}


registerEnumType(ServerQuality, { name: 'ServerQuality', description: undefined })
