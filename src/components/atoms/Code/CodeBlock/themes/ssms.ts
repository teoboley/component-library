import { css } from 'emotion';

// language=CSS
export default css`
  .cm-s-ssms span.cm-keyword {
    color: blue;
  }
  .cm-s-ssms span.cm-comment {
    color: darkgreen;
  }
  .cm-s-ssms span.cm-string {
    color: red;
  }
  .cm-s-ssms span.cm-def {
    color: black;
  }
  .cm-s-ssms span.cm-variable {
    color: black;
  }
  .cm-s-ssms span.cm-variable-2 {
    color: black;
  }
  .cm-s-ssms span.cm-atom {
    color: darkgray;
  }
  .cm-s-ssms .CodeMirror-linenumber {
    color: teal;
  }
  .cm-s-ssms .CodeMirror-activeline-background {
    background: #ffffff;
  }
  .cm-s-ssms span.cm-string-2 {
    color: #ff00ff;
  }
  .cm-s-ssms span.cm-operator,
  .cm-s-ssms span.cm-bracket,
  .cm-s-ssms span.cm-punctuation {
    color: darkgray;
  }
  .cm-s-ssms .CodeMirror-gutters {
    border-right: 3px solid #ffee62;
    background-color: #ffffff;
  }
  .cm-s-ssms div.CodeMirror-selected {
    background: #add6ff;
  }
`;
