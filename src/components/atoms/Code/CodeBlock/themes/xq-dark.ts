import { css } from 'emotion';

// language=CSS
export default css`
  /*
Copyright (C) 2011 by MarkLogic Corporation
Author: Mike Brevoort <mike@brevoort.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
  .cm-s-xq-dark.CodeMirror {
    background: #0a001f;
    color: #f8f8f8;
  }
  .cm-s-xq-dark div.CodeMirror-selected {
    background: #27007a;
  }
  .cm-s-xq-dark .CodeMirror-line::selection,
  .cm-s-xq-dark .CodeMirror-line > span::selection,
  .cm-s-xq-dark .CodeMirror-line > span > span::selection {
    background: rgba(39, 0, 122, 0.99);
  }
  .cm-s-xq-dark .CodeMirror-line::-moz-selection,
  .cm-s-xq-dark .CodeMirror-line > span::-moz-selection,
  .cm-s-xq-dark .CodeMirror-line > span > span::-moz-selection {
    background: rgba(39, 0, 122, 0.99);
  }
  .cm-s-xq-dark .CodeMirror-gutters {
    background: #0a001f;
    border-right: 1px solid #aaa;
  }
  .cm-s-xq-dark .CodeMirror-guttermarker {
    color: #ffbd40;
  }
  .cm-s-xq-dark .CodeMirror-guttermarker-subtle {
    color: #f8f8f8;
  }
  .cm-s-xq-dark .CodeMirror-linenumber {
    color: #f8f8f8;
  }
  .cm-s-xq-dark .CodeMirror-cursor {
    border-left: 1px solid white;
  }

  .cm-s-xq-dark span.cm-keyword {
    color: #ffbd40;
  }
  .cm-s-xq-dark span.cm-atom {
    color: #6c8cd5;
  }
  .cm-s-xq-dark span.cm-number {
    color: #164;
  }
  .cm-s-xq-dark span.cm-def {
    color: #fff;
    text-decoration: underline;
  }
  .cm-s-xq-dark span.cm-variable {
    color: #fff;
  }
  .cm-s-xq-dark span.cm-variable-2 {
    color: #eee;
  }
  .cm-s-xq-dark span.cm-variable-3,
  .cm-s-xq-dark span.cm-type {
    color: #ddd;
  }
  .cm-s-xq-dark span.cm-property {
  }
  .cm-s-xq-dark span.cm-operator {
  }
  .cm-s-xq-dark span.cm-comment {
    color: gray;
  }
  .cm-s-xq-dark span.cm-string {
    color: #9fee00;
  }
  .cm-s-xq-dark span.cm-meta {
    color: yellow;
  }
  .cm-s-xq-dark span.cm-qualifier {
    color: #fff700;
  }
  .cm-s-xq-dark span.cm-builtin {
    color: #30a;
  }
  .cm-s-xq-dark span.cm-bracket {
    color: #cc7;
  }
  .cm-s-xq-dark span.cm-tag {
    color: #ffbd40;
  }
  .cm-s-xq-dark span.cm-attribute {
    color: #fff700;
  }
  .cm-s-xq-dark span.cm-error {
    color: #f00;
  }

  .cm-s-xq-dark .CodeMirror-activeline-background {
    background: #27282e;
  }
  .cm-s-xq-dark .CodeMirror-matchingbracket {
    outline: 1px solid grey;
    color: white !important;
  }
`;
