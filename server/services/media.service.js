import _ from 'lodash';
import MediaModel from '../models/media.model';

export async function postMedia(params) {
  //    let { caption, language, tags, category, media } = params;
  // TODO: get the _uploaderId and duration of audio, video and media_type
  // params._uploaderId = 
  // params.duration = 
  // media_type = 

  // let media = new MediaModel(params);
  // media.save(err => {
  //     if (!err) return 'media saved';
  // })
}

export async function updateMedia(params) {
  let { _id } = params;

  let updateableFields = _.pick(params, ['caption', 'language', 'shares', 'momochas', 'listens', 'tags', 'category']);

  let media = await MediaModel.findByIdAndUpdate(_id, { $set: updateableFields }, { new: true }).exec();

  if (!media) return 'something went wrong while updating media';

  return 'media updated!';
}

export async function deleteMedia(params) {
  let { _id } = params;

  await MediaModel.findByIdAndRemove(_id).exec();
  return 'media removed!';
}
