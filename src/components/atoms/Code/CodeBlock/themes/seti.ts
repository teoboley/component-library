import { css } from 'emotion';

// language=CSS
export default css`
  /*

    Name:       seti
    Author:     Michael Kaminsky (http://github.com/mkaminsky11)

    Original seti color scheme by Jesse Weed (https://github.com/jesseweed/seti-syntax)

*/

  .cm-s-seti.CodeMirror {
    background-color: #151718 !important;
    color: #cfd2d1 !important;
    border: none;
  }
  .cm-s-seti .CodeMirror-gutters {
    color: #404b53;
    background-color: #0e1112;
    border: none;
  }
  .cm-s-seti .CodeMirror-cursor {
    border-left: solid thin #f8f8f0;
  }
  .cm-s-seti .CodeMirror-linenumber {
    color: #6d8a88;
  }
  .cm-s-seti.CodeMirror-focused div.CodeMirror-selected {
    background: rgba(255, 255, 255, 0.1);
  }
  .cm-s-seti .CodeMirror-line::selection,
  .cm-s-seti .CodeMirror-line > span::selection,
  .cm-s-seti .CodeMirror-line > span > span::selection {
    background: rgba(255, 255, 255, 0.1);
  }
  .cm-s-seti .CodeMirror-line::-moz-selection,
  .cm-s-seti .CodeMirror-line > span::-moz-selection,
  .cm-s-seti .CodeMirror-line > span > span::-moz-selection {
    background: rgba(255, 255, 255, 0.1);
  }
  .cm-s-seti span.cm-comment {
    color: #41535b;
  }
  .cm-s-seti span.cm-string,
  .cm-s-seti span.cm-string-2 {
    color: #55b5db;
  }
  .cm-s-seti span.cm-number {
    color: #cd3f45;
  }
  .cm-s-seti span.cm-variable {
    color: #55b5db;
  }
  .cm-s-seti span.cm-variable-2 {
    color: #a074c4;
  }
  .cm-s-seti span.cm-def {
    color: #55b5db;
  }
  .cm-s-seti span.cm-keyword {
    color: #ff79c6;
  }
  .cm-s-seti span.cm-operator {
    color: #9fca56;
  }
  .cm-s-seti span.cm-keyword {
    color: #e6cd69;
  }
  .cm-s-seti span.cm-atom {
    color: #cd3f45;
  }
  .cm-s-seti span.cm-meta {
    color: #55b5db;
  }
  .cm-s-seti span.cm-tag {
    color: #55b5db;
  }
  .cm-s-seti span.cm-attribute {
    color: #9fca56;
  }
  .cm-s-seti span.cm-qualifier {
    color: #9fca56;
  }
  .cm-s-seti span.cm-property {
    color: #a074c4;
  }
  .cm-s-seti span.cm-variable-3,
  .cm-s-seti span.cm-type {
    color: #9fca56;
  }
  .cm-s-seti span.cm-builtin {
    color: #9fca56;
  }
  .cm-s-seti .CodeMirror-activeline-background {
    background: #101213;
  }
  .cm-s-seti .CodeMirror-matchingbracket {
    text-decoration: underline;
    color: white !important;
  }
`;
