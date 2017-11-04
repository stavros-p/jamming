import React from 'react';
import Track from '../Track/Track.js';
import './TrackList.css';
class TrackList extends React.Component{
  render(){
    return(<div className="TrackList">
      {
        this.props.tracks.map(track => { // this is what it means by "passing the current track"
        return (
          <Track
            track={ track }
            key={ track.id }/>

        );
      })
    }
</div>)

</div>);
  }
}
export default TrackList;
