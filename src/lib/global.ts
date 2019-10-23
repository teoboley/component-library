// material-ui-styles
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
const Global: any =
  typeof window !== 'undefined' && (window as any).Math === Math
    ? window
    : typeof self !== 'undefined' && (self as any).Math === Math
    ? self
    : Function('return this')();

export default Global;
