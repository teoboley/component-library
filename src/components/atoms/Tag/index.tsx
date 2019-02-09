import * as React from 'react';
import { ClickAwayListener } from '@material-ui/core';
import { css, cx } from 'emotion';
import { useTheme } from '../../../lib/theme';
import { ButtonBase, EButtonType } from '../Button';

export interface ITagViewModel {
  color?: string;
  secondaryColor?: string;

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
  const theme = useTheme();
  const { color, ...textTheme } = theme.typography.label;

  return (
    <ClickAwayListener
      onClickAway={() => props.renaming && props.onSetRenaming && props.onSetRenaming(null)}
    >
      <ButtonBase
        type={props.selected ? EButtonType.Contained : EButtonType.Overlay}
        color={props.color}
        secondaryColor={props.secondaryColor}
        onClick={!props.renaming ? props.onSelect : undefined}
        style={props.style}
        className={cx(
          css({
            ...textTheme,
            display: 'inline-flex',
            alignItems: 'center',
            height: 32,
            borderRadius: 50,
            padding: '0px 12px',
            margin: 2
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
      </ButtonBase>
    </ClickAwayListener>
  );
}

export default Tag;
