import { Injectable } from '@nestjs/common';

@Injectable()
export class AnimesService {
  findAll() {
    return `This action returns all animes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} anime`;
  }
}

function scrapeService() {
  
}
