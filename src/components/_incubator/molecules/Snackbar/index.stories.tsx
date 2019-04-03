import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { Snackbar, MessageProvider, useMessage } from '.';
import Button, { EButtonType } from '../../../atoms/Button';

export const Test: React.FC<{}> = () => {
  const showMessage = useMessage();

  return (
      <div>
        <Snackbar heading={'Snackbar Heading'} description={'Some description'}>
          <Button type={EButtonType.Outline}>Bye</Button>
          <Button type={EButtonType.Contained}>Aight</Button>
        </Snackbar>
        <Button
          onClick={() =>
            showMessage(
              onClose => (
                <Snackbar
                  heading={'Snackbar Heading'}
                  description={'Some description'}
                  dismissable
                  onClose={onClose}
                >
                  <Button type={EButtonType.Outline} onClick={onClose}>Bye</Button>
                  <Button type={EButtonType.Contained}>Aight</Button>
                </Snackbar>
              )
            )
          }
        >
          Add Snackbar
        </Button>
      </div>
  );
};

storiesOf('Snackbar', module).add('Default', () => {
  return (
    <MessageProvider>
      <div style={{ padding: 50 }}>
        <Test />
      </div>
    </MessageProvider>
  );
});
