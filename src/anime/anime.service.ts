import { Injectable } from '@nestjs/common';
import { CreateAnimeInput } from './dto/create-anime.input';
import { UpdateAnimeInput } from './dto/update-anime.input';

@Injectable()
export class AnimeService {
  create(createAnimeInput: CreateAnimeInput) {
    return 'This action adds a new anime';
  }

  findAll() {
    return `This action returns all anime`;
  }

  findOne(id: number) {
    return `This action returns a #${id} anime`;
  }

  update(id: number, updateAnimeInput: UpdateAnimeInput) {
    return `This action updates a #${id} anime`;
  }

  remove(id: number) {
    return `This action removes a #${id} anime`;
  }
}
