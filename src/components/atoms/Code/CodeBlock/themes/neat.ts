import { css } from 'emotion';

// language=CSS
export default css`
  .cm-s-neat span.cm-comment {
    color: #a86;
  }
  .cm-s-neat span.cm-keyword {
    line-height: 1em;
    font-weight: bold;
    color: blue;
  }
  .cm-s-neat span.cm-string {
    color: #a22;
  }
  .cm-s-neat span.cm-builtin {
    line-height: 1em;
    font-weight: bold;
    color: #077;
  }
  .cm-s-neat span.cm-special {
    line-height: 1em;
    font-weight: bold;
    color: #0aa;
  }
  .cm-s-neat span.cm-variable {
    color: black;
  }
  .cm-s-neat span.cm-number,
  .cm-s-neat span.cm-atom {
    color: #3a3;
  }
  .cm-s-neat span.cm-meta {
    color: #555;
  }
  .cm-s-neat span.cm-link {
    color: #3a3;
  }

  .cm-s-neat .CodeMirror-activeline-background {
    background: #e8f2ff;
  }
  .cm-s-neat .CodeMirror-matchingbracket {
    outline: 1px solid grey;
    color: black !important;
  }
`;
