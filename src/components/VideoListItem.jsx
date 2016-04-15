import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class VideoListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const video = this.props.video;
    const imageUrl = video.snippet.thumbnails.default.url;

    return (
      <li onClick={() => this.props.selectVideo(video)} className="list-group-item">
        <div className="video-list-media">
          <div className="media-left">
            <img className="media-object" src={imageUrl} />
          </div>
          <div className="media-body">
            <div className="media-heading">
                {video.snippet.title}
            </div>
          </div>
        </div>
      </li>
    );
  }
}

VideoListItem.propTypes = {
    video: React.PropTypes.object.isRequired,
}

export default connect(null, actions)(VideoListItem);
