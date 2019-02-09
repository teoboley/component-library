import * as React from 'react';
import { css, cx } from 'emotion';
import { useTheme } from '../../../lib/theme';
import { Ref } from 'react';

interface ICardViewModel {
  ref?: Ref<any>;
  style?: React.CSSProperties;
  className?: string;
}

type CardProps = ICardViewModel;

const baseStyles = css({
  display: 'inline-block',
  boxShadow: '0 0 40px 5px rgba(0,0,0,0.10)',
  padding: 30,
  borderRadius: 5
});

const Card: React.FC<CardProps> = props => {
  const theme = useTheme();
  const styles = css({
    backgroundColor: theme.palette.background
  });

  return (
    <div style={props.style} className={cx(baseStyles, styles, props.className)}>
      {props.children}
    </div>
  );
};

export default Card;
