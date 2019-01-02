import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Tag from '.';

storiesOf('Tag', module)
  .add('No Renaming', () => {
    return (
      <div style={{ padding: 50 }}>
        <Tag label={'With Arrow'} renaming={null} />
        <Tag label={'With Icon'} renaming={null} />
        <Tag label={'With Multiple Icons'} renaming={null} />
      </div>
    );
  })
  .add('Renaming', () => {
    return (
      <div style={{ padding: 50 }}>
        <Tag label={'With Arrow'} renaming={'With Arrow'} />
        <Tag label={'With Icon'} renaming={null} />
        <Tag label={'With Multiple Icons'} renaming={null} />
      </div>
    );
  });
