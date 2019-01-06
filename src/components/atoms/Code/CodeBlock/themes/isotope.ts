import { css } from 'emotion';

// language=CSS
export default css`
  /*

    Name:       Isotope
    Author:     David Desandro / Jan T. Sott

    CodeMirror template by Jan T. Sott (https://github.com/idleberg/base16-codemirror)
    Original Base16 color scheme by Chris Kempson (https://github.com/chriskempson/base16)

*/

  .cm-s-isotope.CodeMirror {
    background: #000000;
    color: #e0e0e0;
  }
  .cm-s-isotope div.CodeMirror-selected {
    background: #404040 !important;
  }
  .cm-s-isotope .CodeMirror-gutters {
    background: #000000;
    border-right: 0px;
  }
  .cm-s-isotope .CodeMirror-linenumber {
    color: #808080;
  }
  .cm-s-isotope .CodeMirror-cursor {
    border-left: 1px solid #c0c0c0 !important;
  }

  .cm-s-isotope span.cm-comment {
    color: #3300ff;
  }
  .cm-s-isotope span.cm-atom {
    color: #cc00ff;
  }
  .cm-s-isotope span.cm-number {
    color: #cc00ff;
  }

  .cm-s-isotope span.cm-property,
  .cm-s-isotope span.cm-attribute {
    color: #33ff00;
  }
  .cm-s-isotope span.cm-keyword {
    color: #ff0000;
  }
  .cm-s-isotope span.cm-string {
    color: #ff0099;
  }

  .cm-s-isotope span.cm-variable {
    color: #33ff00;
  }
  .cm-s-isotope span.cm-variable-2 {
    color: #0066ff;
  }
  .cm-s-isotope span.cm-def {
    color: #ff9900;
  }
  .cm-s-isotope span.cm-error {
    background: #ff0000;
    color: #c0c0c0;
  }
  .cm-s-isotope span.cm-bracket {
    color: #e0e0e0;
  }
  .cm-s-isotope span.cm-tag {
    color: #ff0000;
  }
  .cm-s-isotope span.cm-link {
    color: #cc00ff;
  }

  .cm-s-isotope .CodeMirror-matchingbracket {
    text-decoration: underline;
    color: white !important;
  }
  .cm-s-isotope .CodeMirror-activeline-background {
    background: #202020;
  }
`;
