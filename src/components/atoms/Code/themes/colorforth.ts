import { css } from 'emotion';

// language=CSS
export default css`
  .cm-s-colorforth.CodeMirror {
    background: #000000;
    color: #f8f8f8;
  }
  .cm-s-colorforth .CodeMirror-gutters {
    background: #0a001f;
    border-right: 1px solid #aaa;
  }
  .cm-s-colorforth .CodeMirror-guttermarker {
    color: #ffbd40;
  }
  .cm-s-colorforth .CodeMirror-guttermarker-subtle {
    color: #78846f;
  }
  .cm-s-colorforth .CodeMirror-linenumber {
    color: #bababa;
  }
  .cm-s-colorforth .CodeMirror-cursor {
    border-left: 1px solid white;
  }

  .cm-s-colorforth span.cm-comment {
    color: #ededed;
  }
  .cm-s-colorforth span.cm-def {
    color: #ff1c1c;
    font-weight: bold;
  }
  .cm-s-colorforth span.cm-keyword {
    color: #ffd900;
  }
  .cm-s-colorforth span.cm-builtin {
    color: #00d95a;
  }
  .cm-s-colorforth span.cm-variable {
    color: #73ff00;
  }
  .cm-s-colorforth span.cm-string {
    color: #007bff;
  }
  .cm-s-colorforth span.cm-number {
    color: #00c4ff;
  }
  .cm-s-colorforth span.cm-atom {
    color: #606060;
  }

  .cm-s-colorforth span.cm-variable-2 {
    color: #eee;
  }
  .cm-s-colorforth span.cm-variable-3,
  .cm-s-colorforth span.cm-type {
    color: #ddd;
  }
  .cm-s-colorforth span.cm-property {
  }
  .cm-s-colorforth span.cm-operator {
  }

  .cm-s-colorforth span.cm-meta {
    color: yellow;
  }
  .cm-s-colorforth span.cm-qualifier {
    color: #fff700;
  }
  .cm-s-colorforth span.cm-bracket {
    color: #cc7;
  }
  .cm-s-colorforth span.cm-tag {
    color: #ffbd40;
  }
  .cm-s-colorforth span.cm-attribute {
    color: #fff700;
  }
  .cm-s-colorforth span.cm-error {
    color: #f00;
  }

  .cm-s-colorforth div.CodeMirror-selected {
    background: #333d53;
  }

  .cm-s-colorforth span.cm-compilation {
    background: rgba(255, 255, 255, 0.12);
  }

  .cm-s-colorforth .CodeMirror-activeline-background {
    background: #253540;
  }
`;