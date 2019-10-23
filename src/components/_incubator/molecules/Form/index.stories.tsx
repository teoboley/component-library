import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { css } from 'emotion';

import Card from '../../../atoms/Card';
import Form from './index';

storiesOf('_Incubating/Molecules/Form', module).add('Incubator/Default', () => {
  return (
    <Card>
      <Form
        schema={{
          description: 'A simple form example.',
          title: 'A registration form',
          type: 'object',
          required: ['firstName', 'lastName'],
          properties: {
            firstName: {
              title: 'First name',
              type: 'string',
              default: 'Chuck'
            },
            lastName: {
              title: 'Last name',
              type: 'string'
            },
            isCool: {
              title: 'Is a cool person',
              type: 'boolean'
            },
            isFresh: {
              title: 'Is a fresh person',
              type: 'boolean'
            },
            multipleChoicesList: {
              title: 'A multiple choices list',
              type: 'array',
              items: {
                enum: ['foo', 'bar', 'fuzz', 'qux'],
                type: 'string'
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
