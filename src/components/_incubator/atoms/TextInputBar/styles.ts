import { Theme, createStyles } from '@material-ui/core';
import * as color from 'color';

export default (theme: Theme) =>
  createStyles({
    bootstrapFormLabel: {
      fontSize: 18
    },
    bootstrapInput: {
      '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(255,255,255,.1)'
      },
      backgroundColor: color(theme.palette.background.default)
        .darken(0.04)
        .hex(),
      borderRadius: 4,
      fontSize: 16,
      padding: '10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      width: 'calc(100% - 24px)'
    },
    bootstrapRoot: {
      'label + &': {
        marginTop: theme.spacing.unit * 3
      },
      padding: 0
    },
    paper: {
      marginTop: theme.spacing.unit,
      zIndex: 100
    }
  });