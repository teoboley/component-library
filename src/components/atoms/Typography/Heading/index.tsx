import * as React from 'react';
import { CSSProperties } from 'react';
import { css, cx } from 'emotion';
import { useOverride, useTheme } from '../../../../lib/theme';

export enum EHeadingType {
  HERO,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6
}

interface IHeadingViewModel {
  type: EHeadingType;

  style?: CSSProperties;
  className?: string;
}

export type HeadingProps = IHeadingViewModel;

export const headingOverrideName = 'heading';

const Heading: React.FC<HeadingProps> = props => {
  const Override = useOverride(headingOverrideName);
  if (Override) {
    return <Override {...props}/>;
  }

  const theme = useTheme();
  const baseCss = css({
    marginTop: 0,
    marginBottom: '0.35em'
  });

  switch (props.type) {
    case EHeadingType.HERO:
      return (
        <h1
          className={cx(css({ ...theme.typography.hero }), baseCss, props.className)}
          style={props.style}
        >
          {props.children}
        </h1>
      );
    case EHeadingType.H1:
      return (
        <h1
          className={cx(css({ ...theme.typography.h1 }), baseCss, props.className)}
          style={props.style}
        >
          {props.children}
        </h1>
      );
    case EHeadingType.H2:
      return (
        <h2
          className={cx(css({ ...theme.typography.h2 }), baseCss, props.className)}
          style={props.style}
        >
          {props.children}
        </h2>
      );
    case EHeadingType.H3:
      return (
        <h3
          className={cx(css({ ...theme.typography.h3 }), baseCss, props.className)}
          style={props.style}
        >
          {props.children}
        </h3>
      );
    case EHeadingType.H4:
      return (
        <h4
          className={cx(css({ ...theme.typography.h4 }), baseCss, props.className)}
          style={props.style}
        >
          {props.children}
        </h4>
      );
    case EHeadingType.H5:
      return (
        <h5
          className={cx(css({ ...theme.typography.h5 }), baseCss, props.className)}
          style={props.style}
        >
          {props.children}
        </h5>
      );
    case EHeadingType.H6:
      return (
        <h6
          className={cx(css({ ...theme.typography.h6 }), baseCss, props.className)}
          style={props.style}
        >
          {props.children}
        </h6>
      );
  }
};

export default Heading;
