import React from 'react';

import withStoryBackgroundWrapper from '@components/hocs/WithStoryBackgroundWrapper';
import DatePicker from './index';

export default {
  component: DatePicker,
  title: 'Common/Forms/DatePicker',
  decorators: [withStoryBackgroundWrapper],
};

const Template = (args) => <DatePicker {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Choose a date',
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Date',
  placeholder: 'Choose a date',
};
