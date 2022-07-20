import { Injectable } from "@nestjs/common";
import { Client, Intents, Snowflake, TextChannel } from "discord.js";
const allNums = "0123456789";
const allChar = "a03dx95om1";

@Injectable()
export class DiscordService extends Client {
  private animeCoversChannelId: Snowflake;
  private charactersChannelId: Snowflake;
  private staffChannelId: Snowflake;
  private testUploadChannelId: Snowflake;
  private cdnGuildId: Snowflake;
  constructor() {
    super({ intents: [Intents.FLAGS.GUILDS] });
    this.animeCoversChannelId = "999351076480368802";
    this.charactersChannelId = "997425919629217822";
    this.staffChannelId = "997425956442619946";
    this.cdnGuildId = "997372700119015434";
    this.testUploadChannelId = "999351203064459375";
  }

  async onModuleInit() {
    await this.login(process.env.DISCORD_TOKEN).then(() =>
      console.log("DISCORD: Ready"),
    );
  }

  public async uploadAnimeCovers(files: string[]) {
    return this.uploadImages(files, this.animeCoversChannelId);
  }

  public async uploadCharacterImages(files: string[]) {
    return this.uploadImages(files, this.charactersChannelId);
  }

  public async uploadStaffImages(files: string[]) {
    return this.uploadImages(files, this.staffChannelId);
  }

  public async uploadTestImages(files: string[]) {
    return this.uploadImages(files, this.testUploadChannelId);
  }

  private async uploadImages(files: string[], channelId: Snowflake) {
    let guild = this.guilds.cache.get(this.cdnGuildId);
    let channel = guild.channels.cache.get(channelId) as TextChannel;
    let { attachments } = await channel.send({ files });
    return attachments.map((attachment) => ({
      id: attachment.id,
      cdnId: this.encryptNums(`${channel.id}/${attachment.id}`),
      name: attachment.name,
      url: attachment.proxyURL,
      contentType: attachment.contentType,
      size: attachment.size,
    }));
  }

  public encryptNums(str: string) {
    let [msgId, imgId] = str
      .split("")
      .map((e) => allChar[allNums.indexOf(e)] || "/")
      .join("")
      .split("/");
    let result = [...msgId.match(/.{1,6}/g), ...imgId.match(/.{1,6}/g)];
    return result.join("-");
  }

  public decryptNums(str: string) {
    let result = str
      .replace(/-/g, "")
      .split("")
      .map((e) => allNums[allChar.indexOf(e)]);
    result[18] = "/" + result[18];
    return result.join("");
  }
}
