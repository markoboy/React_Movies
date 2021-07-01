import React from 'react';
import BrandLogo from '../BrandLogo';

import SiteHeaderNav from './component';
import HeaderAddActionButton from './HeaderAddActionButton';
import HeaderSearchActionButton from './HeaderSearchActionButton';

export default {
  component: SiteHeaderNav,
  title: 'Common/SiteHeaderNav',
};

const Template = (args) => <SiteHeaderNav {...args} />;

export const Default = Template.bind({});
Default.args = {
  headerLogo: <BrandLogo />,
};

export const WithBackground = Template.bind({});
WithBackground.args = {
  headerLogo: <BrandLogo />,
  classes: 'header-nav-container--with-bg',
};

export const WithSearchActionButton = Template.bind({});
WithSearchActionButton.args = {
  headerLogo: <BrandLogo />,
  classes: 'header-nav-container--with-bg',
  actionButton: <HeaderSearchActionButton />,
};

export const WithAddActionButton = Template.bind({});
WithAddActionButton.args = {
  headerLogo: <BrandLogo />,
  classes: 'header-nav-container--with-bg',
  actionButton: <HeaderAddActionButton />,
};
