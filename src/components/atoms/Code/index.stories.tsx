import * as React from 'react';
import { storiesOf } from '@storybook/react';

import CodeBlock from '.';
import Text, { ETextType } from '../Typography/Text';

storiesOf('Code Block', module)
  .add('Editable', () => {
    return (
      <div style={{ padding: 50 }}>
        <div style={{ marginBottom: 10 }}>
          <Text type={ETextType.Body}>
            This is body text with some code:{' '}
            <CodeBlock value={'echo "Hello World"'} mode={'text/x-sh'} inline editable />, it's pretty sweet.
          </Text>
        </div>
        <CodeBlock
          value={
            '// Code\nfunction findSequence(goal) {\n  function find(start, history) {\n    if (start == goal)\n      return history;\n    else if (start > goal)\n      return null;\n    else\n      return find(start + 5, "(" + history + " + 5)") ||\n             find(start * 3, "(" + history + " * 3)");\n  }\n  return find(1, "1");\n}'
          }
          mode={'text/typescript'}
          editable
        />
      </div>
    );
  })
  .add('Readonly', () => {
    return (
      <div style={{ padding: 50 }}>
        <div style={{ marginBottom: 10 }}>
          <Text type={ETextType.Body}>
            This is body text with some code:{' '}
            <CodeBlock value={'echo "Hello World"'} mode={'text/x-sh'} inline controlled />, it's
            pretty sweet.
          </Text>
        </div>
        <CodeBlock
          value={
            '// Code\nfunction findSequence(goal) {\n  function find(start, history) {\n    if (start == goal)\n      return history;\n    else if (start > goal)\n      return null;\n    else\n      return find(start + 5, "(" + history + " + 5)") ||\n             find(start * 3, "(" + history + " * 3)");\n  }\n  return find(1, "1");\n}'
          }
          mode={'text/typescript'}
          controlled
        />
      </div>
    );
  });
