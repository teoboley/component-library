import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { blue, green, red } from '@material-ui/core/colors';

import Button, { EButtonType } from '.';

const renderButtonsWithType = (type: EButtonType) => {
  return (
    <div style={{ padding: 50 }}>
      <div>
        <Button type={type} color={'primary'}>
          Primary
        </Button>
        <Button type={type} color={'secondary'}>
          Secondary
        </Button>
        <Button type={type} disabled>
          Disabled
        </Button>
      </div>
      <div>
        <Button type={type} color={red['400']}>
          Red
        </Button>
        <Button type={type} color={blue['400']}>
          Blue
        </Button>
        <Button type={type} color={green['500']}>
          Green
        </Button>
      </div>
    </div>
  );
};

storiesOf('Button', module)
  .add('Highlight', () => {
    return renderButtonsWithType(EButtonType.Highlight);
  })
  .add('Overlay', () => {
    return renderButtonsWithType(EButtonType.Overlay);
  })
  .add('Outline', () => {
    return renderButtonsWithType(EButtonType.Outline);
  })
  .add('Contained', () => {
    return renderButtonsWithType(EButtonType.Contained);
  });
