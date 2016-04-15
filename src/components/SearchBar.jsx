import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const videoSearch = _.debounce((term) => { this.props.searchVideos(term) }, 500);

    return (
      <div className="search-bar">
        <input
          onChange={event => videoSearch(event.target.value)}/>
      </div>
    )
  }
}

export default connect(null, actions)(SearchBar);
