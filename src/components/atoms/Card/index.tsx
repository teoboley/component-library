import * as React from 'react';
import { css, cx } from 'emotion';

import { getPaletteColorOrDefault, useOverride, useTheme } from '../../../lib/theme';

interface ICardViewModel {
  color?: string;
  style?: React.CSSProperties;
  className?: string;
}

export type CardProps = ICardViewModel;

const baseStyles = css({
  display: 'inline-block',
  boxShadow: '0 0 40px 5px rgba(0,0,0,0.10)',
  padding: 30,
  borderRadius: 5
});

export const cardOverrideName = 'card';

const Card: React.FC<CardProps> = props => {
  const Override = useOverride(cardOverrideName);
  if (Override) {
    return <Override {...props} />;
  }

  const theme = useTheme();
  const styles = css({
    backgroundColor:
      (props.color && getPaletteColorOrDefault(props.color, theme.palette)) ||
      theme.palette.cardBackground
  });

  return (
    <div style={props.style} className={cx(baseStyles, styles, props.className)}>
      {props.children}
    </div>
  );
};

export default Card;
