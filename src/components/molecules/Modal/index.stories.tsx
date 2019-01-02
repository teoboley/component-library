import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Modal from '.';
import Text, { ETextType } from '../../atoms/Typography/Text';

storiesOf('Modal', module).add('Default', () => {
  return (
    <div style={{ padding: 50 }}>
      <Modal isOpen={true} onClose={action('onClose')}>
        <Text type={ETextType.Body}>This is a modal with body text.</Text>
        <Text type={ETextType.Body}>It was once my friend.</Text>
      </Modal>
    </div>
  );
});
