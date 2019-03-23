import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Select from './index';
import Tooltip from '../../../atoms/Tooltip';

storiesOf('Select', module).add('Default', () => {
  return (
    <div style={{ padding: 50 }}>
      <Select value={null} options={[
        {
          value: 'ocean',
          label: (
            <Tooltip content={'Hi'}>
              <span>Ocean</span>
            </Tooltip>
          )
        },
        { value: 'blue', label: 'Blue' },
        { value: 'purple', label: 'Purple' },
        { value: 'red', label: 'Red' },
        { value: 'orange', label: 'Orange' },
        { value: 'yellow', label: 'Yellow' },
        { value: 'green', label: 'Green' },
        { value: 'forest', label: 'Forest' },
        { value: 'slate', label: 'Slate' },
        { value: 'silver', label: 'Silver' }
      ]} />
    </div>
  );
});
