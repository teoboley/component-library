import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { css } from 'emotion';

import Card from '../../../atoms/Card';
import FormFieldSelect from './index';

storiesOf('_Incubating/Molecules/Select', module).add('Incubator/Default', () => {
  return (
    <Card>
      <FormFieldSelect
        inputValue={''}
        selected={null}
        options={[
          {
            value: 0,
            render: <div>Option 0</div>
          },
          {
            value: 1,
            render: <div>Option 2</div>
          },
          {
            value: 2,
            render: <div>Option 3</div>
          }
        ]}
        className={css({
          marginRight: 50
        })}
      />
    </Card>
  );
});
