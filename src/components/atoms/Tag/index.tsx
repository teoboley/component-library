import * as React from "react";
import {Chip, ClickAwayListener, TextField, withStyles, WithStyles} from "@material-ui/core";
import {cx} from "emotion";
import {withState} from "recompose";

import styles from "./styles";

export interface ITagViewModel {
  icon?: JSX.Element;
  indentAmount?: number;
  label: string;
  selected?: boolean;
  hovered: boolean;
  renaming: string | null;
  className?: string;
  style?: React.CSSProperties;
}

export interface ITagActions {
  onSelect?: () => void;
  onDelete?: () => void;
  onSetRenaming?: (newTag: string | null) => void;
  onFinishRenaming?: (newTag: string) => void;
}

type TagProps = ITagViewModel &
  ITagActions &
  WithStyles<typeof styles> & {
  setHovered: (hovered: boolean) => boolean;
};

class Tag extends React.Component<TagProps> {
  render() {
    return (
          <span
            className={this.props.className}
            style={this.props.style}
            onMouseEnter={() => this.props.setHovered(true)}
            onMouseLeave={() => this.props.setHovered(false)}
            onClick={!this.props.renaming ? this.props.onSelect : undefined}
          >
          {this.props.renaming !== null ?
            <ClickAwayListener onClickAway={() => this.props.onSetRenaming && this.props.onSetRenaming(null)}>
              <div className={this.props.classes.renamingChip}>
                <TextField color="primary" className={this.props.classes.renamingChipTextField}
                           InputProps={{classes: {root: this.props.classes.renamingChipInput}}} autoFocus
                           value={this.props.renaming !== null ? this.props.renaming : this.props.label}
                           onChange={e => this.props.onSetRenaming && this.props.onSetRenaming(e.target.value)}
                           onKeyDown={e => {
                             if (e.keyCode === 13) {
                               this.props.onFinishRenaming && this.props.onFinishRenaming(this.props.renaming || this.props.label);
                             }

                             if (e.keyCode === 27) {
                               this.props.onSetRenaming && this.props.onSetRenaming(null);
                             }
                           }}/>
              </div>
            </ClickAwayListener> :
            <Chip
              avatar={this.props.icon}
              label={`#${this.props.label}`}
              onDelete={this.props.hovered ? this.props.onDelete : undefined}
              className={cx(this.props.classes.chip, {
                [this.props.classes.selectedChip]: this.props.selected === true
              })}
            />}
      </span>
    );
  }
}

const withHover = withState("hovered", "setHovered", false);

export default withStyles(styles)(withHover(Tag));
