import * as React from 'react';
import { css, cx } from 'emotion';
import { ThemeConsumer } from '../../../../lib/theme';

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

const Text: React.SFC<TextProps> = props => {
  return (
    <ThemeConsumer>
      {theme => {
        const baseCss = css({
          ...theme.typography[props.type],
          marginTop: 0,
          marginBottom: '0.35em'
        });

        return (
          <p style={props.style} className={cx(baseCss, props.className)}>
            {props.children}
          </p>
        );
      }}
    </ThemeConsumer>
  );
};

export default Text;
