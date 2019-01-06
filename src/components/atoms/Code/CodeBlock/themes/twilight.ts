import { css } from 'emotion';

// language=CSS
export default css`
  .cm-s-twilight.CodeMirror {
    background: #141414;
    color: #f7f7f7;
  } /**/
  .cm-s-twilight div.CodeMirror-selected {
    background: #323232;
  } /**/
  .cm-s-twilight .CodeMirror-line::selection,
  .cm-s-twilight .CodeMirror-line > span::selection,
  .cm-s-twilight .CodeMirror-line > span > span::selection {
    background: rgba(50, 50, 50, 0.99);
  }
  .cm-s-twilight .CodeMirror-line::-moz-selection,
  .cm-s-twilight .CodeMirror-line > span::-moz-selection,
  .cm-s-twilight .CodeMirror-line > span > span::-moz-selection {
    background: rgba(50, 50, 50, 0.99);
  }

  .cm-s-twilight .CodeMirror-gutters {
    background: #222;
    border-right: 1px solid #aaa;
  }
  .cm-s-twilight .CodeMirror-guttermarker {
    color: white;
  }
  .cm-s-twilight .CodeMirror-guttermarker-subtle {
    color: #aaa;
  }
  .cm-s-twilight .CodeMirror-linenumber {
    color: #aaa;
  }
  .cm-s-twilight .CodeMirror-cursor {
    border-left: 1px solid white;
  }

  .cm-s-twilight .cm-keyword {
    color: #f9ee98;
  } /**/
  .cm-s-twilight .cm-atom {
    color: #fc0;
  }
  .cm-s-twilight .cm-number {
    color: #ca7841;
  } /**/
  .cm-s-twilight .cm-def {
    color: #8da6ce;
  }
  .cm-s-twilight span.cm-variable-2,
  .cm-s-twilight span.cm-tag {
    color: #607392;
  } /**/
  .cm-s-twilight span.cm-variable-3,
  .cm-s-twilight span.cm-def,
  .cm-s-twilight span.cm-type {
    color: #607392;
  } /**/
  .cm-s-twilight .cm-operator {
    color: #cda869;
  } /**/
  .cm-s-twilight .cm-comment {
    color: #777;
    font-style: italic;
    font-weight: normal;
  } /**/
  .cm-s-twilight .cm-string {
    color: #8f9d6a;
    font-style: italic;
  } /**/
  .cm-s-twilight .cm-string-2 {
    color: #bd6b18;
  } /*?*/
  .cm-s-twilight .cm-meta {
    background-color: #141414;
    color: #f7f7f7;
  } /*?*/
  .cm-s-twilight .cm-builtin {
    color: #cda869;
  } /*?*/
  .cm-s-twilight .cm-tag {
    color: #997643;
  } /**/
  .cm-s-twilight .cm-attribute {
    color: #d6bb6d;
  } /*?*/
  .cm-s-twilight .cm-header {
    color: #ff6400;
  }
  .cm-s-twilight .cm-hr {
    color: #aeaeae;
  }
  .cm-s-twilight .cm-link {
    color: #ad9361;
    font-style: italic;
    text-decoration: none;
  } /**/
  .cm-s-twilight .cm-error {
    border-bottom: 1px solid red;
  }

  .cm-s-twilight .CodeMirror-activeline-background {
    background: #27282e;
  }
  .cm-s-twilight .CodeMirror-matchingbracket {
    outline: 1px solid grey;
    color: white !important;
  }
`;
