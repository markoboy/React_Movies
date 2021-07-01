import React from 'react';

import BrandLogo from './index';

export default {
  component: BrandLogo,
  title: 'Common/BrandLogo',
};

const Template = (args) => <BrandLogo {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'not netflix',
  subName: 'roulette',
};
