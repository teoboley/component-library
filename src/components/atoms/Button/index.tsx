import * as React from 'react';
import { MouseEventHandler } from 'react';
import { getBWContrastingColor, useOverride, useTheme } from '../../../lib/theme';
import { css, cx } from 'emotion';
import * as Color from 'color';

export enum EButtonType {
  Overlay = 'overlay',
  Contained = 'contained',
  Outline = 'outline',
  Highlight = 'highlight'
}

export enum EButtonSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large'
}

interface IButtonBaseViewModel {
  color?: string;
  secondaryColor?: string;
  type?: EButtonType;
  size?: EButtonSize;

  disabled?: boolean;

  ref?: any;
  style?: React.CSSProperties;
  className?: string;
}

interface IButtonBaseActions {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onContextMenu?: MouseEventHandler<HTMLButtonElement>;
}

export type ButtonBaseProps = IButtonBaseViewModel & IButtonBaseActions;

export const buttonBaseOverrideName = 'buttonBase';

export const ButtonBase: React.FC<ButtonBaseProps> = props => {
  const Override = useOverride(buttonBaseOverrideName);
  if (Override) {
    return <Override {...props}/>;
  }

  const { onClick, children, style, className, ...otherProps } = props;
  const type = props.type || EButtonType.Highlight;
  const size = props.size || EButtonSize.Medium;

  const theme = useTheme();

  const baseStyles = css({
    backgroundColor: 'transparent',
    borderRadius: 3,
    border: 'none',
    padding: size === EButtonSize.Medium ? '10px 14px' : size === EButtonSize.Small ? '5px 7px' : '15px 21px',
    display: 'inline-block',
    textAlign: 'left',
    cursor: 'pointer',
    margin: 2,
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
    case EButtonType.Highlight:
      styles = css({
        border: `1px solid transparent`,
        color: color,
        '&:hover': !props.disabled && {
          // color: (Color(color).isDark() ? Color(color).lighten(0.5) : Color(color).darken(0.5))
          //   .hsl()
          //   .string(),
          filter: 'brightness(175%)'
        },
        '&:active': !props.disabled && {
          // color: (Color(color).isDark() ? Color(color).lighten(0.75) : Color(color).darken(0.75))
          //   .hsl()
          //   .string(),
          filter: 'brightness(100%)'
        },
        cursor: props.disabled ? 'not-allowed' : undefined,
        // transition: 'filter 200ms'
      });
      break;
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
        cursor: props.disabled ? 'not-allowed' : undefined,
        transition: 'background-color 200ms'
      });
      break;
    case EButtonType.Outline:
      styles = css({
        border: `1.5px solid ${color}`,
        color: color,
        boxShadow: 'rgba(0, 0, 0, 0.0588235) 0px 1px 1px 0px',
        '&:hover': !props.disabled && {
          backgroundColor: Color(color)
            .alpha(0.1)
            .hsl()
            .string(),
          transform: 'translateY(-1px)',
          boxShadow: 'rgba(0, 0, 0, 0.0980392) 0px 4px 12px 0px'
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
        cursor: props.disabled ? 'not-allowed' : undefined,
        transition: 'background-color 200ms, box-shadow 200ms, transform 200ms'
      });
      break;
    case EButtonType.Contained:
      styles = css({
        backgroundColor: color,
        border: `1px solid ${color}`,
        color: secondaryColor,
        boxShadow: 'rgba(0, 0, 0, 0.0588235) 0px 1px 1px 0px',
        '&:hover': !props.disabled && {
          backgroundColor: Color(color)
            .mix(Color('white'), 0.25)
            .hsl()
            .string(),
          borderColor: Color(color)
            .mix(Color('white'), 0.25)
            .hsl()
            .string(),
          transform: 'translateY(-1px)',
          boxShadow: 'rgba(0, 0, 0, 0.0980392) 0px 4px 12px 0px'
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
        cursor: props.disabled ? 'not-allowed' : undefined,
        transition: 'background-color 200ms, box-shadow 200ms, transform 200ms'
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

interface IButtonActions extends IButtonBaseActions {}

export type ButtonProps = IButtonViewModel & IButtonActions;

export const buttonOverrideName = 'button';

const Button: React.FC<ButtonProps> = props => {
  const Override = useOverride(buttonOverrideName);
  if (Override) {
    return <Override {...props}/>;
  }

  const { children, style, className, ...otherProps } = props;

  const theme = useTheme();
  const { color, ...buttonTheme } = theme.typography.button;

  return (
    <ButtonBase
      style={style}
      className={cx(
        css({
          ...buttonTheme,
          textAlign: 'center'
        }),
        className
      )}
      {...otherProps}
    >
      {children}
    </ButtonBase>
  );
};

export default Button;
