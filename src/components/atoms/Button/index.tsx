import * as React from "react";
import { Button as MuiButton, WithStyles } from "@material-ui/core";
import styles from "./styles";
import { withPropsStyles } from "../../../lib/material-ui";
import { CSSProperties, DragEventHandler, MouseEventHandler } from "react";
import { Ref } from "react";

export enum EButtonType {
  TEXT = 'text',
  CONTAINED = 'contained',
  CIRCLE = 'fab'
}

export enum EButtonSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large'
}

interface IButtonViewModel {
  children: string | JSX.Element;
  color?: string;
  secondaryColor?: string;
  withGlow?: boolean;
  type?: EButtonType;
  size?: EButtonSize;

  ref?: any;
  style?: CSSProperties;
  className?: string;
}

interface IButtonActions {
  // MouseEvents
  onClick?: MouseEventHandler;
  onClickCapture?: MouseEventHandler;
  onContextMenu?: MouseEventHandler;
  onContextMenuCapture?: MouseEventHandler;
  onDoubleClick?: MouseEventHandler;
  onDoubleClickCapture?: MouseEventHandler;
  onDrag?: DragEventHandler;
  onDragCapture?: DragEventHandler;
  onDragEnd?: DragEventHandler;
  onDragEndCapture?: DragEventHandler;
  onDragEnter?: DragEventHandler;
  onDragEnterCapture?: DragEventHandler;
  onDragExit?: DragEventHandler;
  onDragExitCapture?: DragEventHandler;
  onDragLeave?: DragEventHandler;
  onDragLeaveCapture?: DragEventHandler;
  onDragOver?: DragEventHandler;
  onDragOverCapture?: DragEventHandler;
  onDragStart?: DragEventHandler;
  onDragStartCapture?: DragEventHandler;
  onDrop?: DragEventHandler;
  onDropCapture?: DragEventHandler;
  onMouseDown?: MouseEventHandler;
  onMouseDownCapture?: MouseEventHandler;
  onMouseEnter?: MouseEventHandler;
  onMouseLeave?: MouseEventHandler;
  onMouseMove?: MouseEventHandler;
  onMouseMoveCapture?: MouseEventHandler;
  onMouseOut?: MouseEventHandler;
  onMouseOutCapture?: MouseEventHandler;
  onMouseOver?: MouseEventHandler;
  onMouseOverCapture?: MouseEventHandler;
  onMouseUp?: MouseEventHandler;
  onMouseUpCapture?: MouseEventHandler;
}

export type ButtonProps = IButtonViewModel & IButtonActions;

const Button: React.SFC<ButtonProps & WithStyles<ReturnType<typeof styles>>> = props => {
  const { onClick, children, style, className, ...otherProps } = props;
  const type = props.type || EButtonType.TEXT;
  const size = props.size || "small";

  return (
    <span {...otherProps}>
      <MuiButton variant={type} mini={type === EButtonType.CIRCLE && size === EButtonSize.SMALL} size={type !== EButtonType.CIRCLE ? size : undefined} onClick={onClick} classes={{ root: props.classes[type] }} className={className} style={style}>
        {children}
      </MuiButton>
    </span>
  );
};

export default withPropsStyles(styles)(Button);