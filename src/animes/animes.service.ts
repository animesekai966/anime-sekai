import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AnimesService {
  constructor(private prisma: PrismaService) {}

  findOne(id: string) {
    return this.prisma.anime.findFirst({
      where: {
        id,
      },
      include: {
        genres: true,
        producers: true,
        studios: true,
      },
    });
  }
}
