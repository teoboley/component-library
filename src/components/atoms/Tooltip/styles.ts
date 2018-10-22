import { Theme, createStyles } from "@material-ui/core";
import { TooltipProps } from "./index";
import * as Color from "color";
import { grey } from "@material-ui/core/colors";

export default (props: TooltipProps, theme: Theme) => {
  const backgroundColor = props.backgroundColor || grey["800"];
  const color = props.color || Color(backgroundColor).darken(0.1).isDark() ? theme.palette.common.white : theme.palette.common.black; // theme.palette.text.primary;

  return createStyles({
    tooltip: {
      background: backgroundColor,
      color,
      maxWidth: props.maxWidth || 500,
      padding: props.noPadding ? 0 : undefined,
      fontSize: props.noPadding ? 0 : undefined,
      margin: `${props.distance || props.withArrow ? 14 : 7}px 0px`
    },
    arrowPopper: {
      '&[x-placement*="bottom"] $arrowArrow': {
        top: 0,
        left: 0,
        marginTop: '-0.9em',
        width: '3em',
        height: '1em',
        '&::before': {
          borderWidth: '0 1em 1em 1em',
          borderColor: `transparent transparent ${backgroundColor} transparent`,
        },
      },
      '&[x-placement*="top"] $arrowArrow': {
        bottom: 0,
        left: 0,
        marginBottom: '-0.9em',
        width: '3em',
        height: '1em',
        '&::before': {
          borderWidth: '1em 1em 0 1em',
          borderColor: `${backgroundColor} transparent transparent transparent`,
        },
      },
      '&[x-placement*="right"] $arrowArrow': {
        left: 0,
        marginLeft: '-0.9em',
        height: '3em',
        width: '1em',
        '&::before': {
          borderWidth: '1em 1em 1em 0',
          borderColor: `transparent ${backgroundColor} transparent transparent`,
        },
      },
      '&[x-placement*="left"] $arrowArrow': {
        right: 0,
        marginRight: '-0.9em',
        height: '3em',
        width: '1em',
        '&::before': {
          borderWidth: '1em 0 1em 1em',
          borderColor: `transparent transparent transparent ${backgroundColor}`,
        },
      },
    },
    arrowArrow: {
      position: 'absolute',
      fontSize: 7,
      width: '3em',
      height: '3em',
      '&::before': {
        content: '""',
        margin: 'auto',
        display: 'block',
        width: 0,
        height: 0,
        borderStyle: 'solid',
      }
    }
  });
}