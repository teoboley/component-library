import * as React from "react";
import { ListItem, WithStyles, withStyles } from "@material-ui/core";
import { ListItemProps } from "@material-ui/core/ListItem";
import styles from "./styles";
import {withPropsStyles} from "../../../lib/material-ui";

interface ISelectableListItemViewModel {
  selectedColor?: string;
  indentAmount?: number;
  selected: boolean;
}

export type SelectableListItemProps = ListItemProps & ISelectableListItemViewModel;

const SelectableListItem: React.SFC<SelectableListItemProps & WithStyles<ReturnType<typeof styles>>> = ({
  children,
  indentAmount = 20,
  selected,
  classes,
  className,
  onContextMenu,
  ...otherProps
}) => {
  return (
    <div onContextMenu={onContextMenu}>
      <ListItem
        button
        style={{
          paddingLeft: indentAmount
        }}
        className={`${className} ${selected ? classes.selected : ""}`}
        {...otherProps}
      >
        {children}
      </ListItem>
    </div>
  );
};

export default withPropsStyles(styles)(SelectableListItem);
