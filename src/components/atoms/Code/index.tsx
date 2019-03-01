import * as React from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import { css, cx } from 'emotion';

import { Theme, useOverride, useTheme } from '../../../lib/theme';

import codeMirrorBaseStyles from './codemirror.base';
import predefinedThemes from './themes/index';

import 'codemirror/mode/shell/shell';
import 'codemirror/mode/javascript/javascript';
import { useState } from 'react';

interface ICodeViewModel {
  value: string;
  mode: any;
  theme?: (keyof typeof predefinedThemes) | 'none' | string;
  inline?: boolean;

  controlled?: boolean;
  editable?: boolean;

  style?: React.CSSProperties;
  className?: string;
}

interface ICodeActions {
  onChange?(value: string): void;
}

export type CodeProps = ICodeViewModel & ICodeActions;

interface ICodeState {
  value: string;
}

export const codeOverrideName = 'code';

const Code: React.FC<CodeProps> = props => {
  const Override = useOverride(codeOverrideName);
  if (Override) {
    return <Override {...props}/>;
  }

  const [state, setState] = useState<ICodeState>({ value: props.value });

  const theme = useTheme();
  const themeTypography = props.inline ? theme.typography.codeLine : theme.typography.codeBlock;

  const currentCodeThemeStyle = props.theme
    ? props.theme !== 'none' && Object.keys(predefinedThemes).includes(props.theme)
      ? getPredefinedTheme(props.theme as keyof typeof predefinedThemes)
      : null
    : getCustomTheme(theme.palette.code);

  return (
    <div
      style={props.style}
      className={cx(
        codeMirrorBaseStyles,
        currentCodeThemeStyle,
        css({
          display: props.inline ? 'inline-block' : 'block',
          '.CodeMirror': {
            ...themeTypography,
            display: props.inline ? 'inline-block' : 'block',
            height: 'auto',
            borderRadius: 5,
            boxShadow: !props.inline ? '0 0 40px 5px rgba(0,0,0,0.10)' : undefined
          },
          '.CodeMirror .CodeMirror-lines': {
            paddingTop: !props.inline ? 10 : 2.5,
            paddingBottom: !props.inline ? 10 : 1.5
          },
          '.CodeMirror pre': {
            paddingLeft: !props.inline ? 10 : 7,
            paddingRight: !props.inline ? 10 : 7
          },
          '.CodeMirror .CodeMirror-linenumber': {
            paddingRight: 8
          },
          '.CodeMirror .CodeMirror-cursor': {
            borderLeft: !props.editable ? 'none' : undefined
          }
        }),
        props.className
      )}
    >
      <CodeMirror
        value={props.controlled ? props.value : state.value}
        options={{
          lineNumbers: !props.inline && true,
          mode: props.mode,
          theme: props.theme || 'custom'
        }}
        onBeforeChange={(editor, data, value) => {
          if (props.editable) {
            if (!props.controlled) {
              setState({
                value
              });
            }

            if (props.onChange) {
              props.onChange(value);
            }
          }
        }}
      />
    </div>
  );
};

function getPredefinedTheme(themeName: keyof typeof predefinedThemes) {
  return predefinedThemes[themeName];
}

function getCustomTheme(codePalette: Theme['palette']['code']): string {
  // language=CSS
  return css`
    /**
          Based on "IntelliJ IDEA darcula theme" from IntelliJ IDEA by JetBrains
        */

    .cm-s-custom {
      font-family: Consolas, Menlo, Monaco, 'Lucida Console', 'Liberation Mono', 'DejaVu Sans Mono',
        'Bitstream Vera Sans Mono', 'Courier New', monospace, serif;
    }

    .cm-s-custom.CodeMirror {
      background: ${codePalette.window.background};
      color: ${codePalette.window.color};
    }

    .cm-s-custom span.cm-meta {
      color: ${codePalette.meta};
    }

    .cm-s-custom span.cm-number {
      color: ${codePalette.number};
    }

    .cm-s-custom span.cm-keyword {
      color: ${codePalette.keyword};
      line-height: 1em;
      font-weight: bold;
    }

    .cm-s-custom span.cm-def {
      color: ${codePalette.def};
      font-style: italic;
    }

    .cm-s-custom span.cm-variable {
      color: ${codePalette.variable[0]};
    }

    .cm-s-custom span.cm-variable-2 {
      color: ${codePalette.variable[1]};
    }

    .cm-s-custom span.cm-variable-3 {
      color: ${codePalette.variable[2]};
    }

    .cm-s-custom span.cm-type {
      color: ${codePalette.type};
      font-weight: bold;
    }

    .cm-s-custom span.cm-property {
      color: ${codePalette.property};
    }

    .cm-s-custom span.cm-operator {
      color: ${codePalette.operator};
    }

    .cm-s-custom span.cm-string {
      color: ${codePalette.string[0]};
    }

    .cm-s-custom span.cm-string-2 {
      color: ${codePalette.string[1]};
    }

    .cm-s-custom span.cm-comment {
      color: ${codePalette.comment};
      font-style: italic;
    }

    .cm-s-custom span.cm-link {
      color: ${codePalette.link};
    }

    .cm-s-custom span.cm-atom {
      color: ${codePalette.atom};
    }

    .cm-s-custom span.cm-error {
      color: ${codePalette.error};
    }

    .cm-s-custom span.cm-tag {
      color: ${codePalette.tag};
      font-weight: bold;
      font-style: italic;
      text-decoration: underline;
    }

    .cm-s-custom span.cm-attribute {
      color: ${codePalette.attribute};
    }

    .cm-s-custom span.cm-qualifier {
      color: ${codePalette.qualifier};
    }

    .cm-s-custom span.cm-bracket {
      color: ${codePalette.bracket};
    }

    .cm-s-custom span.cm-builtin {
      color: ${codePalette.builtin};
    }

    .cm-s-custom span.cm-special {
      color: ${codePalette.special};
    }

    .cm-s-custom .CodeMirror-cursor {
      border-left: 1px solid ${codePalette.cursor};
    }

    .cm-s-custom .CodeMirror-activeline-background {
      background: ${codePalette.activeLineBackground};
    }

    .cm-s-custom .CodeMirror-gutters {
      background: ${codePalette.guttersBackground};
      border-right: 1px solid ${codePalette.guttersBackground};
    }

    .cm-s-custom .CodeMirror-guttermarker {
      color: ${codePalette.gutterMarker};
    }

    .cm-s-custom .CodeMirror-guttermarker-subtle {
      color: ${codePalette.gutterMarkerSubtle};
    }

    .cm-s-custom .CodeMirrir-linenumber {
      color: ${codePalette.lineNumber};
    }

    .cm-s-custom .CodeMirror-matchingbracket {
      background-color: ${codePalette.matchingBracket.background};
      color: ${codePalette.matchingBracket.color} !important;
      font-weight: bold;
    }

    .cm-s-custom div.CodeMirror-selected {
      background: ${codePalette.selectedBackground};
    }

    .CodeMirror-hints.custom {
      font-family: Menlo, Monaco, Consolas, 'Courier New', monospace;
      color: ${codePalette.hintsCustom.color};
      background-color: ${codePalette.hintsCustom.background} !important;
    }

    .CodeMirror-hints.custom .CodeMirror-hint-active {
      background-color: ${codePalette.hintsCustomActive.background} !important;
      color: ${codePalette.hintsCustomActive.color} !important;
    }
  `;
}

export default Code;
