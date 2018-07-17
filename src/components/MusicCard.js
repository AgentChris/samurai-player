import React from 'react';
import '../assets/simple-grid.min.css';
import './style.css';

class MusicCard extends React.PureComponent {
  render() {
    const { title, tag, profilePic, listenCount, artist, cover_img } = this.props;
    return (
      <div style={{ backgroundImage: `url(${cover_img})` }} className={'music-container'}>
        <div>{listenCount}</div>
        <div>{tag}</div>
        <div className={'music-content'}>
          <div>{title}</div>
          <img src={profilePic} className={'artist-img'} />
          <div>{artist}</div>
        </div>
      </div>
    );
  }
}

export default MusicCard;