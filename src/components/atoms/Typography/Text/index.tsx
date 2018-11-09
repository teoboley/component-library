import * as React from "react";
import Typography from "@material-ui/core/Typography/Typography";
import {CSSProperties} from "react";

export enum ETextType {
  Body = 'body1',
  Caption = 'caption'
}

interface ITextViewModel {
  type: ETextType;

  style?: CSSProperties;
  className?: string;
}

type TextProps = ITextViewModel;

const Text: React.SFC<TextProps> = props => {
  return (
    <Typography variant={props.type} gutterBottom style={props.style} className={props.className}>
      { props.children }
    </Typography>
  )
};

export default Text;