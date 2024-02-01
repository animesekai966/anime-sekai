import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import * as https from 'https';
import * as http from 'http';

@Injectable()
export class AsService {
  client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: 'https://app.sanime.net',
      headers: {
        Origin: 'https://ios.sanime.net',
        'User-Agent': 'IBRAHIMSEVEN',
        'X-Requested-With': 'com.sanimenew.apk',
      },
      httpAgent: new http.Agent({ keepAlive: true }),
      httpsAgent: new https.Agent({ keepAlive: true }),
    });
  }
}
