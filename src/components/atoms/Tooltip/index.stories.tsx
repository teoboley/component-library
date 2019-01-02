import * as React from 'react';
import { storiesOf } from '@storybook/react';
import ThreeDRotationIcon from '@material-ui/icons/ThreeDRotation';
import FormatBold from '@material-ui/icons/FormatBold';
import FormatAlignLeft from '@material-ui/icons/FormatAlignLeft';
import { blue, green, grey, red } from '@material-ui/core/colors';

import Tooltip from '.';
import Button from '../Button';

storiesOf('Tooltip', module)
  .add('With arrow', () => {
    return (
      <div style={{ padding: 50 }}>
        <Tooltip
          content={
            'Some really long tooltip. This can be multiple sentences, and contain multiple types of content.'
          }
          backgroundColor={red['400']}
          withArrow
        >
          <Button color={red['400']}>With Arrow</Button>
        </Tooltip>
        <Tooltip content={<ThreeDRotationIcon />} backgroundColor={blue['800']} withArrow>
          <Button color={blue['800']}>With Icon</Button>
        </Tooltip>
        <Tooltip
          content={
            <>
              <ThreeDRotationIcon />
              <FormatBold />
              <FormatAlignLeft />
            </>
          }
          withArrow
        >
          <Button>With Multiple Icons</Button>
        </Tooltip>
      </div>
    );
  })
  .add('Without arrow', () => {
    return (
      <div style={{ padding: 50 }}>
        <Tooltip content={'Add'} backgroundColor={grey['200']}>
          <Button>Without Arrow</Button>
        </Tooltip>
        <Tooltip content={<ThreeDRotationIcon />}>
          <Button>With Icon</Button>
        </Tooltip>
      </div>
    );
  })
  .add('In nested component', () => {
    class NestedComponent extends React.Component {
      buttonRef: any | null;

      render() {
        return (
          <div style={{ padding: 50 }}>
            <Tooltip content={'Add'} backgroundColor={grey['200']} disableHoverListener>
              {({ open }) => (
                <div style={{ padding: 25, width: 300, backgroundColor: 'darkgrey' }}>
                  <span
                    style={{ display: 'inline-block' }}
                    ref={(ref: any) => (this.buttonRef = ref)}
                  >
                    <Button
                      onClick={() => {
                        open(this.buttonRef);
                      }}
                    >
                      Trigger
                    </Button>
                  </span>
                </div>
              )}
            </Tooltip>
          </div>
        );
      }
    }

    return <NestedComponent />;
  });