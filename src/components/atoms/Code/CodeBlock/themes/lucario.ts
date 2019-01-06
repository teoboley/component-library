import { css } from 'emotion';

// language=CSS
export default css`
  /*
  Name:       lucario
  Author:     Raphael Amorim

  Original Lucario color scheme (https://github.com/raphamorim/lucario)
*/

  .cm-s-lucario.CodeMirror,
  .cm-s-lucario .CodeMirror-gutters {
    background-color: #2b3e50 !important;
    color: #f8f8f2 !important;
    border: none;
  }
  .cm-s-lucario .CodeMirror-gutters {
    color: #2b3e50;
  }
  .cm-s-lucario .CodeMirror-cursor {
    border-left: solid thin #e6c845;
  }
  .cm-s-lucario .CodeMirror-linenumber {
    color: #f8f8f2;
  }
  .cm-s-lucario .CodeMirror-selected {
    background: #243443;
  }
  .cm-s-lucario .CodeMirror-line::selection,
  .cm-s-lucario .CodeMirror-line > span::selection,
  .cm-s-lucario .CodeMirror-line > span > span::selection {
    background: #243443;
  }
  .cm-s-lucario .CodeMirror-line::-moz-selection,
  .cm-s-lucario .CodeMirror-line > span::-moz-selection,
  .cm-s-lucario .CodeMirror-line > span > span::-moz-selection {
    background: #243443;
  }
  .cm-s-lucario span.cm-comment {
    color: #5c98cd;
  }
  .cm-s-lucario span.cm-string,
  .cm-s-lucario span.cm-string-2 {
    color: #e6db74;
  }
  .cm-s-lucario span.cm-number {
    color: #ca94ff;
  }
  .cm-s-lucario span.cm-variable {
    color: #f8f8f2;
  }
  .cm-s-lucario span.cm-variable-2 {
    color: #f8f8f2;
  }
  .cm-s-lucario span.cm-def {
    color: #72c05d;
  }
  .cm-s-lucario span.cm-operator {
    color: #66d9ef;
  }
  .cm-s-lucario span.cm-keyword {
    color: #ff6541;
  }
  .cm-s-lucario span.cm-atom {
    color: #bd93f9;
  }
  .cm-s-lucario span.cm-meta {
    color: #f8f8f2;
  }
  .cm-s-lucario span.cm-tag {
    color: #ff6541;
  }
  .cm-s-lucario span.cm-attribute {
    color: #66d9ef;
  }
  .cm-s-lucario span.cm-qualifier {
    color: #72c05d;
  }
  .cm-s-lucario span.cm-property {
    color: #f8f8f2;
  }
  .cm-s-lucario span.cm-builtin {
    color: #72c05d;
  }
  .cm-s-lucario span.cm-variable-3,
  .cm-s-lucario span.cm-type {
    color: #ffb86c;
  }

  .cm-s-lucario .CodeMirror-activeline-background {
    background: #243443;
  }
  .cm-s-lucario .CodeMirror-matchingbracket {
    text-decoration: underline;
    color: white !important;
  }
`;