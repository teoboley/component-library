import { css } from 'emotion';

// language=CSS
export default css`
  /*
Name:   DuoTone-Light
Author: by Bram de Haan, adapted from DuoTone themes by Simurai (http://simurai.com/projects/2016/01/01/duotone-themes)

CodeMirror template by Jan T. Sott (https://github.com/idleberg), adapted by Bram de Haan (https://github.com/atelierbram/)
*/

  .cm-s-duotone-light.CodeMirror {
    background: #faf8f5;
    color: #b29762;
  }
  .cm-s-duotone-light div.CodeMirror-selected {
    background: #e3dcce !important;
  }
  .cm-s-duotone-light .CodeMirror-gutters {
    background: #faf8f5;
    border-right: 0px;
  }
  .cm-s-duotone-light .CodeMirror-linenumber {
    color: #cdc4b1;
  }

  /* begin cursor */
  .cm-s-duotone-light .CodeMirror-cursor {
    border-left: 1px solid #93abdc; /* border-left: 1px solid #93abdc80; */
    border-right: 0.5em solid #93abdc; /* border-right: .5em solid #93abdc80; */
    opacity: 0.5;
  }
  .cm-s-duotone-light .CodeMirror-activeline-background {
    background: #e3dcce; /* background: #e3dcce80; */
    opacity: 0.5;
  }
  .cm-s-duotone-light .cm-fat-cursor .CodeMirror-cursor {
    background: #93abdc; /* #93abdc80; */
    opacity: 0.5;
  }
  /* end cursor */

  .cm-s-duotone-light span.cm-atom,
  .cm-s-duotone-light span.cm-number,
  .cm-s-duotone-light span.cm-keyword,
  .cm-s-duotone-light span.cm-variable,
  .cm-s-duotone-light span.cm-attribute,
  .cm-s-duotone-light span.cm-quote,
  .cm-s-duotone-light-light span.cm-hr,
  .cm-s-duotone-light-light span.cm-link {
    color: #063289;
  }

  .cm-s-duotone-light span.cm-property {
    color: #b29762;
  }
  .cm-s-duotone-light span.cm-punctuation,
  .cm-s-duotone-light span.cm-unit,
  .cm-s-duotone-light span.cm-negative {
    color: #063289;
  }
  .cm-s-duotone-light span.cm-string,
  .cm-s-duotone-light span.cm-operator {
    color: #1659df;
  }
  .cm-s-duotone-light span.cm-positive {
    color: #896724;
  }

  .cm-s-duotone-light span.cm-variable-2,
  .cm-s-duotone-light span.cm-variable-3,
  .cm-s-duotone-light span.cm-type,
  .cm-s-duotone-light span.cm-string-2,
  .cm-s-duotone-light span.cm-url {
    color: #896724;
  }
  .cm-s-duotone-light span.cm-def,
  .cm-s-duotone-light span.cm-tag,
  .cm-s-duotone-light span.cm-builtin,
  .cm-s-duotone-light span.cm-qualifier,
  .cm-s-duotone-light span.cm-header,
  .cm-s-duotone-light span.cm-em {
    color: #2d2006;
  }
  .cm-s-duotone-light span.cm-bracket,
  .cm-s-duotone-light span.cm-comment {
    color: #b6ad9a;
  }

  /* using #f00 red for errors, don't think any of the colorscheme variables will stand out enough, ... maybe by giving it a background-color ... */
  /* .cm-s-duotone-light span.cm-error { background: #896724; color: #728fcb; } */
  .cm-s-duotone-light span.cm-error,
  .cm-s-duotone-light span.cm-invalidchar {
    color: #f00;
  }

  .cm-s-duotone-light span.cm-header {
    font-weight: normal;
  }
  .cm-s-duotone-light .CodeMirror-matchingbracket {
    text-decoration: underline;
    color: #faf8f5 !important;
  }
`;
