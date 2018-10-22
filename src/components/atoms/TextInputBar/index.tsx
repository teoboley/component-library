import * as React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import styles from "./styles";

interface ITextInputBarViewModel extends WithStyles<typeof styles> {
  value: string;
  placeholder?: string;
}

interface ITextInputBarActions {
  onChange?: (value: string) => void;
}

type TextInputBarProps = ITextInputBarViewModel & ITextInputBarActions;

const UnstyledTextInputBar: React.SFC<TextInputBarProps> = props => {
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
    />
  );
};

const TextInputBar = withStyles(styles)(UnstyledTextInputBar);
export default TextInputBar;
