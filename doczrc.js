import path from 'path';

export default {
  title: 'Crash Test Components',
  description: 'A component library for building robust, beautiful user interfaces.',
  src: './src',
  dest: './docs/generated',
  typescript: true,
  themeConfig: {
    showPlaygroundEditor: true,
  },
  theme: path.join(__dirname, './docs/theme'),
  htmlContext: {
    head: {
      links: [{
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600'
      }]
    }
  }
};