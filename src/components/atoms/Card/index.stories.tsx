import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { Heading, Text } from '../Typography/index';
import { EHeadingType } from '../Typography/Heading';
import { ETextType } from '../Typography/Text';
import Card from '.';

storiesOf('Atoms/Card', module).add('Default', () => {
  return (
    <div style={{ padding: 50 }}>
      <Card style={{ maxWidth: 300, margin: 30 }}>
        <Heading type={EHeadingType.H3}>New Workspace</Heading>
        <Text type={ETextType.Body}>
          Either choose a folder to place your new notes in, or open a HTTP endpoint that conforms
          to the Chronicler specification.
        </Text>
      </Card>
    </div>
  );
});
