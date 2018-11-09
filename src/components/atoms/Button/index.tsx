import * as React from "react";
import { Button as MuiButton, WithStyles } from "@material-ui/core";
import styles from "./styles";
import { withPropsStyles } from "../../../lib/material-ui";
import { CSSProperties, MouseEventHandler } from "react";

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

  disabled?: boolean;

  ref?: any;
  style?: CSSProperties;
  className?: string;
}

interface IButtonActions {
  onClick?: MouseEventHandler;
  onContextMenu?: MouseEventHandler;
}

export type ButtonProps = IButtonViewModel & IButtonActions;

const Button: React.SFC<ButtonProps & WithStyles<ReturnType<typeof styles>>> = props => {
  const { onClick, children, style, className, disabled, ...otherProps } = props;
  const type = props.type || EButtonType.TEXT;
  const size = props.size || "small";

  return (
    <span {...otherProps}>
      <MuiButton variant={type} mini={type === EButtonType.CIRCLE && size === EButtonSize.SMALL} size={type !== EButtonType.CIRCLE ? size : undefined} onClick={onClick} disabled={disabled} classes={{ root: props.classes[type] }} className={className} style={style}>
        {children}
      </MuiButton>
    </span>
  );
};

export default withPropsStyles(styles)(Button);