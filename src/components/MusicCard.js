import React from 'react';
import '../assets/simple-grid.min.css';
import './style.css';

class MusicCard extends React.PureComponent {
  render() {
    const { title, tag, profilePic, listenCount, artist, cover_img } = this.props;
    return (
      <div className={'overlay'}>
        <div style={{ backgroundImage: `url(${cover_img})` }} className={'music-container'}>
          <div className={'music-listen-count'}>{listenCount}</div>
          <div className={'music-tag'}>{tag}</div>
          <div className={'container music-content'}>
            <div className={'row'}>
              <div className={'col-3'}>
                <img className={'artist-img'} src={profilePic} />
              </div>
              <div className={'col-9'}>
                <span className={'music-title'}>{title}</span>
                <div className={'artist-name'}>{artist}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MusicCard;