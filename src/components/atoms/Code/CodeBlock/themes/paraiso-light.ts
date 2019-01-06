import { css } from 'emotion';

// language=CSS
export default css`
  /*

    Name:       Paraíso (Light)
    Author:     Jan T. Sott

    Color scheme by Jan T. Sott (https://github.com/idleberg/Paraiso-CodeMirror)
    Inspired by the art of Rubens LP (http://www.rubenslp.com.br)

*/

  .cm-s-paraiso-light.CodeMirror {
    background: #e7e9db;
    color: #41323f;
  }
  .cm-s-paraiso-light div.CodeMirror-selected {
    background: #b9b6b0;
  }
  .cm-s-paraiso-light .CodeMirror-line::selection,
  .cm-s-paraiso-light .CodeMirror-line > span::selection,
  .cm-s-paraiso-light .CodeMirror-line > span > span::selection {
    background: #b9b6b0;
  }
  .cm-s-paraiso-light .CodeMirror-line::-moz-selection,
  .cm-s-paraiso-light .CodeMirror-line > span::-moz-selection,
  .cm-s-paraiso-light .CodeMirror-line > span > span::-moz-selection {
    background: #b9b6b0;
  }
  .cm-s-paraiso-light .CodeMirror-gutters {
    background: #e7e9db;
    border-right: 0px;
  }
  .cm-s-paraiso-light .CodeMirror-guttermarker {
    color: black;
  }
  .cm-s-paraiso-light .CodeMirror-guttermarker-subtle {
    color: #8d8687;
  }
  .cm-s-paraiso-light .CodeMirror-linenumber {
    color: #8d8687;
  }
  .cm-s-paraiso-light .CodeMirror-cursor {
    border-left: 1px solid #776e71;
  }

  .cm-s-paraiso-light span.cm-comment {
    color: #e96ba8;
  }
  .cm-s-paraiso-light span.cm-atom {
    color: #815ba4;
  }
  .cm-s-paraiso-light span.cm-number {
    color: #815ba4;
  }

  .cm-s-paraiso-light span.cm-property,
  .cm-s-paraiso-light span.cm-attribute {
    color: #48b685;
  }
  .cm-s-paraiso-light span.cm-keyword {
    color: #ef6155;
  }
  .cm-s-paraiso-light span.cm-string {
    color: #fec418;
  }

  .cm-s-paraiso-light span.cm-variable {
    color: #48b685;
  }
  .cm-s-paraiso-light span.cm-variable-2 {
    color: #06b6ef;
  }
  .cm-s-paraiso-light span.cm-def {
    color: #f99b15;
  }
  .cm-s-paraiso-light span.cm-bracket {
    color: #41323f;
  }
  .cm-s-paraiso-light span.cm-tag {
    color: #ef6155;
  }
  .cm-s-paraiso-light span.cm-link {
    color: #815ba4;
  }
  .cm-s-paraiso-light span.cm-error {
    background: #ef6155;
    color: #776e71;
  }

  .cm-s-paraiso-light .CodeMirror-activeline-background {
    background: #cfd1c4;
  }
  .cm-s-paraiso-light .CodeMirror-matchingbracket {
    text-decoration: underline;
    color: white !important;
  }
`;
