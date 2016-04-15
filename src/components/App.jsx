import React from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import { connect } from 'react-redux';
import * as actions from '../actions';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    //Initialize by searching for Amsterdam related videos
    this.props.searchVideos('Amsterdam');
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail/>
        <VideoList />
      </div>
    )
  }
}

export default connect(null, actions)(App);
