import { createStyles, Theme } from "@material-ui/core";

export default (theme: Theme) => {
  const height = 32;
  const backgroundColor =
    theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700];

  return createStyles({
    chip: {
      cursor: "pointer",
      margin: theme.spacing.unit / 2
    },
    selectedChip: {
      backgroundColor: theme.palette.secondary.dark
    },
    renamingChip: {
      height,
      borderRadius: 50,
      paddingLeft: 12,
      paddingRight: 12,
      backgroundColor
    },
    renamingChipTextField: {
     
    },
    renamingChipInput: {
      minWidth: 30,
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.pxToRem(13),
    }
  });
}
