import * as React from 'react';
import { CSSProperties, MouseEventHandler } from 'react';
import { getBWContrastingColor, ThemeConsumer } from '../../../lib/theme';
import { css, cx } from 'emotion';
import * as Color from 'color';

export enum EButtonType {
  Text = 'text',
  Contained = 'contained',
  Outline = 'outline'
}

interface IButtonViewModel {
  children: React.ReactNode;
  color?: string;
  secondaryColor?: string;
  type?: EButtonType;

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

const Button: React.SFC<ButtonProps> = props => {
  const { onClick, children, style, className, disabled, ...otherProps } = props;
  const type = props.type || EButtonType.Text;

  return (
    <ThemeConsumer>
      {theme => {
        const baseStyles = css({
          ...theme.typography.button,
          backgroundColor: 'transparent',
          borderRadius: 3,
          border: 'none',
          padding: '10px 14px',
          textAlign: 'center',
          display: 'inline-block',
          cursor: 'pointer',
          margin: 2,
          // transition: 'background-color 200ms, color 200ms, border 200ms, box-shadow 200ms',
          '&:focus': {
            outline: 'none'
          }
        });

        const color = props.disabled
          ? 'darkgrey'
          : (props.color &&
              (props.color === 'primary'
                ? theme.palette.primaryColor
                : props.color === 'secondary'
                ? theme.palette.secondaryColor
                : props.color)) ||
            theme.palette.primaryColor;
        const secondaryColor = props.disabled
          ? 'grey'
          : props.secondaryColor || getBWContrastingColor(color);

        let styles = null;

        switch (type) {
          case EButtonType.Text:
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
              border: `1px solid ${color}`,
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
      }}
    </ThemeConsumer>
  );
};

export default Button;
