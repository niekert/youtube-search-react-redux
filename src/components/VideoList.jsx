import React from 'react';
import { connect } from 'react-redux';
import VideoListItem from './VideoListItem';

class VideoList extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <ul className="col-md-4 list-group">
          {this.props.videos.map(video => {
            return (
              <VideoListItem
                key={video.etag}
                video={video} />
            )
          })}
        </ul>
      )
    }
}

function mapStateToProps(state) {
  return { videos: state.videos.videos };
}

export default connect(mapStateToProps)(VideoList);
