import * as React from "react";
import { ListItem, WithStyles, withStyles } from "@material-ui/core";
import { ListItemProps } from "@material-ui/core/ListItem";
import styles from "./styles";

interface ISelectableListItemViewModel extends WithStyles<typeof styles> {
  indentAmount?: number;
  selected: boolean;
}

type SelectableListItemProps = ListItemProps & ISelectableListItemViewModel;

const SelectableListItem: React.SFC<SelectableListItemProps> = ({
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

export default withStyles(styles)(SelectableListItem);
