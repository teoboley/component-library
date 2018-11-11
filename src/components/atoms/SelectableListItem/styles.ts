import { Theme, createStyles } from "@material-ui/core";
import * as Color from "color";
import {SelectableListItemProps} from ".";

export default (props: SelectableListItemProps, theme: Theme) =>
  createStyles({
    selected: {
      backgroundColor: props.selectedColor || theme.palette.primary.main,
      '&:hover': {
        backgroundColor: props.selectedColor ? (Color(props.selectedColor).isDark() ? Color(props.selectedColor).lighten(0.1).rgb().string() : Color(props.selectedColor).darken(0.1).rgb().string()) : theme.palette.action.selected
      }
    }
  });
