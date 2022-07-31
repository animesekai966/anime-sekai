import { Injectable } from "@nestjs/common";
import S3 from "aws-sdk/clients/s3";
import sharp from "sharp";
import axios from "axios";
import { v4 } from "uuid";
import { PromiseResult } from "aws-sdk/lib/request";
import { AWSError } from "aws-sdk";
const r2 = new S3({
  endpoint: "https://1a873f11dd08aefe4193f8520fe517bc.r2.cloudflarestorage.com",
  accessKeyId: `4d61f1d519b01ca5416f284395246faa`,
  secretAccessKey: `907e7252ca5951780477eb785c6ae4d89bea73ddb49e42b562cd3caac0e813bd`,
  signatureVersion: "v4",
});
const b2 = new S3({
  endpoint: "https://s3.eu-central-003.backblazeb2.com",
  accessKeyId: `003463d205fc58b0000000001`,
  secretAccessKey: `K003eymQA5rFjBCgezHTGr5x6A86OE8`,
  signatureVersion: "v4",
});

//K003eymQA5rFjBCgezHTGr5x6A86OE8

const uploadTypeDetails: UploadDetailsType = {
  animeBanner: {
    quality: 100,
    service: "b2",
    path: "anime/banner",
  },
  animeCover: {
    quality: 90,
    service: "b2",
    path: "anime/cover",
  },
  character: {
    quality: 50,
    service: "r2",
    path: "character",
  },
  staff: {
    quality: 50,
    service: "r2",
    path: "staff",
  },
};

const BUCKET_NAME_R2 = "anime-sekai";
const BUCKET_NAME_B2 = "anime-sekai-eu";

@Injectable()
export class UploadService {
  async uploadImgAndConvertFromUrl({
    url,
    parentId,
    type,
  }: {
    url: string;
    parentId: string;
    type: "animeBanner" | "animeCover" | "character" | "staff";
  }) {
    const uploadId = v4();
    const settings = uploadTypeDetails[type];
    const key = `${settings.path}/${parentId}/${uploadId}.webp`;
    const { data } = await axios({ url, responseType: "arraybuffer" });
    let result: S3.ManagedUpload.SendData;
    let createOptions = {
      Key: key,
      Body: await sharp(data)
        .webp({ quality: settings.quality, effort: 6 })
        .toBuffer(),
      ContentType: "image/webp",
      CacheControl: "max-age=31536000",
    };

    if (settings.service === "b2") {
      result = await b2
        .upload({
          Bucket: BUCKET_NAME_B2,
          ...createOptions,
        })
        .promise();
    } else if (settings.service === "r2") {
      result = await r2
        .upload({
          Bucket: BUCKET_NAME_R2,
          ...createOptions,
        })
        .promise();
    }

    console.log(`[UPLOAD-${settings.service}] Uploaded A`, type);
    return {
      id: uploadId,
      source: url,
      ...result,
      Key: `${settings.service}/${key}`,
    };
  }

  async delete({ key }: { key: string }) {
    let result: PromiseResult<S3.DeleteObjectTaggingOutput, AWSError>;

    if (key.startsWith("b2/")) {
      let b2Key = key.replace("b2/", "");
      result = await b2
        .deleteObjectTagging({
          Bucket: BUCKET_NAME_B2,
          Key: b2Key,
        })
        .promise();
    } else if (key.startsWith("r2/")) {
      let r2Key = key.replace("r2/", "");
      result = await r2
        .deleteObjectTagging({
          Bucket: BUCKET_NAME_R2,
          Key: r2Key,
        })
        .promise();
    }

    return result;
  }
}

export interface UploadDetailsType {
  [index: string]: {
    quality: number;
    service: "b2" | "r2";
    path: string;
  };
}
