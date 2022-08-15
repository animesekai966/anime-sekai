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

async function main() {
  let allObjects = await r2
    .listObjects({
      Bucket: "anime-sekai",
    })
    .promise();

  console.log(allObjects);
}

main();
