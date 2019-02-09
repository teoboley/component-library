import * as React from 'react';
import { MouseEventHandler } from 'react';
import { getBWContrastingColor, ThemeConsumer, useTheme } from '../../../lib/theme';
import { css, cx } from 'emotion';
import * as Color from 'color';

export enum EButtonType {
  Overlay = 'overlay',
  Contained = 'contained',
  Outline = 'outline'
}

interface IButtonBaseViewModel {
  children: React.ReactNode;
  color?: string;
  secondaryColor?: string;
  type?: EButtonType;

  disabled?: boolean;

  ref?: any;
  style?: React.CSSProperties;
  className?: string;
}

interface IButtonBaseActions {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onContextMenu?: MouseEventHandler<HTMLButtonElement>;
}

type ButtonBaseProps = IButtonBaseViewModel & IButtonBaseActions;

export const ButtonBase: React.FC<ButtonBaseProps> = props => {
  const { onClick, children, style, className, ...otherProps } = props;
  const type = props.type || EButtonType.Overlay;

  const theme = useTheme();

  const baseStyles = css({
    backgroundColor: 'transparent',
    borderRadius: 3,
    border: 'none',
    padding: '10px 14px',
    display: 'inline-block',
    textAlign: 'left',
    cursor: 'pointer',
    margin: 2,
    // transition: 'background-color 200ms, color 200ms, border 200ms, box-shadow 200ms',
    '&:focus': {
      outline: 'none'
    }
  });

  const color = props.disabled
    ? theme.palette.disabled
    : (props.color && theme.palette.getColor(props.color)) || theme.palette.primary;
  const secondaryColor = props.disabled
    ? theme.palette.disabled
    : props.secondaryColor || getBWContrastingColor(color);

  let styles = null;

  switch (type) {
    case EButtonType.Overlay:
      styles = css({
        border: `1px solid transparent`,
        color: color,
        '&:hover': !props.disabled && {
          backgroundColor: Color(color)
            .alpha(0.1)
            .hsl()
            .string()
        },
        '&:active': !props.disabled && {
          backgroundColor: Color(color)
            .alpha(0.15)
            .hsl()
            .string()
        },
        cursor: props.disabled ? 'not-allowed' : undefined
      });
      break;
    case EButtonType.Outline:
      styles = css({
        border: `1.5px solid ${color}`,
        color: color,
        '&:hover': !props.disabled && {
          backgroundColor: Color(color)
            .alpha(0.1)
            .hsl()
            .string()
        },
        '&:active': !props.disabled && {
          color: secondaryColor,
          backgroundColor: Color(color)
            .alpha(0.5)
            .hsl()
            .string(),
          borderColor: Color(color)
            .mix(Color('black'), 0.075)
            .hsl()
            .string()
        },
        cursor: props.disabled ? 'not-allowed' : undefined
      });
      break;
    case EButtonType.Contained:
      styles = css({
        backgroundColor: color,
        border: `1px solid ${color}`,
        color: secondaryColor,
        '&:hover': !props.disabled && {
          backgroundColor: Color(color)
            .mix(Color('white'), 0.25)
            .hsl()
            .string(),
          borderColor: Color(color)
            .mix(Color('white'), 0.25)
            .hsl()
            .string()
        },
        '&:active': !props.disabled && {
          backgroundColor: Color(color)
            .mix(Color('black'), 0.075)
            .hsl()
            .string(),
          borderColor: Color(color)
            .mix(Color('black'), 0.075)
            .hsl()
            .string()
        },
        cursor: props.disabled ? 'not-allowed' : undefined
      });
      break;
  }

  return (
    <button
      onClick={onClick}
      style={style}
      className={cx(baseStyles, styles, className)}
      {...otherProps}
    >
      {children}
    </button>
  );
};

interface IButtonViewModel extends IButtonBaseViewModel {
}

interface IButtonActions extends IButtonBaseActions {
}

export type ButtonProps = IButtonViewModel & IButtonActions;

const Button: React.FC<ButtonProps> = props => {
  const { children, style, className, ...otherProps } = props;

  return (
    <ThemeConsumer>
      {theme => {

        const { color, ...buttonTheme } = theme.typography.button;

        return (
          <ButtonBase
            style={style}
            className={cx(css({
              ...buttonTheme,
              textAlign: 'center'
            }), className)}
            {...otherProps}
          >
            {children}
          </ButtonBase>
        );
      }}
    </ThemeConsumer>
  );
};

export default Button;
