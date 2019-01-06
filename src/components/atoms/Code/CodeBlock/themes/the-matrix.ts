import { css } from 'emotion';

// language=CSS
export default css`
  .cm-s-the-matrix.CodeMirror {
    background: #000000;
    color: #00ff00;
  }
  .cm-s-the-matrix div.CodeMirror-selected {
    background: #2d2d2d;
  }
  .cm-s-the-matrix .CodeMirror-line::selection,
  .cm-s-the-matrix .CodeMirror-line > span::selection,
  .cm-s-the-matrix .CodeMirror-line > span > span::selection {
    background: rgba(45, 45, 45, 0.99);
  }
  .cm-s-the-matrix .CodeMirror-line::-moz-selection,
  .cm-s-the-matrix .CodeMirror-line > span::-moz-selection,
  .cm-s-the-matrix .CodeMirror-line > span > span::-moz-selection {
    background: rgba(45, 45, 45, 0.99);
  }
  .cm-s-the-matrix .CodeMirror-gutters {
    background: #060;
    border-right: 2px solid #00ff00;
  }
  .cm-s-the-matrix .CodeMirror-guttermarker {
    color: #0f0;
  }
  .cm-s-the-matrix .CodeMirror-guttermarker-subtle {
    color: white;
  }
  .cm-s-the-matrix .CodeMirror-linenumber {
    color: #ffffff;
  }
  .cm-s-the-matrix .CodeMirror-cursor {
    border-left: 1px solid #00ff00;
  }

  .cm-s-the-matrix span.cm-keyword {
    color: #008803;
    font-weight: bold;
  }
  .cm-s-the-matrix span.cm-atom {
    color: #3ff;
  }
  .cm-s-the-matrix span.cm-number {
    color: #ffb94f;
  }
  .cm-s-the-matrix span.cm-def {
    color: #99c;
  }
  .cm-s-the-matrix span.cm-variable {
    color: #f6c;
  }
  .cm-s-the-matrix span.cm-variable-2 {
    color: #c6f;
  }
  .cm-s-the-matrix span.cm-variable-3,
  .cm-s-the-matrix span.cm-type {
    color: #96f;
  }
  .cm-s-the-matrix span.cm-property {
    color: #62ffa0;
  }
  .cm-s-the-matrix span.cm-operator {
    color: #999;
  }
  .cm-s-the-matrix span.cm-comment {
    color: #cccccc;
  }
  .cm-s-the-matrix span.cm-string {
    color: #39c;
  }
  .cm-s-the-matrix span.cm-meta {
    color: #c9f;
  }
  .cm-s-the-matrix span.cm-qualifier {
    color: #fff700;
  }
  .cm-s-the-matrix span.cm-builtin {
    color: #30a;
  }
  .cm-s-the-matrix span.cm-bracket {
    color: #cc7;
  }
  .cm-s-the-matrix span.cm-tag {
    color: #ffbd40;
  }
  .cm-s-the-matrix span.cm-attribute {
    color: #fff700;
  }
  .cm-s-the-matrix span.cm-error {
    color: #ff0000;
  }

  .cm-s-the-matrix .CodeMirror-activeline-background {
    background: #040;
  }
`;
