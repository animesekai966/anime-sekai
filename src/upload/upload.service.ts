import { Injectable } from "@nestjs/common";
import  S3 from "aws-sdk/clients/s3";
import  sharp from "sharp";
import axios from "axios";
import { v4 } from "uuid";
const s3Write = new S3({
  endpoint: "https://1a873f11dd08aefe4193f8520fe517bc.r2.cloudflarestorage.com",
  accessKeyId: `4d61f1d519b01ca5416f284395246faa`,
  secretAccessKey: `907e7252ca5951780477eb785c6ae4d89bea73ddb49e42b562cd3caac0e813bd`,
  signatureVersion: "v4",
});

const selectQuality = {
  character: 50,
  staff: 50,
  "anime/cover": 80,
  "anime/banner": 90,
};

const BUCKET_NAME = "anime-sekai";

@Injectable()
export class UploadService {
  async uploadImgAndConvertFromUrl({
    url,
    parentId,
    type,
  }: {
    url: string;
    parentId: string;
    type: "character" | "staff" | "anime/cover" | "anime/banner";
  }) {
    let { data } = await axios({ url, responseType: "arraybuffer" });
    let uploadId = v4();
    let quality = selectQuality[type];

    let key = `${type}/${parentId}/${uploadId}.webp`;
    let result = await s3Write
      .upload({
        Bucket: BUCKET_NAME,
        Key: key,
        Body: await sharp(data).webp({ quality, effort: 6 }).toBuffer(),
        ContentType: "image/webp",
        CacheControl: "max-age=31536000",
      })
      .promise();

    console.log("[UPLOAD] Uploaded A", type);
    return { id: uploadId, ...result, source: url };
  }

  async delete({ key }: { key: string }) {
    let result = await s3Write
      .deleteObjectTagging({
        Bucket: BUCKET_NAME,
        Key: key,
      })
      .promise();

    return result;
  }
}
