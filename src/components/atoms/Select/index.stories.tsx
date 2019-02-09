import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Select from './index';

storiesOf('Select', module).add('Default', () => {
  return (
    <div style={{ padding: 50 }}>
      <Select value={null}>
        <option value={'ocean'}>Ocean</option>
      </Select>
    </div>
  );
});
