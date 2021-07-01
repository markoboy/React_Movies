import React from 'react';

import SiteFooter from './index';

export default {
  component: SiteFooter,
  title: 'Common/SiteFooter',
};

const Template = (args) => <SiteFooter {...args} />;

export const Default = Template.bind({});
Default.args = {};
