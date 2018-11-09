import { Theme, createStyles } from "@material-ui/core";
import * as Color from "color";
import { ButtonProps } from "./index";
import { grey } from "@material-ui/core/colors";

export default (props: ButtonProps, theme: Theme) => {
  const color = props.color && (props.color === 'primary' ? theme.palette.primary.main : props.color === 'secondary' ? theme.palette.secondary.main : props.color)  || grey["800"];
  const secondaryColor = props.secondaryColor || Color(color).darken(0.1).isDark() ? theme.palette.common.white : theme.palette.common.black; // theme.palette.text.primary;

  return createStyles({
    text: {
      color,
      '&:hover': {
        textDecoration: 'none',
        backgroundColor: `${Color(color).fade(1 - theme.palette.action.hoverOpacity)}`,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent',
        },
        '&$disabled': {
          backgroundColor: 'transparent',
        },
      },
    },
    contained: {
      background: color,
      color: secondaryColor,
      boxShadow: props.withGlow ? `0 3px 5px 2px ${Color(color).fade(0.8)}` : 'none',
      '&:hover': {
        background: Color(color).darken(0.1).isDark() ? `${Color(color).lighten(0.2)}` : `${Color(color).darken(0.2)}`
      },
      '&:active': {
        boxShadow: 'none',
      },
      '&:focus': {
        boxShadow: props.withGlow ? `0 0 0 1px ${Color(color).fade(0.8)}` : 'none',
      }
    },
  });
}