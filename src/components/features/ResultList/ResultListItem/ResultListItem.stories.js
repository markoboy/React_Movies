import React from 'react';

import withStoryBackgroundWrapper from '@components/hocs/WithStoryBackgroundWrapper';
import PosterImg from '@resources/avengers.jpg';
import ResultListItem from './index';

export default {
  component: ResultListItem,
  title: 'Feature/ResultList/ResultListItem',
  decorators: [
    withStoryBackgroundWrapper,
    (Story) => (
      <div style={{ maxWidth: '330px' }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <ResultListItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 1,
  poster_path: PosterImg,
  title: 'Avengers',
  release_date: new Date(),
  genres: ['Action'],
};
