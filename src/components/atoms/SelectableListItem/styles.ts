import { Theme, createStyles } from "@material-ui/core";

export default (theme: Theme) =>
  createStyles({
    selected: {
      backgroundColor: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: theme.palette.action.selected
      }
    }
  });
