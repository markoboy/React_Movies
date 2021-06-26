import React from 'react';

import withStoryBackgroundWrapper from '@components/hocs/WithStoryBackgroundWrapper';
import Select from './index';

export default {
  component: Select,
  title: 'Common/Forms/Select',
  decorators: [withStoryBackgroundWrapper],
};

const options = [
  {
    value: 'option-1',
    label: 'Option 1',
  },
  {
    value: 'option-2',
    label: 'Option 2',
  },
];

const Template = (args) => <Select options={options} {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Select an item',
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Select label',
  placeholder: 'Select an item',
};

export const WithSelectedItem = Template.bind({});
WithSelectedItem.args = {
  value: [options[0]],
  label: 'Select label',
  placeholder: 'Select an item',
};

export const WithAllItemsSelected = Template.bind({});
WithAllItemsSelected.args = {
  value: options,
  label: 'Select label',
  placeholder: 'Select an item',
};
