import React from 'react';
import withSection from './WithSection';
import withWrapper from './WithWrapper';

export default function withStoryBackgroundWrapper(Story) {
  const Comp = withSection(withWrapper(Story), {
    classes: 'background--black',
  });
  return <Comp />;
}
