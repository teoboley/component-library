import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Popper } from 'react-popper';
import * as PopperJS from 'popper.js';
import { css, cx } from 'emotion';
import { ToggleAnimation } from '../../../lib/animation';
import { useOverride } from '../../../lib/theme';
import ClickAwayListener from '../ClickAwayListener';

declare global {
  interface Window {
    tooltipElement: HTMLElement | null;
  }
}

window.tooltipElement = null;

if (!window.tooltipElement) {
  window.tooltipElement = document.createElement('div');
  document.body.appendChild(window.tooltipElement);
}

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
  placementEnforced?: boolean;

  animationComponent?: ToggleAnimation;

  style?: React.CSSProperties;
  className?: string;
}

interface IPopoverActions {
  onClose?: () => void;
}

export type PopoverProps = IPopoverViewModel & IPopoverActions;

export const popoverOverrideName = 'popover';

const Popover: React.FC<PopoverProps> = props => {
  const Override = useOverride(popoverOverrideName);
  if (Override) {
    return <Override {...props} />;
  }

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

  const Animation = props.animationComponent || DefaultPopoverAnimation;

  return (
    <div className={css({ display: 'inline-block' })}>
      {ReactDOM.createPortal(
        <Popper
          referenceElement={referenceElement}
          placement={placementConverter(props.placement)}
          modifiers={
            (props.placementEnforced && {
              flip: {
                enabled: false
              },
              preventOverflow: {
                escapeWithReference: true
              }
            }) ||
            undefined
          }
        >
          {({ ref, style, placement, arrowProps }) => (
            <div
              ref={ref}
              style={style}
              className={cx(contentStyle, css({ pointerEvents: isOpen ? 'auto' : 'none' }))}
              data-placement={placement}
            >
              <Animation toggle={isOpen}>
                <ClickAwayListener
                  onClickAway={
                    isOpen
                      ? e => {
                          console.log('CLICK AWAY LISTENER, IS OPEN: ' + isOpen);
                          props.onClose && props.onClose();
                          /*e.preventDefault();
                e.stopPropagation();*/
                        }
                      : () => null
                  }
                >
                  <div>
                    {props.children}

                    {props.arrowColor && (
                      <div
                        data-placement={placement}
                        ref={arrowProps.ref}
                        style={arrowProps.style}
                        className={getArrowStyle(props.arrowColor)}
                      />
                    )}
                  </div>
                </ClickAwayListener>
              </Animation>
            </div>
          )}
        </Popper>,
        window.tooltipElement!
      )}
    </div>
  );
};

const DefaultPopoverAnimation: ToggleAnimation = ({ toggle, children, delay }) => (
  <div
    className={css({
      opacity: toggle ? 1 : 0,
      transform: toggle ? 'scale(1)' : 'scale(0)',
      transition: `opacity 300ms ease${delay ? ' ' + delay : ''}, transform 300ms ease${
        delay ? ' ' + delay : ''
      }`
    })}
  >
    {children}
  </div>
);

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
