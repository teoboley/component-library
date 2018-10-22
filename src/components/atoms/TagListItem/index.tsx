import * as React from "react";
import { Chip, WithStyles, withStyles, ClickAwayListener, TextField, Paper, Menu, MenuItem } from "@material-ui/core";
import classNames from "classnames";
import { withState } from "recompose";

import styles from "./styles";
import { TextFieldProps } from "@material-ui/core/TextField";
import ContextMenu from "../ContextMenu";

export interface ITagListItemViewModel {
  icon?: JSX.Element;
  indentAmount?: number;
  label: string;
  selected?: boolean;
  hovered: boolean;
  renaming: string | null;
  className?: string;
  style?: React.CSSProperties;
}

export interface ITagListItemActions {
  onSelect?: () => void;
  onDelete?: () => void;
  onSetRenaming?: (newTag: string | null) => void;
  onFinishRenaming?: (newTag: string) => void;
}

type TagListItemProps = ITagListItemViewModel &
  ITagListItemActions &
  WithStyles<typeof styles> & {
    setHovered: (hovered: boolean) => boolean;
  };

const TextFieldWithRef = TextField as React.ComponentType<TextFieldProps & { ref: any }> & { focus: any };

class TagListItem extends React.Component<TagListItemProps> {
  textField: typeof TextFieldWithRef | null;

  componentDidMount() {
    if (this.textField != null) {
      this.textField.focus();
    }
  }

  componentDidUpdate() {
    if (this.textField != null) {
      this.textField.focus();
    }
  }
  
  render() {
    return (
      <span
        className={this.props.className}
        style={this.props.style}
        onMouseEnter={() => this.props.setHovered(true)}
        onMouseLeave={() => this.props.setHovered(false)}
        onClick={!this.props.renaming ? this.props.onSelect : undefined}
      >
        <ContextMenu menuComponent={({ isOpen, anchorElement, close }) =>
          <Menu
            id="simple-menu"
            anchorEl={anchorElement}
            open={isOpen}
            onClose={close}
            anchorOrigin={{ vertical: 'center', horizontal: 'center'}}
          >
            <MenuItem onClick={() => {
              this.props.onSetRenaming && this.props.onSetRenaming(this.props.label);
              close();
            }}>Rename</MenuItem>
            <MenuItem onClick={() => {
              this.props.onDelete && this.props.onDelete();
              close();
            }}>Delete</MenuItem>
            {/* <MenuItem onClick={close}>Tags...</MenuItem> */}
          </Menu>
        }>{ ({ open }) => 
        this.props.renaming !== null ?
        <ClickAwayListener onClickAway={() => this.props.onSetRenaming && this.props.onSetRenaming(null)}>
          <Paper className={this.props.classes.renamingChip}>
            <TextFieldWithRef color="primary" className={this.props.classes.renamingChipTextField} InputProps={{ classes: { root: this.props.classes.renamingChipInput } }} ref={(ref: any) => this.textField = ref} autoFocus value={this.props.renaming !== null ? this.props.renaming : this.props.label} onChange={e => this.props.onSetRenaming && this.props.onSetRenaming(e.target.value)} onKeyDown={e => {
              if (e.keyCode === 13) {
                this.props.onFinishRenaming && this.props.onFinishRenaming(this.props.renaming || this.props.label);
              }

              if (e.keyCode === 27) {
                this.props.onSetRenaming && this.props.onSetRenaming(null);
              }
            }}/>
          </Paper>
        </ClickAwayListener> :
        <Chip
          avatar={this.props.icon}
          label={`#${this.props.label}`}
          onDelete={this.props.hovered ? this.props.onDelete : undefined}
          className={classNames(this.props.classes.chip, {
            [this.props.classes.selectedChip]: this.props.selected === true
          })}
          onContextMenu={event => {
            event.preventDefault();
            open(event.currentTarget);
          }}
        />
        }</ContextMenu>
      </span>
    );
  }
}

const withHover = withState("hovered", "setHovered", false);

export default withStyles(styles)(withHover(TagListItem));
