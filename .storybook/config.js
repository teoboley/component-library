import { configure, addDecorator } from '@storybook/react';
import { withBackgrounds } from '@storybook/addon-backgrounds';

addDecorator(
  withBackgrounds([
    { name: 'lightgrey', value: 'lightgrey', default: true },
    { name: 'twitter', value: '#00aced' },
    { name: 'facebook', value: '#3b5998' },
  ])
);

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.(js|jsx|ts|tsx)$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
