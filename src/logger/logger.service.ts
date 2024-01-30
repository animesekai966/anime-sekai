import { Injectable } from '@nestjs/common';
import { ConsoleLogger } from '@nestjs/common';

@Injectable()
export class Logger extends ConsoleLogger {}
