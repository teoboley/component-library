import path from 'path';

export default {
  title: 'Crash Test Component Library',
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
  // This builds a menu like the image below.
  // Also keep in mind this is COMPLETELY optional, but allows you to have more control over how the menu is laid out.
  // menu: [
  //   'Home',
  //   {
  //     name: 'Components',
  //     menu: [
  //       'Checkbox',
  //       'Checkbox List',
  //       'Employee Image',
  //       'Input',
  //       'Progress Bar',
  //       'Radio Button',
  //       'Radio Button List',
  //       'Select',
  //       'Text Block',
  //       'Textarea',
  //     ],
  //   },
  // ],
};