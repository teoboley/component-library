import { css } from 'emotion';

// language=CSS
export default css`
  /*

    Name:       Tomorrow Night - Eighties
    Author:     Chris Kempson

    CodeMirror template by Jan T. Sott (https://github.com/idleberg/base16-codemirror)
    Original Base16 color scheme by Chris Kempson (https://github.com/chriskempson/base16)

*/

  .cm-s-tomorrow-night-eighties.CodeMirror {
    background: #000000;
    color: #cccccc;
  }
  .cm-s-tomorrow-night-eighties div.CodeMirror-selected {
    background: #2d2d2d;
  }
  .cm-s-tomorrow-night-eighties .CodeMirror-line::selection,
  .cm-s-tomorrow-night-eighties .CodeMirror-line > span::selection,
  .cm-s-tomorrow-night-eighties .CodeMirror-line > span > span::selection {
    background: rgba(45, 45, 45, 0.99);
  }
  .cm-s-tomorrow-night-eighties .CodeMirror-line::-moz-selection,
  .cm-s-tomorrow-night-eighties .CodeMirror-line > span::-moz-selection,
  .cm-s-tomorrow-night-eighties .CodeMirror-line > span > span::-moz-selection {
    background: rgba(45, 45, 45, 0.99);
  }
  .cm-s-tomorrow-night-eighties .CodeMirror-gutters {
    background: #000000;
    border-right: 0px;
  }
  .cm-s-tomorrow-night-eighties .CodeMirror-guttermarker {
    color: #f2777a;
  }
  .cm-s-tomorrow-night-eighties .CodeMirror-guttermarker-subtle {
    color: #777;
  }
  .cm-s-tomorrow-night-eighties .CodeMirror-linenumber {
    color: #515151;
  }
  .cm-s-tomorrow-night-eighties .CodeMirror-cursor {
    border-left: 1px solid #6a6a6a;
  }

  .cm-s-tomorrow-night-eighties span.cm-comment {
    color: #d27b53;
  }
  .cm-s-tomorrow-night-eighties span.cm-atom {
    color: #a16a94;
  }
  .cm-s-tomorrow-night-eighties span.cm-number {
    color: #a16a94;
  }

  .cm-s-tomorrow-night-eighties span.cm-property,
  .cm-s-tomorrow-night-eighties span.cm-attribute {
    color: #99cc99;
  }
  .cm-s-tomorrow-night-eighties span.cm-keyword {
    color: #f2777a;
  }
  .cm-s-tomorrow-night-eighties span.cm-string {
    color: #ffcc66;
  }

  .cm-s-tomorrow-night-eighties span.cm-variable {
    color: #99cc99;
  }
  .cm-s-tomorrow-night-eighties span.cm-variable-2 {
    color: #6699cc;
  }
  .cm-s-tomorrow-night-eighties span.cm-def {
    color: #f99157;
  }
  .cm-s-tomorrow-night-eighties span.cm-bracket {
    color: #cccccc;
  }
  .cm-s-tomorrow-night-eighties span.cm-tag {
    color: #f2777a;
  }
  .cm-s-tomorrow-night-eighties span.cm-link {
    color: #a16a94;
  }
  .cm-s-tomorrow-night-eighties span.cm-error {
    background: #f2777a;
    color: #6a6a6a;
  }

  .cm-s-tomorrow-night-eighties .CodeMirror-activeline-background {
    background: #343600;
  }
  .cm-s-tomorrow-night-eighties .CodeMirror-matchingbracket {
    text-decoration: underline;
    color: white !important;
  }
`;
