import { css } from 'emotion';

// language=CSS
export default css`
  /* Port of TextMate's Blackboard theme */

  .cm-s-blackboard.CodeMirror {
    background: #0c1021;
    color: #f8f8f8;
  }
  .cm-s-blackboard div.CodeMirror-selected {
    background: #253b76;
  }
  .cm-s-blackboard .CodeMirror-line::selection,
  .cm-s-blackboard .CodeMirror-line > span::selection,
  .cm-s-blackboard .CodeMirror-line > span > span::selection {
    background: rgba(37, 59, 118, 0.99);
  }
  .cm-s-blackboard .CodeMirror-line::-moz-selection,
  .cm-s-blackboard .CodeMirror-line > span::-moz-selection,
  .cm-s-blackboard .CodeMirror-line > span > span::-moz-selection {
    background: rgba(37, 59, 118, 0.99);
  }
  .cm-s-blackboard .CodeMirror-gutters {
    background: #0c1021;
    border-right: 0;
  }
  .cm-s-blackboard .CodeMirror-guttermarker {
    color: #fbde2d;
  }
  .cm-s-blackboard .CodeMirror-guttermarker-subtle {
    color: #888;
  }
  .cm-s-blackboard .CodeMirror-linenumber {
    color: #888;
  }
  .cm-s-blackboard .CodeMirror-cursor {
    border-left: 1px solid #a7a7a7;
  }

  .cm-s-blackboard .cm-keyword {
    color: #fbde2d;
  }
  .cm-s-blackboard .cm-atom {
    color: #d8fa3c;
  }
  .cm-s-blackboard .cm-number {
    color: #d8fa3c;
  }
  .cm-s-blackboard .cm-def {
    color: #8da6ce;
  }
  .cm-s-blackboard .cm-variable {
    color: #ff6400;
  }
  .cm-s-blackboard .cm-operator {
    color: #fbde2d;
  }
  .cm-s-blackboard .cm-comment {
    color: #aeaeae;
  }
  .cm-s-blackboard .cm-string {
    color: #61ce3c;
  }
  .cm-s-blackboard .cm-string-2 {
    color: #61ce3c;
  }
  .cm-s-blackboard .cm-meta {
    color: #d8fa3c;
  }
  .cm-s-blackboard .cm-builtin {
    color: #8da6ce;
  }
  .cm-s-blackboard .cm-tag {
    color: #8da6ce;
  }
  .cm-s-blackboard .cm-attribute {
    color: #8da6ce;
  }
  .cm-s-blackboard .cm-header {
    color: #ff6400;
  }
  .cm-s-blackboard .cm-hr {
    color: #aeaeae;
  }
  .cm-s-blackboard .cm-link {
    color: #8da6ce;
  }
  .cm-s-blackboard .cm-error {
    background: #9d1e15;
    color: #f8f8f8;
  }

  .cm-s-blackboard .CodeMirror-activeline-background {
    background: #3c3636;
  }
  .cm-s-blackboard .CodeMirror-matchingbracket {
    outline: 1px solid grey;
    color: white !important;
  }
`;
