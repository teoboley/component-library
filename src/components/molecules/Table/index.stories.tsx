import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Table from '.';

storiesOf('Table', module).add('Default', () => {
  return (
    <div style={{ padding: 50 }}>
      <Table/>
    </div>
  );
});
