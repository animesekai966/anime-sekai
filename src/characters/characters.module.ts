import { Module } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { CharactersResolver } from './characters.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [CharactersResolver, CharactersService, PrismaService]
})
export class CharactersModule {}
