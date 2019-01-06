import { css } from 'emotion';

// language=CSS
export default css`
  /* neo theme for codemirror */

  /* Color scheme */

  .cm-s-neo.CodeMirror {
    background-color: #ffffff;
    color: #2e383c;
    line-height: 1.4375;
  }
  .cm-s-neo .cm-comment {
    color: #75787b;
  }
  .cm-s-neo .cm-keyword,
  .cm-s-neo .cm-property {
    color: #1d75b3;
  }
  .cm-s-neo .cm-atom,
  .cm-s-neo .cm-number {
    color: #75438a;
  }
  .cm-s-neo .cm-node,
  .cm-s-neo .cm-tag {
    color: #9c3328;
  }
  .cm-s-neo .cm-string {
    color: #b35e14;
  }
  .cm-s-neo .cm-variable,
  .cm-s-neo .cm-qualifier {
    color: #047d65;
  }

  /* Editor styling */

  .cm-s-neo pre {
    padding: 0;
  }

  .cm-s-neo .CodeMirror-gutters {
    border: none;
    border-right: 10px solid transparent;
    background-color: transparent;
  }

  .cm-s-neo .CodeMirror-linenumber {
    padding: 0;
    color: #e0e2e5;
  }

  .cm-s-neo .CodeMirror-guttermarker {
    color: #1d75b3;
  }
  .cm-s-neo .CodeMirror-guttermarker-subtle {
    color: #e0e2e5;
  }

  .cm-s-neo .CodeMirror-cursor {
    width: auto;
    border: 0;
    background: rgba(155, 157, 162, 0.37);
    z-index: 1;
  }
`;
