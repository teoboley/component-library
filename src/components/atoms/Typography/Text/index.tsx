import * as React from 'react';
import { css, cx } from 'emotion';
import { useOverride, useTheme } from '../../../../lib/theme';

export enum ETextType {
  Body = 'body',
  Caption = 'caption',
  Label = 'label'
}

interface ITextViewModel {
  type?: ETextType;

  style?: React.CSSProperties;
  className?: string;
}

export type TextProps = ITextViewModel;

export const textOverrideName = 'text';

const Text: React.FC<TextProps> = props => {
  const Override = useOverride(textOverrideName);
  if (Override) {
    return <Override {...props}/>;
  }

  const theme = useTheme();

  const baseCss = css({
    ...props.type && theme.typography[props.type],
    marginTop: 0,
    marginBottom: '0.35em'
  });

  const ElementType = props.type && 'p' || 'span';

  return (
    <ElementType style={props.style} className={cx(baseCss, props.className)}>
      {props.children}
    </ElementType>
  );
};

export default Text;
