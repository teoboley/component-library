import { css } from 'emotion';

// language=CSS
export default css`
  /*

    Name:       shadowfox
    Author:     overdodactyl (http://github.com/overdodactyl)

    Original shadowfox color scheme by Firefox

*/

  .cm-s-shadowfox.CodeMirror {
    background: #2a2a2e;
    color: #b1b1b3;
  }
  .cm-s-shadowfox div.CodeMirror-selected {
    background: #353b48;
  }
  .cm-s-shadowfox .CodeMirror-line::selection,
  .cm-s-shadowfox .CodeMirror-line > span::selection,
  .cm-s-shadowfox .CodeMirror-line > span > span::selection {
    background: #353b48;
  }
  .cm-s-shadowfox .CodeMirror-line::-moz-selection,
  .cm-s-shadowfox .CodeMirror-line > span::-moz-selection,
  .cm-s-shadowfox .CodeMirror-line > span > span::-moz-selection {
    background: #353b48;
  }
  .cm-s-shadowfox .CodeMirror-gutters {
    background: #0c0c0d;
    border-right: 1px solid #0c0c0d;
  }
  .cm-s-shadowfox .CodeMirror-guttermarker {
    color: #555;
  }
  .cm-s-shadowfox .CodeMirror-linenumber {
    color: #939393;
  }
  .cm-s-shadowfox .CodeMirror-cursor {
    border-left: 1px solid #fff;
  }

  .cm-s-shadowfox span.cm-comment {
    color: #939393;
  }
  .cm-s-shadowfox span.cm-atom {
    color: #ff7de9;
  }
  .cm-s-shadowfox span.cm-quote {
    color: #ff7de9;
  }
  .cm-s-shadowfox span.cm-builtin {
    color: #ff7de9;
  }
  .cm-s-shadowfox span.cm-attribute {
    color: #ff7de9;
  }
  .cm-s-shadowfox span.cm-keyword {
    color: #ff7de9;
  }
  .cm-s-shadowfox span.cm-error {
    color: #ff7de9;
  }

  .cm-s-shadowfox span.cm-number {
    color: #6b89ff;
  }
  .cm-s-shadowfox span.cm-string {
    color: #6b89ff;
  }
  .cm-s-shadowfox span.cm-string-2 {
    color: #6b89ff;
  }

  .cm-s-shadowfox span.cm-meta {
    color: #939393;
  }
  .cm-s-shadowfox span.cm-hr {
    color: #939393;
  }

  .cm-s-shadowfox span.cm-header {
    color: #75bfff;
  }
  .cm-s-shadowfox span.cm-qualifier {
    color: #75bfff;
  }
  .cm-s-shadowfox span.cm-variable-2 {
    color: #75bfff;
  }

  .cm-s-shadowfox span.cm-property {
    color: #86de74;
  }

  .cm-s-shadowfox span.cm-def {
    color: #75bfff;
  }
  .cm-s-shadowfox span.cm-bracket {
    color: #75bfff;
  }
  .cm-s-shadowfox span.cm-tag {
    color: #75bfff;
  }
  .cm-s-shadowfox span.cm-link:visited {
    color: #75bfff;
  }

  .cm-s-shadowfox span.cm-variable {
    color: #b98eff;
  }
  .cm-s-shadowfox span.cm-variable-3 {
    color: #d7d7db;
  }
  .cm-s-shadowfox span.cm-link {
    color: #737373;
  }
  .cm-s-shadowfox span.cm-operator {
    color: #b1b1b3;
  }
  .cm-s-shadowfox span.cm-special {
    color: #d7d7db;
  }

  .cm-s-shadowfox .CodeMirror-activeline-background {
    background: rgba(185, 215, 253, 0.15);
  }
  .cm-s-shadowfox .CodeMirror-matchingbracket {
    outline: solid 1px rgba(255, 255, 255, 0.25);
    color: white !important;
  }
`;
