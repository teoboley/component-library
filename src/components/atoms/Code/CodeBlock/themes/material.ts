import { css } from 'emotion';

// language=CSS
export default css`
  /*

    Name:       material
    Author:     Michael Kaminsky (http://github.com/mkaminsky11)

    Original material color scheme by Mattia Astorino (https://github.com/equinusocio/material-theme)

*/

  .cm-s-material.CodeMirror {
    background-color: #263238;
    color: rgba(233, 237, 237, 1);
  }
  .cm-s-material .CodeMirror-gutters {
    background: #263238;
    color: rgb(83, 127, 126);
    border: none;
  }
  .cm-s-material .CodeMirror-guttermarker,
  .cm-s-material .CodeMirror-guttermarker-subtle,
  .cm-s-material .CodeMirror-linenumber {
    color: rgb(83, 127, 126);
  }
  .cm-s-material .CodeMirror-cursor {
    border-left: 1px solid #f8f8f0;
  }
  .cm-s-material div.CodeMirror-selected {
    background: rgba(255, 255, 255, 0.15);
  }
  .cm-s-material.CodeMirror-focused div.CodeMirror-selected {
    background: rgba(255, 255, 255, 0.1);
  }
  .cm-s-material .CodeMirror-line::selection,
  .cm-s-material .CodeMirror-line > span::selection,
  .cm-s-material .CodeMirror-line > span > span::selection {
    background: rgba(255, 255, 255, 0.1);
  }
  .cm-s-material .CodeMirror-line::-moz-selection,
  .cm-s-material .CodeMirror-line > span::-moz-selection,
  .cm-s-material .CodeMirror-line > span > span::-moz-selection {
    background: rgba(255, 255, 255, 0.1);
  }

  .cm-s-material .CodeMirror-activeline-background {
    background: rgba(0, 0, 0, 0);
  }
  .cm-s-material .cm-keyword {
    color: rgba(199, 146, 234, 1);
  }
  .cm-s-material .cm-operator {
    color: rgba(233, 237, 237, 1);
  }
  .cm-s-material .cm-variable-2 {
    color: #80cbc4;
  }
  .cm-s-material .cm-variable-3,
  .cm-s-material .cm-type {
    color: #82b1ff;
  }
  .cm-s-material .cm-builtin {
    color: #decb6b;
  }
  .cm-s-material .cm-atom {
    color: #f77669;
  }
  .cm-s-material .cm-number {
    color: #f77669;
  }
  .cm-s-material .cm-def {
    color: rgba(233, 237, 237, 1);
  }
  .cm-s-material .cm-string {
    color: #c3e88d;
  }
  .cm-s-material .cm-string-2 {
    color: #80cbc4;
  }
  .cm-s-material .cm-comment {
    color: #546e7a;
  }
  .cm-s-material .cm-variable {
    color: #82b1ff;
  }
  .cm-s-material .cm-tag {
    color: #80cbc4;
  }
  .cm-s-material .cm-meta {
    color: #80cbc4;
  }
  .cm-s-material .cm-attribute {
    color: #ffcb6b;
  }
  .cm-s-material .cm-property {
    color: #80cbae;
  }
  .cm-s-material .cm-qualifier {
    color: #decb6b;
  }
  .cm-s-material .cm-variable-3,
  .cm-s-material .cm-type {
    color: #decb6b;
  }
  .cm-s-material .cm-tag {
    color: rgba(255, 83, 112, 1);
  }
  .cm-s-material .cm-error {
    color: rgba(255, 255, 255, 1);
    background-color: #ec5f67;
  }
  .cm-s-material .CodeMirror-matchingbracket {
    text-decoration: underline;
    color: white !important;
  }
`;
