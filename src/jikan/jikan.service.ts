import { Injectable } from "@nestjs/common";
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as https from "https";
import * as http from "http";
import { Client } from "jikan4.js";
@Injectable()
export class JikanService extends Client {
  constructor() {
    super({
      host: "jikan-san.herokuapp.com",
    });
  }
  /*axios: AxiosInstance;
  constructor() {
    this.axios = axios.create({
      baseURL: "https://jikan-san.herokuapp.com/v4",
      httpAgent: new http.Agent({ keepAlive: true }),
      httpsAgent: new https.Agent({ keepAlive: true }),
      headers: {
        "x-requested-with": "XMLHttpRequest",
      },
    });
  }

  async get(url: string) {
    return await this.axios.get(url).then((res) => res.data);
  }

  async getAnime(id: number) {
    return await this.get(`/anime/${id}/full`);
  }

  async getAnimeCharacters(id: number) {
    return await this.get(`/anime/${id}/characters`);
  }

  async getAnimeStaff(id: number) {
    return await this.get(`/anime/${id}/staff`);
  }

  async getAnimePictures(id: number) {
    return await this.get(`/anime/${id}/pictures`);
  }

  async getAnimeRecommendations(id: number) {
    return await this.get(`/anime/${id}/recommendations`);
  }

  async getCharacter(id: number) {
    return await this.get(`/characters/${id}/full`);
  }

  async getAnimeGenres(
    filter: "genres" | "explicit_genres" | "themes" | "demographics" | null,
  ) {
    return await this.get(`/genres/anime${filter ? "?filter=" + filter : ""}`);
  }

  async getPerson(id: number) {
    return await this.get(`/people/${id}/full`);
  }

  async getProducer(id: number) {
    return await this.get(`/producers/${id}/full`);
  }*/

  malIdFromUrl(url: string) {
    return Number(url.match(/anime\/([0-9]+)\//)[1]);
  }
}
