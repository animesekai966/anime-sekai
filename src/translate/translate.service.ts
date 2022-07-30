import { Injectable } from "@nestjs/common";
import axios, { AxiosInstance } from "axios";
import * as https from "https";
import * as http from "http";
import * as translate from "translate";

@Injectable()
export class TranslateService {
  axios: AxiosInstance;
  constructor() {
    this.axios = axios.create({
      httpAgent: new http.Agent({ keepAlive: true }),
      httpsAgent: new https.Agent({ keepAlive: true }),
    });
  }

  async translate(text: string, needsGoogle = false) {
    if (!text) return "";
    try {
      if (needsGoogle) {
        return await translate(text, "ar");
      } else {
        let { data } = await this.axios({
          method: "post",
          url: "https://web-api.itranslateapp.com/v3/texts/translate",
          headers: {
            accept: "application/json",
            "api-key": "d2aefeac9dc661bc98eebd6cc12f0b82",
            "content-type": "application/json",
          },
          data: {
            source: {
              dialect: "en",
              text: text,
            },
            target: {
              dialect: "ar",
            },
          },
        });

        return data.target.text;
      }
    } catch (err) {
      console.log(`[TRANSLATE] err `, err);
      return await this.translate(text);
    }
  }
}
