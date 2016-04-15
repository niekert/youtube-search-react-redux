import { SEARCH_VIDEOS, VIDEOS_RECEIVED, VIDEO_SELECTED } from '../actions/types';

const defaultState = {
  selectedVideo: null,
  videos: [],
}

export default function(state = defaultState, action) {
  switch(action.type) {
    case VIDEOS_RECEIVED:
      return Object.assign({}, state, {
        videos: action.payload,
      });
      break;
    case VIDEO_SELECTED:
      return Object.assign({}, state, {
        selectedVideo: action.payload,
      });
  }

  return state;
}
