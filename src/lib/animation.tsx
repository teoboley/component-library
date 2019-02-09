import * as React from 'react';
import { config as springConfig, Transition, animated } from 'react-spring';

export type ToggleAnimation = React.ComponentType<{ toggle: boolean; delay?: string }>;
export type TextAnimation = React.ComponentType<{ text: string }>;
export type ItemsAnimation = React.ComponentType<{ items: any[] }>;
export type Animation = ToggleAnimation | TextAnimation;

export const DisplayToggleAnimation: ToggleAnimation = ({ toggle, children }) =>
  toggle && children ? <>{children}</> : null;
export const DisplayTextAnimation: TextAnimation = ({ text }) => <>{text}</>;

export const FallingTextAnimation: TextAnimation = props => (
  <Transition
    native
    items={props.text.split('').map((item, i) => ({ key: i, text: item }))}
    keys={item => item.key}
    from={{
      display: 'inline-block',
      transform: 'translate3d(0,-40px,0)',
      opacity: 0,
      whiteSpace: 'pre'
    }}
    enter={{ transform: 'translate3d(0,0px,0)', opacity: 1 }}
    leave={{ transform: 'translate3d(0,-40px,0)', opacity: 0 }}
    config={springConfig.molasses}
    trail={150}
  >
    {item => animProps => <animated.span style={animProps}>{item.text}</animated.span>}
  </Transition>
);
