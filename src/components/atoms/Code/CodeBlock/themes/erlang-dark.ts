import { css } from 'emotion';

// language=CSS
export default css`
  .cm-s-erlang-dark.CodeMirror {
    background: #002240;
    color: white;
  }
  .cm-s-erlang-dark div.CodeMirror-selected {
    background: #b36539;
  }
  .cm-s-erlang-dark .CodeMirror-line::selection,
  .cm-s-erlang-dark .CodeMirror-line > span::selection,
  .cm-s-erlang-dark .CodeMirror-line > span > span::selection {
    background: rgba(179, 101, 57, 0.99);
  }
  .cm-s-erlang-dark .CodeMirror-line::-moz-selection,
  .cm-s-erlang-dark .CodeMirror-line > span::-moz-selection,
  .cm-s-erlang-dark .CodeMirror-line > span > span::-moz-selection {
    background: rgba(179, 101, 57, 0.99);
  }
  .cm-s-erlang-dark .CodeMirror-gutters {
    background: #002240;
    border-right: 1px solid #aaa;
  }
  .cm-s-erlang-dark .CodeMirror-guttermarker {
    color: white;
  }
  .cm-s-erlang-dark .CodeMirror-guttermarker-subtle {
    color: #d0d0d0;
  }
  .cm-s-erlang-dark .CodeMirror-linenumber {
    color: #d0d0d0;
  }
  .cm-s-erlang-dark .CodeMirror-cursor {
    border-left: 1px solid white;
  }

  .cm-s-erlang-dark span.cm-quote {
    color: #ccc;
  }
  .cm-s-erlang-dark span.cm-atom {
    color: #f133f1;
  }
  .cm-s-erlang-dark span.cm-attribute {
    color: #ff80e1;
  }
  .cm-s-erlang-dark span.cm-bracket {
    color: #ff9d00;
  }
  .cm-s-erlang-dark span.cm-builtin {
    color: #eaa;
  }
  .cm-s-erlang-dark span.cm-comment {
    color: #77f;
  }
  .cm-s-erlang-dark span.cm-def {
    color: #e7a;
  }
  .cm-s-erlang-dark span.cm-keyword {
    color: #ffee80;
  }
  .cm-s-erlang-dark span.cm-meta {
    color: #50fefe;
  }
  .cm-s-erlang-dark span.cm-number {
    color: #ffd0d0;
  }
  .cm-s-erlang-dark span.cm-operator {
    color: #d55;
  }
  .cm-s-erlang-dark span.cm-property {
    color: #ccc;
  }
  .cm-s-erlang-dark span.cm-qualifier {
    color: #ccc;
  }
  .cm-s-erlang-dark span.cm-special {
    color: #ffbbbb;
  }
  .cm-s-erlang-dark span.cm-string {
    color: #3ad900;
  }
  .cm-s-erlang-dark span.cm-string-2 {
    color: #ccc;
  }
  .cm-s-erlang-dark span.cm-tag {
    color: #9effff;
  }
  .cm-s-erlang-dark span.cm-variable {
    color: #50fe50;
  }
  .cm-s-erlang-dark span.cm-variable-2 {
    color: #e0e;
  }
  .cm-s-erlang-dark span.cm-variable-3,
  .cm-s-erlang-dark span.cm-type {
    color: #ccc;
  }
  .cm-s-erlang-dark span.cm-error {
    color: #9d1e15;
  }

  .cm-s-erlang-dark .CodeMirror-activeline-background {
    background: #013461;
  }
  .cm-s-erlang-dark .CodeMirror-matchingbracket {
    outline: 1px solid grey;
    color: white !important;
  }
`;
