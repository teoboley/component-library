import * as React from 'react';
import { CSSProperties, useRef, useState } from 'react';

import Popover, { TooltipPlacement } from '../Popover';
import { css, cx } from 'emotion';
import { getBWContrastingColor, useOverride, useTheme } from '../../../lib/theme';
import { ToggleAnimation } from '../../../lib/animation';

type ChildFunction = ((
  params: { open: (anchorEl?: any) => void; close: () => void }
) => React.ReactElement<any>);

export interface ITooltipViewModel {
  children: React.ReactElement<any> | ChildFunction;
  content: React.ReactElement<any> | string;

  withArrow?: boolean;
  color?: string;
  backgroundColor?: string;
  maxWidth?: number;

  placement?: TooltipPlacement;

  disableHoverListener?: boolean;

  style?: CSSProperties;
  className?: string;
}

export type TooltipProps = ITooltipViewModel;

type TooltipState = {
  anchorEl: any | null;
};

export const tooltipOverrideName = 'tooltip';

const Tooltip: React.FC<TooltipProps> = props => {
  const Override = useOverride(tooltipOverrideName);
  if (Override) {
    return <Override {...props}/>;
  }

  const childContainer = useRef<HTMLSpanElement>(null);
  const [state, setState] = useState<TooltipState>({ anchorEl: null });

  const theme = useTheme();

  const handleTooltipClose = () => {
    setState({ anchorEl: null });
  };

  const handleTooltipOpen = (anchorEl?: any) => {
    setState({ anchorEl: anchorEl || null });
  };

  const color =
    (props.color && theme.palette.getColor(props.color)) ||
    (props.backgroundColor
      ? getBWContrastingColor(theme.palette.getColor(props.backgroundColor))
      : 'black');
  const backgroundColor = props.backgroundColor && theme.palette.getColor(props.backgroundColor) || 'white';

  const tooltipStyle = css({
    ...theme.typography.tooltip,
    backgroundColor,
    borderRadius: 3,
    color,
    padding: '5px 7px',
    maxWidth: props.maxWidth || 200,
    overflow: 'hidden'
  });

  return (
    <>
      <Popover
        anchorEl={state.anchorEl}
        arrowColor={props.withArrow ? backgroundColor : undefined}
        placement={props.placement || { vertical: 'top' }}
      >
        <div style={props.style} className={cx(tooltipStyle, props.className)}>
          <DefaultTooltipTextAnimation toggle={Boolean(state.anchorEl)} delay={'100ms'}>
            {props.content}
          </DefaultTooltipTextAnimation>
        </div>
      </Popover>
      <span style={{ display: 'inline-block' }}>
        {{}.toString.call(props.children) === '[object Function]' ? (
          (props.children as ChildFunction)({
            open: handleTooltipOpen,
            close: handleTooltipClose
          })
        ) : (
          <span
            className={css({ display: 'inline-block' })}
            ref={childContainer}
            onMouseEnter={() =>
              !props.disableHoverListener && handleTooltipOpen(childContainer.current)
            }
            onMouseLeave={() => !props.disableHoverListener && handleTooltipClose()}
          >
            {props.children as React.ReactElement<any>}
          </span>
        )}
      </span>
    </>
  );
};

const DefaultTooltipTextAnimation: ToggleAnimation = ({ toggle, children, delay }) => (
  <div
    className={css({
      opacity: toggle ? 1 : 0.5,
      transform: toggle ? 'translateY(0px)' : 'translateY(20px)',
      transition: `opacity 400ms ease${delay ? ' ' + delay : ''}, transform 300ms ease${
        delay ? ' ' + delay : ''
      }`
    })}
  >
    {children}
  </div>
);

export default Tooltip;
