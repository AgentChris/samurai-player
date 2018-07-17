import React from 'react';
import './style.css';

class MusicCard extends React.PureComponent{
  render(){
    const {title,tag,profilePic,listenCount,artist} = this.props;
    return (
      <div>
        <div>{title}</div>
        <div>{tag}</div>
        <img src={profilePic} className={'artist-img'}/>
        <div>{listenCount}</div>
        <div>{artist}</div>
      </div>
    );
  }
}

export default MusicCard;