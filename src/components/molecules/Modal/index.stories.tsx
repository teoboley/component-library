import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import Modal from ".";
import Heading, {EHeadingType} from "../../atoms/Typography/Heading";
import Text, {ETextType} from "../../atoms/Typography/Text";

storiesOf('Modal', module)
  .add("Default", () => {
    return <div style={{ padding: 50 }}>
      <Modal isOpen={true} onClose={action('onClose')}>
        <Heading type={EHeadingType.H1}>Hello</Heading>
        <Text type={ETextType.Body}>This is a modal.</Text>
        <Text type={ETextType.Body}>It was once my friend.</Text>
      </Modal>
    </div>
  })
;