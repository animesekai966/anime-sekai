import S3 from "aws-sdk/clients/s3";
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

let DANGER = false;

async function deleteR2() {
  let allObjects = await r2
    .listObjects({
      Bucket: "anime-sekai",
    })
    .promise();

  for (let obj of allObjects.Contents!) {
    let key = obj.Key!;
    r2.deleteObjectTagging({
      Bucket: "anime-sekai",
      Key: key,
    })
      .promise()
      .then(() => console.log("[R2] Deleted: " + key));
  }
}

async function deleteB2() {
  let allObjects = await b2
    .listObjects({
      Bucket: "anime-sekai-eu",
    })
    .promise();

  for (let obj of allObjects.Contents!) {
    let key = obj.Key!;
    b2.deleteObjectTagging({
      Bucket: "anime-sekai-eu",
      Key: key,
    })
      .promise()
      .then(() => console.log("[B2] Deleted: " + key));
  }
}

if (DANGER) {
  deleteR2();
  deleteB2();
} else {
  console.log("ehe nandyoo?!");
}
