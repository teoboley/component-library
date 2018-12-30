import * as React from "react";
import { css, cx } from 'emotion';
import {ThemeConsumer} from "../../../lib/theme";
import {Ref} from "react";

interface ICardViewModel {
  ref?: Ref<any>;
  style?: React.CSSProperties;
  className?: string;
}

type CardProps = ICardViewModel;

const baseStyles = css({
  display: 'inline-block',
  boxShadow: '0 0 40px 5px rgba(0,0,0,0.10)',
  padding: 30
});

const Card: React.SFC<CardProps> = props => {
  return (
    <ThemeConsumer>
      {theme => {
        const styles = css({
          backgroundColor: theme.palette.background
        });

        return (
          <div style={props.style} className={cx(baseStyles, styles, props.className)}>
            {props.children}
          </div>
        );
      }
    }
    </ThemeConsumer>
  )
};

export default Card;