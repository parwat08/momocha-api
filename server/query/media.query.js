import MediaModel from "../models/media.model";

export async function getmMdias(params) {
  try {
    const medias = await MediaModel.find(params).exec();
    return medias;
  } catch (error) {
    return error;
  }
}

export async function getMediaById(mediaId) {
  try {
    const media = await MediaModel.findById(mediaId).exec();
    return media;
  } catch (error) {
    return error;
  }
}

export async function updateMediaById(mediaId, mediaDetails) {
  try {
    const media = await MediaModel.findByIdAndUpdate(mediaId, mediaDetails, {
      new: true
    }).exec();

    return media;
  } catch (error) {
    return error;
  }
}

export async function deleteMediaById(mediaId) {
  try {
    MediaModel.findByIdAndRemove(mediaId).exec();
    return `Media with ${mediaId} removed!`;
  } catch (error) {
    return error;
  }
}
