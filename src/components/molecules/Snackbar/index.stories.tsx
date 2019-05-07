import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Button, { EButtonType } from '../../atoms/Button';
import { EMessageLocation, MessageProvider, Snackbar, useMessage } from '.';

const DefaultSnackbar: React.FC<{ onClose?: () => void }> = props => (
  <Snackbar
    heading={'Snackbar Heading'}
    description={'Some description'}
    dismissable
    onClose={props.onClose}
  >
    <Button type={EButtonType.Outline} onClick={props.onClose}>
      Bye
    </Button>
    <Button type={EButtonType.Contained}>Aight</Button>
  </Snackbar>
);

export const Test: React.FC<{}> = () => {
  const showMessage = useMessage();

  return (
    <div>
      <Snackbar heading={'Snackbar Heading'} description={'Some description'}>
        <Button type={EButtonType.Outline}>Bye</Button>
        <Button type={EButtonType.Contained}>Aight</Button>
      </Snackbar>
      <br/>
      <div>
        <Button onClick={() => showMessage(onClose => <DefaultSnackbar onClose={onClose} />)}>
          Add Snackbar (Default)
        </Button>
      </div>
      <br/>
      <div>
        <Button
          onClick={() =>
            showMessage(onClose => <DefaultSnackbar onClose={onClose} />, EMessageLocation.TopLeft)
          }
        >
          Add Snackbar (Top Left)
        </Button>
        <Button
          onClick={() =>
            showMessage(
              onClose => <DefaultSnackbar onClose={onClose} />,
              EMessageLocation.TopCenter
            )
          }
        >
          Add Snackbar (Top Center)
        </Button>
        <Button
          onClick={() =>
            showMessage(onClose => <DefaultSnackbar onClose={onClose} />, EMessageLocation.TopRight)
          }
        >
          Add Snackbar (Top Right)
        </Button>
      </div>
      <div>
        <Button
          onClick={() =>
            showMessage(
              onClose => <DefaultSnackbar onClose={onClose} />,
              EMessageLocation.BottomLeft
            )
          }
        >
          Add Snackbar (Bottom Left)
        </Button>
        <Button
          onClick={() =>
            showMessage(
              onClose => <DefaultSnackbar onClose={onClose} />,
              EMessageLocation.BottomCenter
            )
          }
        >
          Add Snackbar (Bottom Center)
        </Button>
        <Button
          onClick={() =>
            showMessage(
              onClose => <DefaultSnackbar onClose={onClose} />,
              EMessageLocation.BottomRight
            )
          }
        >
          Add Snackbar (Bottom Right)
        </Button>
      </div>
    </div>
  );
};

storiesOf('Molecules/Snackbar', module).add('Default', () => {
  return (
    <MessageProvider>
      <div style={{ padding: 50 }}>
        <Test />
      </div>
    </MessageProvider>
  );
});
