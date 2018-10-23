import {FormControl, InputLabel, MenuItem, Select as MuiSelect} from "@material-ui/core";
import * as React from "react";

interface ISelectViewModel {
  label: string;
  value?: string;

  open?: boolean;

  children: Array<{
    value: string;
    component: JSX.Element | string;
  }>;
}

interface ISelectActions {
  onSelect?: (value: string) => void;
  onOpen?: () => void;
  onClose?: () => void;
}

type SelectProps = ISelectViewModel & ISelectActions;

const Select: React.SFC<SelectProps> = props => {
  return (
    <FormControl style={{width: "100%"}}>
      <InputLabel>{ props.label }</InputLabel>
      <MuiSelect
        open={props.open}
        value={props.value}
        onChange={event => props.onSelect && props.onSelect(event.target.value)}
        onOpen={props.onOpen}
        onClose={props.onClose}
      >
        {props.children.map(option =>
          <MenuItem value={option.value}>{option.component}</MenuItem>
        )}
      </MuiSelect>
    </FormControl>
  );
};

export default Select;
