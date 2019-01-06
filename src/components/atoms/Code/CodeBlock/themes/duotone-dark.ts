import { css } from 'emotion';

// language=CSS
export default css`
  /*
Name:   DuoTone-Dark
Author: by Bram de Haan, adapted from DuoTone themes by Simurai (http://simurai.com/projects/2016/01/01/duotone-themes)

CodeMirror template by Jan T. Sott (https://github.com/idleberg), adapted by Bram de Haan (https://github.com/atelierbram/)
*/

  .cm-s-duotone-dark.CodeMirror {
    background: #2a2734;
    color: #6c6783;
  }
  .cm-s-duotone-dark div.CodeMirror-selected {
    background: #545167 !important;
  }
  .cm-s-duotone-dark .CodeMirror-gutters {
    background: #2a2734;
    border-right: 0px;
  }
  .cm-s-duotone-dark .CodeMirror-linenumber {
    color: #545167;
  }

  /* begin cursor */
  .cm-s-duotone-dark .CodeMirror-cursor {
    border-left: 1px solid #ffad5c; /* border-left: 1px solid #ffad5c80; */
    border-right: 0.5em solid #ffad5c; /* border-right: .5em solid #ffad5c80; */
    opacity: 0.5;
  }
  .cm-s-duotone-dark .CodeMirror-activeline-background {
    background: #363342; /* background: #36334280;  */
    opacity: 0.5;
  }
  .cm-s-duotone-dark .cm-fat-cursor .CodeMirror-cursor {
    background: #ffad5c; /* background: #ffad5c80; */
    opacity: 0.5;
  }
  /* end cursor */

  .cm-s-duotone-dark span.cm-atom,
  .cm-s-duotone-dark span.cm-number,
  .cm-s-duotone-dark span.cm-keyword,
  .cm-s-duotone-dark span.cm-variable,
  .cm-s-duotone-dark span.cm-attribute,
  .cm-s-duotone-dark span.cm-quote,
  .cm-s-duotone-dark span.cm-hr,
  .cm-s-duotone-dark span.cm-link {
    color: #ffcc99;
  }

  .cm-s-duotone-dark span.cm-property {
    color: #9a86fd;
  }
  .cm-s-duotone-dark span.cm-punctuation,
  .cm-s-duotone-dark span.cm-unit,
  .cm-s-duotone-dark span.cm-negative {
    color: #e09142;
  }
  .cm-s-duotone-dark span.cm-string {
    color: #ffb870;
  }
  .cm-s-duotone-dark span.cm-operator {
    color: #ffad5c;
  }
  .cm-s-duotone-dark span.cm-positive {
    color: #6a51e6;
  }

  .cm-s-duotone-dark span.cm-variable-2,
  .cm-s-duotone-dark span.cm-variable-3,
  .cm-s-duotone-dark span.cm-type,
  .cm-s-duotone-dark span.cm-string-2,
  .cm-s-duotone-dark span.cm-url {
    color: #7a63ee;
  }
  .cm-s-duotone-dark span.cm-def,
  .cm-s-duotone-dark span.cm-tag,
  .cm-s-duotone-dark span.cm-builtin,
  .cm-s-duotone-dark span.cm-qualifier,
  .cm-s-duotone-dark span.cm-header,
  .cm-s-duotone-dark span.cm-em {
    color: #eeebff;
  }
  .cm-s-duotone-dark span.cm-bracket,
  .cm-s-duotone-dark span.cm-comment {
    color: #6c6783;
  }

  /* using #f00 red for errors, don't think any of the colorscheme variables will stand out enough, ... maybe by giving it a background-color ... */
  .cm-s-duotone-dark span.cm-error,
  .cm-s-duotone-dark span.cm-invalidchar {
    color: #f00;
  }

  .cm-s-duotone-dark span.cm-header {
    font-weight: normal;
  }
  .cm-s-duotone-dark .CodeMirror-matchingbracket {
    text-decoration: underline;
    color: #eeebff !important;
  }
`;
