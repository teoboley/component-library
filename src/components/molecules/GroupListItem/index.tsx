import * as React from "react";
import {
  ListItemText,
  Collapse,
  ListItemIcon,
  List,
  WithStyles,
  withStyles
} from "@material-ui/core";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Folder from "@material-ui/icons/Folder";
import FolderOpen from "@material-ui/icons/FolderOpen";
import styles from "./styles";
import SelectableListItem from "../../atoms/SelectableListItem";
// import UnfilledCircle from "@material-ui/icons/FiberManualRecord";

interface IGroupListItemViewModel extends WithStyles<typeof styles> {
  indentAmount?: number;
  label: string;
  children?: JSX.Element | JSX.Element[];
  openIcon?: JSX.Element;
  closedIcon?: JSX.Element;
  open?: boolean;
  selected?: boolean;
}

interface IGroupListItemActions {
  onClick?: () => void;
  onToggleOpen?: () => void;
}

type GroupListItemProps = IGroupListItemViewModel & IGroupListItemActions;

const GroupListItem: React.SFC<GroupListItemProps> = props => {
  const indentAmount = props.indentAmount || 20;
  const children = (Array.isArray(props.children) === true
    ? props.children
    : [props.children]) as JSX.Element[];

  return (
    <div>
      <SelectableListItem
        indentAmount={indentAmount}
        selected={props.selected || false}
      >
        <ListItemIcon>
          <span onClick={props.onClick}>
            {props.open
              ? props.openIcon || <FolderOpen />
              : props.closedIcon || <Folder />}
          </span>
        </ListItemIcon>
        <ListItemText
          inset
          primary={props.label}
          onClick={props.onToggleOpen}
        />
        <span onClick={props.onToggleOpen}>
          {props.open ? <ExpandLess /> : <ExpandMore />}
        </span>
      </SelectableListItem>
      {props.children &&
        children.length !== 0 && (
          <Collapse in={props.open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {children.map(child =>
                React.cloneElement(child as any, {
                  indentAmount: indentAmount + 20
                })
              )}
            </List>
          </Collapse>
        )}
    </div>
  );
};

export default withStyles(styles)(GroupListItem);
