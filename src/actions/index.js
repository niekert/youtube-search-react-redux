import { SEARCH_VIDEOS, VIDEOS_RECEIVED, VIDEO_SELECTED } from './types';
import { API_KEY } from '../constants';
import YTSearch from 'youtube-api-search';

export function searchVideos(term) {
  console.log('searching for videos');
  return dispatch => {
    YTSearch({key: API_KEY, term: term}, (videos) => {
        dispatch(receiveVideos(videos));
    });
  }
}

export function selectVideo(video) {
    console.log('selecting video');
    return {
      type: VIDEO_SELECTED,
      payload: video,
    }
}

export function receiveVideos(videos) {
  console.log('receiving videos');
  return {
    type: VIDEOS_RECEIVED,
    payload: videos,
  }
}
