import React from 'react';

import withStoryBackgroundWrapper from '@components/hocs/WithStoryBackgroundWrapper';
import Input from './index';

export default {
  component: Input,
  title: 'Common/Forms/Input',
  decorators: [withStoryBackgroundWrapper],
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Form input',
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Form input label',
  placeholder: 'Form input',
};
