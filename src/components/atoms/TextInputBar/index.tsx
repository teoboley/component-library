import * as React from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import styles from './styles';
import { CSSProperties } from 'react';

interface ITextInputBarViewModel extends WithStyles<typeof styles> {
  value: string;
  placeholder?: string;

  style?: CSSProperties;
  className?: string;
}

interface ITextInputBarActions {
  onChange?: (value: string) => void;
}

type TextInputBarProps = ITextInputBarViewModel & ITextInputBarActions;

const UnstyledTextInputBar: React.FC<TextInputBarProps> = props => {
  return (
    <TextField
      InputProps={{
        classes: {
          input: props.classes.bootstrapInput,
          root: props.classes.bootstrapRoot
        },
        disableUnderline: true
      }}
      InputLabelProps={{
        className: props.classes.bootstrapFormLabel,
        shrink: true
      }}
      placeholder={props.placeholder}
      value={props.value}
      onChange={e => props.onChange && props.onChange(e.target.value)}
      className={props.className}
      style={props.style}
    />
  );
};

const TextInputBar = withStyles(styles)(UnstyledTextInputBar as any); // FIXME
export default TextInputBar;
