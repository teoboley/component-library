import { css } from 'emotion';

// language=CSS
export default css`
  /*

    Name:       yeti
    Author:     Michael Kaminsky (http://github.com/mkaminsky11)

    Original yeti color scheme by Jesse Weed (https://github.com/jesseweed/yeti-syntax)

*/

  .cm-s-yeti.CodeMirror {
    background-color: #eceae8 !important;
    color: #d1c9c0 !important;
    border: none;
  }

  .cm-s-yeti .CodeMirror-gutters {
    color: #adaba6;
    background-color: #e5e1db;
    border: none;
  }
  .cm-s-yeti .CodeMirror-cursor {
    border-left: solid thin #d1c9c0;
  }
  .cm-s-yeti .CodeMirror-linenumber {
    color: #adaba6;
  }
  .cm-s-yeti.CodeMirror-focused div.CodeMirror-selected {
    background: #dcd8d2;
  }
  .cm-s-yeti .CodeMirror-line::selection,
  .cm-s-yeti .CodeMirror-line > span::selection,
  .cm-s-yeti .CodeMirror-line > span > span::selection {
    background: #dcd8d2;
  }
  .cm-s-yeti .CodeMirror-line::-moz-selection,
  .cm-s-yeti .CodeMirror-line > span::-moz-selection,
  .cm-s-yeti .CodeMirror-line > span > span::-moz-selection {
    background: #dcd8d2;
  }
  .cm-s-yeti span.cm-comment {
    color: #d4c8be;
  }
  .cm-s-yeti span.cm-string,
  .cm-s-yeti span.cm-string-2 {
    color: #96c0d8;
  }
  .cm-s-yeti span.cm-number {
    color: #a074c4;
  }
  .cm-s-yeti span.cm-variable {
    color: #55b5db;
  }
  .cm-s-yeti span.cm-variable-2 {
    color: #a074c4;
  }
  .cm-s-yeti span.cm-def {
    color: #55b5db;
  }
  .cm-s-yeti span.cm-operator {
    color: #9fb96e;
  }
  .cm-s-yeti span.cm-keyword {
    color: #9fb96e;
  }
  .cm-s-yeti span.cm-atom {
    color: #a074c4;
  }
  .cm-s-yeti span.cm-meta {
    color: #96c0d8;
  }
  .cm-s-yeti span.cm-tag {
    color: #96c0d8;
  }
  .cm-s-yeti span.cm-attribute {
    color: #9fb96e;
  }
  .cm-s-yeti span.cm-qualifier {
    color: #96c0d8;
  }
  .cm-s-yeti span.cm-property {
    color: #a074c4;
  }
  .cm-s-yeti span.cm-builtin {
    color: #a074c4;
  }
  .cm-s-yeti span.cm-variable-3,
  .cm-s-yeti span.cm-type {
    color: #96c0d8;
  }
  .cm-s-yeti .CodeMirror-activeline-background {
    background: #e7e4e0;
  }
  .cm-s-yeti .CodeMirror-matchingbracket {
    text-decoration: underline;
  }
`;