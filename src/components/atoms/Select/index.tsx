import {FormControl, InputLabel, MenuItem, Select as MuiSelect} from "@material-ui/core";
import * as React from "react";

interface ISelectViewModel {
  label: string;
  value?: string;
  children: Array<{
    value: string;
    component: JSX.Element | string;
  }>;
}

interface ISelectActions {
  onSelect?: (value: string) => void;
}

type SelectProps = ISelectViewModel & ISelectActions;

const Select: React.SFC<SelectProps> = props => {
  return (
    <FormControl style={{width: "100%"}}>
      <InputLabel>{ props.label }</InputLabel>
      <MuiSelect
        value={props.value}
        onChange={event => props.onSelect && props.onSelect(event.target.value)}
      >
        {props.children.map(option =>
          <MenuItem value={option.value}>{option.component}</MenuItem>
        )}
      </MuiSelect>
    </FormControl>
  );
};

export default Select;
