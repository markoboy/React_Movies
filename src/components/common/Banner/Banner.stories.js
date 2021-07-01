import React from 'react';

import BannerImg from '@resources/banner.jpg';
import Banner from './index';
import Input from '../Forms/Input';

export default {
  component: Banner,
  title: 'Common/Banner',
};

const Template = (args) => <Banner {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: BannerImg,
  alt: 'Banner',
};

export const WithInput = Template.bind({});
WithInput.args = {
  src: BannerImg,
  alt: 'Banner',
  children: <Input placeholder="Search" label="Find something" />,
};

export const WithTitle = Template.bind({});
WithTitle.args = {
  src: BannerImg,
  alt: 'Banner',
  children: <h1 className="banner__title">Banner Component</h1>,
};
