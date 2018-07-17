import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import { Button, Welcome } from '@storybook/react/demo';

import MusicCard from '../components/MusicCard';


storiesOf('Music Screen', module)
  .addDecorator(withKnobs)
  .add('Music Card', () => {
    const title = text('Title','The way I am');
    const artist = text('Artist Name','John Mayer');
    const cover_img = text('Cover Image','https://uiaa-web.azureedge.net/wp-content/uploads/2016/08/uiaa-sustainability-intro-1300x600.jpg');
    const profilePic = text('Profile pic','https://ksassets.timeincuk.net/wp/uploads/sites/55/2017/12/John-Mayer-920x584.jpg');
    const listenCount = text('Listen count','1221');
    const tag = text('Tag','Rock');

    return (
      <MusicCard
        title={title}
        artist={artist}
        profilePic={profilePic}
        cover_img={cover_img}
        tag={tag}
        listenCount={listenCount}
      />
    );
  });
