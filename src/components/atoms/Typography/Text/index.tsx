import * as React from 'react';
import { css, cx } from 'emotion';
import { useTheme } from '../../../../lib/theme';

export enum ETextType {
  Body = 'body',
  Caption = 'caption',
  Label = 'label'
}

interface ITextViewModel {
  type: ETextType;

  style?: React.CSSProperties;
  className?: string;
}

type TextProps = ITextViewModel;

const Text: React.FC<TextProps> = props => {
  const theme = useTheme();

        const baseCss = css({
          ...theme.typography[props.type],
          display: 'block',
          marginTop: 0,
          marginBottom: '0.35em'
        });

        return (
          <span style={props.style} className={cx(baseCss, props.className)}>
            {props.children}
          </span>
  );
};

export default Text;
