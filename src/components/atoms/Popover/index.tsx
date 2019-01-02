import * as React from 'react';
import { Popper } from 'react-popper';
import * as PopperJS from 'popper.js';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { css, cx } from 'emotion';
import { Transition, animated, config as springConfig } from 'react-spring';
import { DisplayToggleAnimation, ToggleAnimation } from '../../../lib/animation';

export interface TooltipPlacement {
  horizontal?: 'left' | 'center' | 'right';
  vertical?: 'top' | 'center' | 'bottom';
}

export interface AnchorPosition {
  top: number;
  left: number;
}

export type AnchorReference = 'anchorEl' | 'anchorPosition' | 'none';

interface IPopoverViewModel {
  anchorReference?: AnchorReference;
  anchorEl: null | HTMLElement;
  placement?: TooltipPlacement;
  anchorPosition?: AnchorPosition;

  arrowColor?: string;

  animationComponent?: ToggleAnimation;

  style?: React.CSSProperties;
  className?: string;
}

interface IPopoverActions {
  onClose?: () => void;
}

type PopoverProps = IPopoverViewModel & IPopoverActions;

const Popover: React.SFC<PopoverProps> = props => {
  let referenceElement: PopperJS.ReferenceObject | undefined = undefined;

  switch (props.anchorReference) {
    case 'anchorEl':
      referenceElement = props.anchorEl || undefined;
      break;
    case 'anchorPosition':
      referenceElement = props.anchorPosition
        ? {
            getBoundingClientRect: () => ({
              top: props.anchorPosition!.top,
              left: props.anchorPosition!.left,
              bottom: props.anchorPosition!.top,
              right: props.anchorPosition!.left,
              width: 0,
              height: 0
            }),
            clientWidth: 0,
            clientHeight: 0
          }
        : undefined;
      break;
    case undefined:
      referenceElement = props.anchorEl || undefined;
      break;
  }

  const isOpen = Boolean(referenceElement);

  const contentMargin = !props.arrowColor ? '8px' : '0px';

  const contentStyle = css`
    &[data-placement*='bottom'] {
      margin-top: -${contentMargin};
    }
    &[data-placement*='top'] {
      margin-bottom: -${contentMargin};
    }
    &[data-placement*='right'] {
      margin-left: -${contentMargin};
    }
    &[data-placement*='left'] {
      margin-right: -${contentMargin};
    }
  `;

  const Animation = props.animationComponent || DisplayToggleAnimation;

  return (
    <div className={css({ display: 'inline-block' })}>
      <Popper referenceElement={referenceElement} placement={placementConverter(props.placement)}>
        {({ ref, style, placement, arrowProps }) => (
          <div
            ref={ref}
            style={style}
            className={cx(contentStyle, css({ pointerEvents: isOpen ? 'auto' : 'none' }))}
            data-placement={placement}
          >
            <Animation toggle={isOpen}>
              <ClickAwayListener onClickAway={() => isOpen && props.onClose && props.onClose()}>
                {props.children}
                {props.arrowColor && (
                  <div
                    data-placement={placement}
                    ref={arrowProps.ref}
                    style={arrowProps.style}
                    className={getArrowStyle(props.arrowColor)}
                  />
                )}
              </ClickAwayListener>
            </Animation>
          </div>
        )}
      </Popper>
    </div>
  );
};

const getArrowStyle = (arrowColor: string) => {
  const arrowWidth = '7.5px';
  const arrowHeight = '7.5px';

  const arrowOffset = '5.5px';

  return css`
    position: absolute;

    &[data-placement*='bottom'] {
      top: 0;
      left: 0;
      margin-top: -${arrowOffset};
      &::before {
        border-width: 0 ${arrowWidth} ${arrowHeight} ${arrowWidth};
        border-color: transparent transparent ${arrowColor} transparent;
      }
    }
    &[data-placement*='top'] {
      bottom: 0;
      left: 0;
      margin-bottom: -${arrowOffset};
      &::before {
        border-width: ${arrowHeight} ${arrowWidth} 0 ${arrowWidth};
        border-color: ${arrowColor} transparent transparent transparent;
      }
    }
    &[data-placement*='right'] {
      left: 0;
      margin-left: -${arrowOffset};
      &::before {
        border-width: ${arrowWidth} ${arrowHeight} ${arrowWidth} 0;
        border-color: transparent ${arrowColor} transparent transparent;
      }
    }
    &[data-placement*='left'] {
      right: 0;
      margin-right: -${arrowOffset};
      &::before {
        border-width: ${arrowWidth} 0 ${arrowWidth} ${arrowHeight};
        border-color: transparent transparent transparent ${arrowColor};
      }
    }

    &::before {
      content: '';
      margin: auto;
      display: block;
      width: 0;
      height: 0;
      border-style: solid;
    }
  `;
};

const placementConverter = (placement?: TooltipPlacement): PopperJS.Placement => {
  let prefix = 'auto';
  let suffix = null;

  if (placement) {
    switch (placement.vertical) {
      case 'top':
        prefix = 'top';
        break;
      case 'bottom':
        prefix = 'bottom';
        break;
    }

    switch (placement.horizontal) {
      case 'left':
        if (placement.vertical) {
          suffix = 'start';
        } else {
          prefix = 'left';
        }

        break;
      case 'right':
        if (placement.vertical) {
          suffix = 'end';
        } else {
          prefix = 'right';
        }
        break;
    }
  }

  return (prefix + (suffix ? '-' + suffix : '')) as any;
};

export default Popover;
