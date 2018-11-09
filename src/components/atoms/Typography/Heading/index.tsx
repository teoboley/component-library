import * as React from "react";
import Typography from "@material-ui/core/Typography/Typography";
import {CSSProperties} from "react";

export enum EHeadingType {
  H1 = 'h2',
  H2 = 'h3',
  H3 = 'h4',
  H4 = 'h5',
  H5 = 'h6',
  H6 = 'subtitle1'
}

interface IHeadingViewModel {
  type: EHeadingType;

  style?: CSSProperties;
  className?: string;
}

type HeadingProps = IHeadingViewModel;

const Heading: React.SFC<HeadingProps> = props => {
  return (
    <Typography variant={props.type} gutterBottom style={props.style} className={props.className}>
      { props.children }
    </Typography>
  )
};

export default Heading;