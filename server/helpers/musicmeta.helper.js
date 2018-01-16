import fs from 'fs';
import mm from 'musicmetadata';

export default async function getMusicMetaData(params) {
    let readableStream = fs.createReadStream('sample.mp3');
    let parser = mm(readableStream, function (err, metadata) {
        if (err) throw err;
        
        readableStream.close();
    });
}