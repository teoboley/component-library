import { css } from 'emotion';

// language=CSS
export default css`
  /*

    Name:       Hopscotch
    Author:     Jan T. Sott

    CodeMirror template by Jan T. Sott (https://github.com/idleberg/base16-codemirror)
    Original Base16 color scheme by Chris Kempson (https://github.com/chriskempson/base16)

*/

  .cm-s-hopscotch.CodeMirror {
    background: #322931;
    color: #d5d3d5;
  }
  .cm-s-hopscotch div.CodeMirror-selected {
    background: #433b42 !important;
  }
  .cm-s-hopscotch .CodeMirror-gutters {
    background: #322931;
    border-right: 0px;
  }
  .cm-s-hopscotch .CodeMirror-linenumber {
    color: #797379;
  }
  .cm-s-hopscotch .CodeMirror-cursor {
    border-left: 1px solid #989498 !important;
  }

  .cm-s-hopscotch span.cm-comment {
    color: #b33508;
  }
  .cm-s-hopscotch span.cm-atom {
    color: #c85e7c;
  }
  .cm-s-hopscotch span.cm-number {
    color: #c85e7c;
  }

  .cm-s-hopscotch span.cm-property,
  .cm-s-hopscotch span.cm-attribute {
    color: #8fc13e;
  }
  .cm-s-hopscotch span.cm-keyword {
    color: #dd464c;
  }
  .cm-s-hopscotch span.cm-string {
    color: #fdcc59;
  }

  .cm-s-hopscotch span.cm-variable {
    color: #8fc13e;
  }
  .cm-s-hopscotch span.cm-variable-2 {
    color: #1290bf;
  }
  .cm-s-hopscotch span.cm-def {
    color: #fd8b19;
  }
  .cm-s-hopscotch span.cm-error {
    background: #dd464c;
    color: #989498;
  }
  .cm-s-hopscotch span.cm-bracket {
    color: #d5d3d5;
  }
  .cm-s-hopscotch span.cm-tag {
    color: #dd464c;
  }
  .cm-s-hopscotch span.cm-link {
    color: #c85e7c;
  }

  .cm-s-hopscotch .CodeMirror-matchingbracket {
    text-decoration: underline;
    color: white !important;
  }
  .cm-s-hopscotch .CodeMirror-activeline-background {
    background: #302020;
  }
`;
