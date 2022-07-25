import { Injectable } from "@nestjs/common";
import axios, { AxiosInstance } from "axios";
import { AnimeLatestEntity } from "src/anime-slayer/anime-slayer.service";
import * as https from "https";
import * as http from "http";
import { format } from "graphql-formatter";
import { error } from "console";

let malStatusToAnilist = {
  "Currently Airing": "RELEASING",
  "Finished Airing": "FINISHED",
  "Not yet aired": "NOT_YET_RELEASED",
};

@Injectable()
export class AnilistService {
  axios: AxiosInstance;
  constructor() {
    this.axios = axios.create({
      httpAgent: new http.Agent({ keepAlive: true }),
      httpsAgent: new https.Agent({ keepAlive: true }),
      method: "post",
      baseURL: "https://graphql.anilist.co/",
    });
  }

  async getAsAnime(anime: {
    anime_season: string;
    anime_type: string;
    anime_status: string;
    anime_release_year: string;
    anime_id: string;
    anime_name: string;
  }) {
    try {
      let queryTemplate = `query Query {`;
      let animeFilterTemplate = `a{qn}: Media({seasonFilter} type: ANIME, {formatFilter} search: "{search}", {statusFilter} {yearFilter}) { id idMal }`;
      let seasonFilterTemplate = `season: {season},`;
      let formatFilterTemplate = "format: {format},";
      let statusFilterTemplate = "status: {status},";
      let yearFilterTemplate = 'startDate_like: "{year}%"';

      let animeFilterTemplateWithFilters = animeFilterTemplate
        .replace(
          "{seasonFilter}",
          !!anime.anime_season ? seasonFilterTemplate : "",
        )
        .replace(
          "{formatFilter}",
          false && !!anime.anime_type ? formatFilterTemplate : "",
        )
        .replace(
          "{statusFilter}",
          !!anime.anime_status ? statusFilterTemplate : "",
        )
        .replace(
          "{yearFilter}",
          !!anime.anime_release_year ? yearFilterTemplate : "",
        );

      let animeTemplate = animeFilterTemplateWithFilters
        .replace("{qn}", `${anime.anime_id}`)
        .replace("{season}", anime.anime_season?.toUpperCase())
        .replace("{format}", anime.anime_type?.toUpperCase().replace(/ /g, "_"))
        .replace("{search}", anime.anime_name)
        .replace("{status}", malStatusToAnilist[anime.anime_status])
        .replace("{year}", anime.anime_release_year);
      queryTemplate += "\n" + animeTemplate;

      queryTemplate += "\n}";

      let query = queryTemplate;

      console.log(query);
      let {
        data: { data },
      } = await this.axios({
        data: {
          operationName: "Query",
          query: query,
        },
      });

      return {
        malId: data[`a${anime.anime_id}`]?.idMal,
        anilistId: data[`a${anime.anime_id}`]?.id,
        ...anime,
      };
    } catch (err) {
      console.log(err.response.data.errors)
    }
  }

  async getAsAnimes(
    asAnimes: AnimeLatestEntity[],
    linesToRemove: number[] = [],
  ) {
    try {
      let queryTemplate = `query Query {`;
      let animeFilterTemplate = `a{qn}: Media({seasonFilter} type: ANIME, {formatFilter} search: "{search}", {statusFilter} {yearFilter}) { id idMal }`;
      let seasonFilterTemplate = `season: {season},`;
      let formatFilterTemplate = "format: {format},";
      let statusFilterTemplate = "status: {status},";
      let yearFilterTemplate = 'startDate_like: "{year}%"';

      for (let anime of asAnimes) {
        /* console.log(
        `{qn}: ${!!anime.anime_id}, {season}: ${!!anime.anime_season}, {format}: ${!!anime.anime_type}, {search}: ${!!anime.anime_name}, {status}: ${!!malStatusToAnilist[
          anime.anime_status
        ]}, {year}: ${!!anime.anime_release_year}`,
      );*/

        let animeFilterTemplateWithFilters = animeFilterTemplate
          .replace(
            "{seasonFilter}",
            !!anime.anime_season ? seasonFilterTemplate : "",
          )
          .replace(
            "{formatFilter}",
            false && !!anime.anime_type ? formatFilterTemplate : "",
          )
          .replace(
            "{statusFilter}",
            !!anime.anime_status ? statusFilterTemplate : "",
          )
          .replace(
            "{yearFilter}",
            !!anime.anime_release_year ? yearFilterTemplate : "",
          );

        let animeTemplate = animeFilterTemplateWithFilters
          .replace("{qn}", `${anime.anime_id}`)
          .replace("{season}", anime.anime_season?.toUpperCase())
          .replace(
            "{format}",
            anime.anime_type?.toUpperCase().replace(/ /g, "_"),
          )
          .replace("{search}", anime.anime_name)
          .replace("{status}", malStatusToAnilist[anime.anime_status])
          .replace("{year}", anime.anime_release_year);
        queryTemplate += "\n" + animeTemplate;
      }

      queryTemplate += "\n}";

      let query = queryTemplate;
      if (linesToRemove.length > 0) {
        query = query
          .split("\n")
          .filter((line, index) => !linesToRemove.includes(index))
          .join("\n");
      }

      console.log(query);
      let {
        data: { data },
      } = await this.axios({
        data: {
          operationName: "Query",
          query: query,
        },
      });

      return asAnimes
        .map((anime) => ({
          malId: data[`a${anime.anime_id}`]?.idMal,
          anilistId: data[`a${anime.anime_id}`]?.id,
          ...anime,
        }))
        .filter((anime) => anime.malId);
    } catch (err) {
      console.log(err.response.data.errors);
      let linesToRemove = err.response.data.errors.map((err: any) => {
        let line = err.locations[0].line;
        return line - 1;
      });
      return await this.getAsAnimes(asAnimes, linesToRemove);
    }
  }
}
