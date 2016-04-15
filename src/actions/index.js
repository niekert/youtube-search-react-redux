import { SEARCH_VIDEOS, VIDEOS_RECEIVED, VIDEO_SELECTED } from './types';
import { API_KEY } from '../constants';
import YTSearch from 'youtube-api-search';

export function searchVideos(term) {
  return dispatch => {
    YTSearch({key: API_KEY, term: term}, (videos) => {
        dispatch(receiveVideos(videos));
        dispatch(selectVideo(videos.length ? videos[0] : null));
    });
  }
}

export function selectVideo(video) {
    return {
      type: VIDEO_SELECTED,
      payload: video,
    }
}

export function receiveVideos(videos) {
  return {
    type: VIDEOS_RECEIVED,
    payload: videos,
  }
}
