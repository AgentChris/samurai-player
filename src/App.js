import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MusicCard from './components/MusicCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MusicCard
          title={'The way I am'}
          artist={'John Mayer'}
          profilePic={'https://uiaa-web.azureedge.net/wp-content/uploads/2016/08/uiaa-sustainability-intro-1300x600.jpg'}
          cover_img={'https://ksassets.timeincuk.net/wp/uploads/sites/55/2017/12/John-Mayer-920x584.jpg'}
          tag={'Rock'}
          listenCount={'221'}
        />
      </div>
    );
  }
}

export default App;
