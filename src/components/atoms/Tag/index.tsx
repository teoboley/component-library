import * as React from 'react';
import { ClickAwayListener } from '@material-ui/core';
import { css, cx } from 'emotion';
import { ThemeConsumer } from '../../../lib/theme';

export interface ITagViewModel {
  icon?: JSX.Element;
  label: string;
  selected?: boolean;
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

type TagProps = ITagViewModel & ITagActions;

function Tag(props: TagProps) {
  return (
    <ThemeConsumer>
      {theme => {
        return (
          <ClickAwayListener
            onClickAway={() => props.renaming && props.onSetRenaming && props.onSetRenaming(null)}
          >
            <div
              style={props.style}
              onClick={!props.renaming ? props.onSelect : undefined}
              className={cx(
                css({
                  ...theme.typography.body,
                  display: 'inline-flex',
                  alignItems: 'center',
                  height: 32,
                  borderRadius: 50,
                  paddingLeft: 12,
                  paddingRight: 12,
                  margin: 2,
                  backgroundColor: 'white'
                }),
                props.className
              )}
            >
              {props.label}
              {/* <TextField
                color="primary"
                className={this.props.classes.renamingChipTextField}
                InputProps={{ classes: { root: this.props.classes.renamingChipInput } }}
                autoFocus
                value={this.props.renaming !== null ? this.props.renaming : this.props.label}
                onChange={e => this.props.onSetRenaming && this.props.onSetRenaming(e.target.value)}
                onKeyDown={e => {
                  if (e.keyCode === 13) {
                    this.props.onFinishRenaming &&
                      this.props.onFinishRenaming(this.props.renaming || this.props.label);
                  }

                  if (e.keyCode === 27) {
                    this.props.onSetRenaming && this.props.onSetRenaming(null);
                  }
                }}
              />*/}
            </div>
          </ClickAwayListener>
        );
      }}
    </ThemeConsumer>
  );
}

export default Tag;
