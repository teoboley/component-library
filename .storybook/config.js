import { configure, addParameters } from '@storybook/react';

addParameters({
  options: {
    theme: {
      appBg: 'white',
      appContentBg: '#EEEEEE'
    },
  },
});

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.(js|jsx|ts|tsx)$/);
function loadStories() {
  req.keys().sort().forEach(filename => req(filename));
}

configure(loadStories, module);
