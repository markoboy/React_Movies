import React from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import withStoryBackgroundWrapper from '@components/hocs/WithStoryBackgroundWrapper';
import Button from './index';

export default {
  component: Button,
  title: 'Common/Forms/Button',
  decorators: [withStoryBackgroundWrapper],
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
};

export const Primary = Template.bind({});
Primary.args = {
  classes: 'btn--primary',
  children: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  classes: 'btn--secondary',
  children: 'Button',
};

export const Outline = Template.bind({});
Outline.args = {
  classes: 'btn--outline',
  children: 'Button',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  classes: 'btn--full-width',
  children: 'Button',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  classes: 'btn--with-icon',
  children: (
    <>
      <FontAwesomeIcon size="xs" icon={faPlus} />
      Button
    </>
  ),
};
