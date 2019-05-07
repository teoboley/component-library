import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { createTheme, ThemeProvider } from '../../../lib/theme';
import { EHeadingType } from './Heading';
import { ETextType } from './Text';
import { Heading, Text } from '.';

storiesOf('Atoms/Typography', module).add('Default', () => {
  return (
    <div style={{ padding: 50 }}>
      <Heading type={EHeadingType.HERO}>Hero</Heading>
      <Heading type={EHeadingType.H1}>Heading 1</Heading>
      <Heading type={EHeadingType.H2}>Heading 2</Heading>
      <Heading type={EHeadingType.H3}>Heading 3</Heading>
      <Heading type={EHeadingType.H4}>Heading 4</Heading>
      <Heading type={EHeadingType.H5}>Heading 5</Heading>
      <Heading type={EHeadingType.H6}>Heading 6</Heading>
      <Text type={ETextType.Body}>Body</Text>
      <Text type={ETextType.Caption}>Caption</Text>
      <Text type={ETextType.Label}>Label</Text>
    </div>
  );
}).add('Themed', () => {
  return (
    <ThemeProvider
      theme={createTheme({
        typography: {
          hero: {
            fontFamily: '"Courier", monospace'
          },
          h2: {
            fontFamily: '"Times New Roman", Times, serif'
          }
        }
      })}
    >
      <div style={{ padding: 50 }}>
        <Heading type={EHeadingType.HERO}>Hero</Heading>
        <Heading type={EHeadingType.H1}>Heading 1</Heading>
        <Heading type={EHeadingType.H2}>Heading 2</Heading>
        <Heading type={EHeadingType.H3}>Heading 3</Heading>
        <Heading type={EHeadingType.H4}>Heading 4</Heading>
        <Heading type={EHeadingType.H5}>Heading 5</Heading>
        <Heading type={EHeadingType.H6}>Heading 6</Heading>
        <Text type={ETextType.Body}>Body</Text>
        <Text type={ETextType.Caption}>Caption</Text>
        <Text type={ETextType.Label}>Label</Text>
      </div>
    </ThemeProvider>
  );
});
