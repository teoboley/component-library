import { css } from 'emotion';

// language=CSS
export default css`
  /**
 * Pastel On Dark theme ported from ACE editor
 * @license MIT
 * @copyright AtomicPages LLC 2014
 * @author Dennis Thompson, AtomicPages LLC
 * @version 1.1
 * @source https://github.com/atomicpages/codemirror-pastel-on-dark-theme
 */

  .cm-s-pastel-on-dark.CodeMirror {
    background: #2c2827;
    color: #8f938f;
    line-height: 1.5;
  }
  .cm-s-pastel-on-dark div.CodeMirror-selected {
    background: rgba(221, 240, 255, 0.2);
  }
  .cm-s-pastel-on-dark .CodeMirror-line::selection,
  .cm-s-pastel-on-dark .CodeMirror-line > span::selection,
  .cm-s-pastel-on-dark .CodeMirror-line > span > span::selection {
    background: rgba(221, 240, 255, 0.2);
  }
  .cm-s-pastel-on-dark .CodeMirror-line::-moz-selection,
  .cm-s-pastel-on-dark .CodeMirror-line > span::-moz-selection,
  .cm-s-pastel-on-dark .CodeMirror-line > span > span::-moz-selection {
    background: rgba(221, 240, 255, 0.2);
  }

  .cm-s-pastel-on-dark .CodeMirror-gutters {
    background: #34302f;
    border-right: 0px;
    padding: 0 3px;
  }
  .cm-s-pastel-on-dark .CodeMirror-guttermarker {
    color: white;
  }
  .cm-s-pastel-on-dark .CodeMirror-guttermarker-subtle {
    color: #8f938f;
  }
  .cm-s-pastel-on-dark .CodeMirror-linenumber {
    color: #8f938f;
  }
  .cm-s-pastel-on-dark .CodeMirror-cursor {
    border-left: 1px solid #a7a7a7;
  }
  .cm-s-pastel-on-dark span.cm-comment {
    color: #a6c6ff;
  }
  .cm-s-pastel-on-dark span.cm-atom {
    color: #de8e30;
  }
  .cm-s-pastel-on-dark span.cm-number {
    color: #cccccc;
  }
  .cm-s-pastel-on-dark span.cm-property {
    color: #8f938f;
  }
  .cm-s-pastel-on-dark span.cm-attribute {
    color: #a6e22e;
  }
  .cm-s-pastel-on-dark span.cm-keyword {
    color: #aeb2f8;
  }
  .cm-s-pastel-on-dark span.cm-string {
    color: #66a968;
  }
  .cm-s-pastel-on-dark span.cm-variable {
    color: #aeb2f8;
  }
  .cm-s-pastel-on-dark span.cm-variable-2 {
    color: #bebf55;
  }
  .cm-s-pastel-on-dark span.cm-variable-3,
  .cm-s-pastel-on-dark span.cm-type {
    color: #de8e30;
  }
  .cm-s-pastel-on-dark span.cm-def {
    color: #757ad8;
  }
  .cm-s-pastel-on-dark span.cm-bracket {
    color: #f8f8f2;
  }
  .cm-s-pastel-on-dark span.cm-tag {
    color: #c1c144;
  }
  .cm-s-pastel-on-dark span.cm-link {
    color: #ae81ff;
  }
  .cm-s-pastel-on-dark span.cm-qualifier,
  .cm-s-pastel-on-dark span.cm-builtin {
    color: #c1c144;
  }
  .cm-s-pastel-on-dark span.cm-error {
    background: #757ad8;
    color: #f8f8f0;
  }
  .cm-s-pastel-on-dark .CodeMirror-activeline-background {
    background: rgba(255, 255, 255, 0.031);
  }
  .cm-s-pastel-on-dark .CodeMirror-matchingbracket {
    border: 1px solid rgba(255, 255, 255, 0.25);
    color: #8f938f !important;
    margin: -1px -1px 0 -1px;
  }
`;
