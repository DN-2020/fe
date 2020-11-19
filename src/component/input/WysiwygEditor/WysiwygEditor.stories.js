import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import RVWysiwygEditor from './RVWysiwygEditor';

export default {
  title: 'Input|RVWysiwygEditor', 
  component: RVWysiwygEditor,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: '위즈윅 에디터 컴포넌트'
  }
};

export const DefaultComponent = () => {
  return (
    <RVWysiwygEditor
      data={'<p>sdfdsfjds</p><p>dsfkldsjflkds</p><p>dsflkdsjlkfdsj</p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/1_Hyundai_Sonata_%28DN8%29.jpg/270px-1_Hyundai_Sonata_%28DN8%29.jpg" />'}
      height='400px'
    />
  );
};