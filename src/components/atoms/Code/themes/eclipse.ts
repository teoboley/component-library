import { css } from 'emotion';

// language=CSS
export default css`
  .cm-s-eclipse span.cm-meta {
    color: #ff1717;
  }
  .cm-s-eclipse span.cm-keyword {
    line-height: 1em;
    font-weight: bold;
    color: #7f0055;
  }
  .cm-s-eclipse span.cm-atom {
    color: #219;
  }
  .cm-s-eclipse span.cm-number {
    color: #164;
  }
  .cm-s-eclipse span.cm-def {
    color: #00f;
  }
  .cm-s-eclipse span.cm-variable {
    color: black;
  }
  .cm-s-eclipse span.cm-variable-2 {
    color: #0000c0;
  }
  .cm-s-eclipse span.cm-variable-3,
  .cm-s-eclipse span.cm-type {
    color: #0000c0;
  }
  .cm-s-eclipse span.cm-property {
    color: black;
  }
  .cm-s-eclipse span.cm-operator {
    color: black;
  }
  .cm-s-eclipse span.cm-comment {
    color: #3f7f5f;
  }
  .cm-s-eclipse span.cm-string {
    color: #2a00ff;
  }
  .cm-s-eclipse span.cm-string-2 {
    color: #f50;
  }
  .cm-s-eclipse span.cm-qualifier {
    color: #555;
  }
  .cm-s-eclipse span.cm-builtin {
    color: #30a;
  }
  .cm-s-eclipse span.cm-bracket {
    color: #cc7;
  }
  .cm-s-eclipse span.cm-tag {
    color: #170;
  }
  .cm-s-eclipse span.cm-attribute {
    color: #00c;
  }
  .cm-s-eclipse span.cm-link {
    color: #219;
  }
  .cm-s-eclipse span.cm-error {
    color: #f00;
  }

  .cm-s-eclipse .CodeMirror-activeline-background {
    background: #e8f2ff;
  }
  .cm-s-eclipse .CodeMirror-matchingbracket {
    outline: 1px solid grey;
    color: black !important;
  }
`;