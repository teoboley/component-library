import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ContextMenu from '.';

storiesOf('Context Menu', module).add('No Renaming', () => {
  return (
    <ContextMenu options={[{ option: 'Inspect', callback: action('inspect') }]}>
      <div style={{ margin: 100, padding: 50, border: '1px solid black' }}>
        <ContextMenu
          options={[{ option: 'Rename', callback: action('rename') }]}
          style={{ backgroundColor: 'lightgrey' }}
        >
          <div style={{ padding: 50, backgroundColor: 'black' }} />
        </ContextMenu>
      </div>
    </ContextMenu>
  );
});
