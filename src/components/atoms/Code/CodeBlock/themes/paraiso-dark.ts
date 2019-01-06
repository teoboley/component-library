import { css } from 'emotion';

// language=CSS
export default css`
  /*

    Name:       Paraíso (Dark)
    Author:     Jan T. Sott

    Color scheme by Jan T. Sott (https://github.com/idleberg/Paraiso-CodeMirror)
    Inspired by the art of Rubens LP (http://www.rubenslp.com.br)

*/

  .cm-s-paraiso-dark.CodeMirror {
    background: #2f1e2e;
    color: #b9b6b0;
  }
  .cm-s-paraiso-dark div.CodeMirror-selected {
    background: #41323f;
  }
  .cm-s-paraiso-dark .CodeMirror-line::selection,
  .cm-s-paraiso-dark .CodeMirror-line > span::selection,
  .cm-s-paraiso-dark .CodeMirror-line > span > span::selection {
    background: rgba(65, 50, 63, 0.99);
  }
  .cm-s-paraiso-dark .CodeMirror-line::-moz-selection,
  .cm-s-paraiso-dark .CodeMirror-line > span::-moz-selection,
  .cm-s-paraiso-dark .CodeMirror-line > span > span::-moz-selection {
    background: rgba(65, 50, 63, 0.99);
  }
  .cm-s-paraiso-dark .CodeMirror-gutters {
    background: #2f1e2e;
    border-right: 0px;
  }
  .cm-s-paraiso-dark .CodeMirror-guttermarker {
    color: #ef6155;
  }
  .cm-s-paraiso-dark .CodeMirror-guttermarker-subtle {
    color: #776e71;
  }
  .cm-s-paraiso-dark .CodeMirror-linenumber {
    color: #776e71;
  }
  .cm-s-paraiso-dark .CodeMirror-cursor {
    border-left: 1px solid #8d8687;
  }

  .cm-s-paraiso-dark span.cm-comment {
    color: #e96ba8;
  }
  .cm-s-paraiso-dark span.cm-atom {
    color: #815ba4;
  }
  .cm-s-paraiso-dark span.cm-number {
    color: #815ba4;
  }

  .cm-s-paraiso-dark span.cm-property,
  .cm-s-paraiso-dark span.cm-attribute {
    color: #48b685;
  }
  .cm-s-paraiso-dark span.cm-keyword {
    color: #ef6155;
  }
  .cm-s-paraiso-dark span.cm-string {
    color: #fec418;
  }

  .cm-s-paraiso-dark span.cm-variable {
    color: #48b685;
  }
  .cm-s-paraiso-dark span.cm-variable-2 {
    color: #06b6ef;
  }
  .cm-s-paraiso-dark span.cm-def {
    color: #f99b15;
  }
  .cm-s-paraiso-dark span.cm-bracket {
    color: #b9b6b0;
  }
  .cm-s-paraiso-dark span.cm-tag {
    color: #ef6155;
  }
  .cm-s-paraiso-dark span.cm-link {
    color: #815ba4;
  }
  .cm-s-paraiso-dark span.cm-error {
    background: #ef6155;
    color: #8d8687;
  }

  .cm-s-paraiso-dark .CodeMirror-activeline-background {
    background: #4d344a;
  }
  .cm-s-paraiso-dark .CodeMirror-matchingbracket {
    text-decoration: underline;
    color: white !important;
  }
`;
