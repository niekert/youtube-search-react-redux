import React from 'react';
import { connect } from 'react-redux';

class VideoDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const video = this.props.video;

    if(!video) {
      return <div>Loading...</div>
    }

    const videoID = video.id.videoId;
    const url = `https://youtube.com/embed/${videoID}`;

    return (
      <div className="video-detail col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={url}></iframe>
        </div>
        <div className="details">
          <div>{video.snippet.title}</div>
          <div>{video.snippet.description}</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { video: state.videos.selectedVideo };
}

export default connect(mapStateToProps)(VideoDetail);
