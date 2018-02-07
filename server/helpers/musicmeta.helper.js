import fs from "fs";
import mm from "musicmetadata";

export default async function getMusicMetaData() {
  const readableStream = fs.createReadStream("sample.mp3");
  const parser = mm(readableStream, (err, metadata) => {
    if (err) throw err;

    readableStream.close();
  });
}
