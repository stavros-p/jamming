import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import {SearchResults} from '../SearchResults/SearchResults.js';
import {Playlist} from '../Playlist/Playlist.js';
import {SearchBar} from '../SearchBar/SearchBar.js';


class App extends Component {
  constructor(props) {
  super(props);
  this.addTrack = this.addTrack.bind(this);
  this.state = {
          searchResults: [], // array of things

  }
  render() {
    return (
      <div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    <!-- Add a SearchBar component -->
    <div className="App-playlist">
      <SearchResults searchResults={this.state.searchResults}/>
      <!-- Add a Playlist component -->
    </div>
  </div>
</div>
    );
  }
}

export default App;
