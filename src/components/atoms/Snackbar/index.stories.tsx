import * as React from 'react';
import { storiesOf } from '@storybook/react';

import SnackbarController, { NewSnackbar } from '.';
import Button from '../Button';

storiesOf('Snackbar', module).add('Default', () => {
  return (
    <div style={{ padding: 50 }}>
      <NewSnackbar />
      <SnackbarController>
        {({ open, isOpen, close }) => <Button onClick={() => open('Hello')}>Add Snackbar</Button>}
      </SnackbarController>
    </div>
  );
});
