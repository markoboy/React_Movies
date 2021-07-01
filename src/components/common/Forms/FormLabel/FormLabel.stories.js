import React from 'react';

import FormLabel from './index';

export default {
  component: FormLabel,
  title: 'Common/Forms/FormLabel',
};

const Template = (args) => <FormLabel {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Form label',
};
