import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { blue, green, red } from '@material-ui/core/colors';
import Alert from '.';
import { css } from 'emotion';

storiesOf('Alert', module)
  .add('Default', () => {
    return <div style={{ padding: 50 }}>
      <div className={css({ marginBottom: 20 })}>
        <Alert open color={'primary'}>
          Primary
        </Alert>
        <Alert open color={'secondary'}>
          Secondary
        </Alert>
        <Alert open color={'success'}>
          Success
        </Alert>
        <Alert open color={'danger'}>
          Danger
        </Alert>
        <Alert open color={'warning'}>
          Warning
        </Alert>
      </div>
      <div>
        <Alert open color={red['400']}>
          Red
        </Alert>
        <Alert open color={blue['400']}>
          Blue
        </Alert>
        <Alert open color={green['500']}>
          Green
        </Alert>
      </div>
    </div>;
  });
