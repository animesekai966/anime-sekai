import { Injectable } from '@nestjs/common';

@Injectable()
export class AnimesService {
  findAll() {
    return `This action returns all animes`;
  }

  findOne(id: string) {
    return `This action returns a #${id} anime`;
  }
}
