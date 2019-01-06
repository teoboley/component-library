import { css } from 'emotion';

// language=CSS
export default css`
  /*

    Name:       dracula
    Author:     Michael Kaminsky (http://github.com/mkaminsky11)

    Original dracula color scheme by Zeno Rocha (https://github.com/zenorocha/dracula-theme)

*/

  .cm-s-dracula.CodeMirror,
  .cm-s-dracula .CodeMirror-gutters {
    background-color: #282a36 !important;
    color: #f8f8f2 !important;
    border: none;
  }
  .cm-s-dracula .CodeMirror-gutters {
    color: #282a36;
  }
  .cm-s-dracula .CodeMirror-cursor {
    border-left: solid thin #f8f8f0;
  }
  .cm-s-dracula .CodeMirror-linenumber {
    color: #6d8a88;
  }
  .cm-s-dracula .CodeMirror-selected {
    background: rgba(255, 255, 255, 0.1);
  }
  .cm-s-dracula .CodeMirror-line::selection,
  .cm-s-dracula .CodeMirror-line > span::selection,
  .cm-s-dracula .CodeMirror-line > span > span::selection {
    background: rgba(255, 255, 255, 0.1);
  }
  .cm-s-dracula .CodeMirror-line::-moz-selection,
  .cm-s-dracula .CodeMirror-line > span::-moz-selection,
  .cm-s-dracula .CodeMirror-line > span > span::-moz-selection {
    background: rgba(255, 255, 255, 0.1);
  }
  .cm-s-dracula span.cm-comment {
    color: #6272a4;
  }
  .cm-s-dracula span.cm-string,
  .cm-s-dracula span.cm-string-2 {
    color: #f1fa8c;
  }
  .cm-s-dracula span.cm-number {
    color: #bd93f9;
  }
  .cm-s-dracula span.cm-variable {
    color: #50fa7b;
  }
  .cm-s-dracula span.cm-variable-2 {
    color: white;
  }
  .cm-s-dracula span.cm-def {
    color: #50fa7b;
  }
  .cm-s-dracula span.cm-operator {
    color: #ff79c6;
  }
  .cm-s-dracula span.cm-keyword {
    color: #ff79c6;
  }
  .cm-s-dracula span.cm-atom {
    color: #bd93f9;
  }
  .cm-s-dracula span.cm-meta {
    color: #f8f8f2;
  }
  .cm-s-dracula span.cm-tag {
    color: #ff79c6;
  }
  .cm-s-dracula span.cm-attribute {
    color: #50fa7b;
  }
  .cm-s-dracula span.cm-qualifier {
    color: #50fa7b;
  }
  .cm-s-dracula span.cm-property {
    color: #66d9ef;
  }
  .cm-s-dracula span.cm-builtin {
    color: #50fa7b;
  }
  .cm-s-dracula span.cm-variable-3,
  .cm-s-dracula span.cm-type {
    color: #ffb86c;
  }

  .cm-s-dracula .CodeMirror-activeline-background {
    background: rgba(255, 255, 255, 0.1);
  }
  .cm-s-dracula .CodeMirror-matchingbracket {
    text-decoration: underline;
    color: white !important;
  }
`;
