import * as React from 'react';
import { CSSProperties } from 'react';

import Popover, { TooltipPlacement } from '../Popover';
import { css, cx } from 'emotion';
import { getBWContrastingColor, ThemeConsumer } from '../../../lib/theme';
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

class Tooltip extends React.Component<TooltipProps, TooltipState> {
  private childContainer: HTMLSpanElement | null;

  state = {
    anchorEl: null
  };

  constructor(props: TooltipProps) {
    super(props);
    this.handleTooltipClose = this.handleTooltipClose.bind(this);
    this.handleTooltipOpen = this.handleTooltipOpen.bind(this);
  }

  handleTooltipClose() {
    this.setState({ anchorEl: null });
  }

  handleTooltipOpen(anchorEl?: any) {
    this.setState({ anchorEl: anchorEl || null });
  }

  render() {
    const color =
      this.props.color ||
      (this.props.backgroundColor ? getBWContrastingColor(this.props.backgroundColor) : 'black');
    const backgroundColor = this.props.backgroundColor || 'white';

    return (
      <ThemeConsumer>
        {theme => {
          const tooltipStyle = css({
            ...theme.typography.tooltip,
            backgroundColor,
            borderRadius: 3,
            color,
            padding: '5px 7px',
            maxWidth: this.props.maxWidth || 200
          });

          return (
            <>
              <Popover
                anchorEl={this.state.anchorEl}
                arrowColor={this.props.withArrow ? backgroundColor : undefined}
                placement={this.props.placement || { vertical: 'top' }}
                animationComponent={DefaultPopoverAnimation}
              >
                <div style={this.props.style} className={cx(tooltipStyle, this.props.className)}>
                  {this.props.content}
                </div>
              </Popover>
              <span style={{ display: 'inline-block' }}>
                {{}.toString.call(this.props.children) === '[object Function]' ? (
                  (this.props.children as ChildFunction)({
                    open: this.handleTooltipOpen,
                    close: this.handleTooltipClose
                  })
                ) : (
                  <span
                    className={css({ display: 'inline-block' })}
                    ref={el => (this.childContainer = el)}
                    onMouseEnter={() =>
                      !this.props.disableHoverListener &&
                      this.handleTooltipOpen(this.childContainer)
                    }
                    onMouseLeave={() =>
                      !this.props.disableHoverListener && this.handleTooltipClose()
                    }
                  >
                    {this.props.children as React.ReactElement<any>}
                  </span>
                )}
              </span>
            </>
          );
        }}
      </ThemeConsumer>
    );
  }
}

const DefaultPopoverAnimation: ToggleAnimation = ({ toggle, children }) => (
  <div
    className={css({
      opacity: toggle ? 1 : 0,
      transform: toggle ? 'scale(1)' : 'scale(0)',
      transition: 'opacity 300ms, transform 300ms'
    })}
  >
    {children}
  </div>
);

export default Tooltip;
