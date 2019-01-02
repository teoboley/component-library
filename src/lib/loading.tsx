import * as React from 'react';
import { css, keyframes } from 'react-emotion';

const baseColor = '#ddd';
const shineColor = '#e8e8e8';
const animationDuration = '1.6s';

const shineAnimation = keyframes`
  0% {
    background-position: 0px
  }
  
  100% {
    background-position: 600px
  }
`;

export const loadingGradient: React.CSSProperties = {
  backgroundImage: `linear-gradient(90deg, ${baseColor} 0%, ${shineColor} 50%, ${baseColor} 100%)`,
  backgroundSize: 600,
  animation: `${shineAnimation} ${animationDuration} infinite linear`
};

export const LoadingBlock: React.SFC<{}> = props => {
  return <div className={css({ ...loadingGradient })} />;
};
