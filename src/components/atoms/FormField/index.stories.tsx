import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ThreeDRotationIcon from '@material-ui/icons/ThreeDRotation';

import FormFieldText from './Text';
import FormFieldNumber from './Number';
import FormFieldCheckbox from './Checkbox';
import FormFieldRadio from './Radio';

storiesOf('Atoms/Form', module).add('Fields', () => {
  return (
    <div style={{ padding: 50 }}>
      <div style={{ marginBottom: 15 }}>
        <FormFieldText value={null} onChange={action('onChange')} onBlur={action('onBlur')} />
        <FormFieldText
          label={'Some Label'}
          value={''}
          onChange={action('onChange')}
          onBlur={action('onBlur')}
        />
        <FormFieldText
          label={'Some Label'}
          value={'Some value'}
          onChange={action('onChange')}
          onBlur={action('onBlur')}
        />
        <FormFieldCheckbox checked={false} label={'A Checkbox'} />
        <FormFieldCheckbox checked={true} label={'A Checkbox'} />
        <FormFieldRadio checked={false} label={'A Radio'} />
        <FormFieldRadio checked={true} label={'A Radio'} />
        <FormFieldNumber value={0} onChange={action('onChange')} onBlur={action('onBlur')} />
        <FormFieldNumber value={5} onChange={action('onChange')} onBlur={action('onBlur')} />
      </div>
      <div style={{ marginBottom: 15 }}>
        <FormFieldText
          icon={<ThreeDRotationIcon />}
          value={null}
          onChange={action('onChange')}
          onBlur={action('onBlur')}
        />
        <FormFieldText
          label={'Some Label'}
          icon={<ThreeDRotationIcon />}
          value={''}
          onChange={action('onChange')}
          onBlur={action('onBlur')}
        />
        <FormFieldText
          label={'Some Label'}
          icon={<ThreeDRotationIcon />}
          value={'Some value'}
          onChange={action('onChange')}
          onBlur={action('onBlur')}
        />
        <FormFieldCheckbox checked={false} label={'A Checkbox'} />
        <FormFieldCheckbox checked={true} label={'A Checkbox'} />
        <FormFieldRadio checked={false} label={'A Radio'} />
        <FormFieldRadio checked={true} label={'A Radio'} />

        <FormFieldNumber
          icon={<ThreeDRotationIcon />}
          value={0}
          onChange={action('onChange')}
          onBlur={action('onBlur')}
        />
        <FormFieldNumber
          icon={<ThreeDRotationIcon />}
          value={5}
          onChange={action('onChange')}
          onBlur={action('onBlur')}
        />
      </div>
    </div>
  );
});
