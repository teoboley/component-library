import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { css } from 'emotion';

import Card from '../../../atoms/Card';
import Form from './index';

storiesOf('Form', module).add('Incubator/Default', () => {
  return (
    <Card>
      <Form
        schema={{
          title: 'A registration form',
          description: 'A simple form example.',
          type: 'object',
          required: ['firstName', 'lastName'],
          properties: {
            firstName: {
              type: 'string',
              title: 'First name',
              default: 'Chuck'
            },
            lastName: {
              type: 'string',
              title: 'Last name'
            },
            isCool: {
              type: 'boolean',
              title: 'Is a cool person'
            },
            isFresh: {
              type: 'boolean',
              title: 'Is a fresh person'
            },
            multipleChoicesList: {
              type: 'array',
              title: 'A multiple choices list',
              items: {
                type: 'string',
                enum: ['foo', 'bar', 'fuzz', 'qux']
              },
              uniqueItems: true
            },
            age: {
              type: 'integer',
              title: 'Age'
            },
            bio: {
              type: 'string',
              title: 'Bio'
            },
            password: {
              type: 'string',
              title: 'Password',
              minLength: 3
            },
            telephone: {
              type: 'string',
              title: 'Telephone',
              minLength: 10
            }
          }
        }}
        className={css({
          marginRight: 50
        })}
      />
    </Card>
  );
});
