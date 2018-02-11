import _ from "lodash";
import MediaModel from "../models/media.model";

export async function getMedias(params) {
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

export async function postMedia(mediaDetails) {
  // let { caption, language, tags, category, media } = params;
  // TODO: get the _uploaderId and duration of audio, video and media_type
  // params._uploaderId =
  // params.duration =
  // media_type =
  // let media = new MediaModel(params);
  // media.save(err => {
  //     if (!err) return 'media saved';
  // })
}

export async function updateMediaById(mediaId, mediaDetails) {
  try {
    const updateableFields = _.pick(mediaDetails, [
      "caption",
      "language",
      "shares",
      "momochas",
      "listens",
      "tags",
      "category"
    ]);

    const media = await MediaModel.findByIdAndUpdate(
      mediaId,
      { $set: updateableFields },
      { new: true }
    ).exec();

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
