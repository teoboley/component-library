import * as React from "react";
import { Popper } from 'react-popper';
import * as PopperJS from "popper.js";
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import {css} from "emotion";

export interface AnchorOrigin {
  horizontal: 'left' | 'center' | 'right' | number;
  vertical: 'top' | 'center' | 'bottom' | number;
}

export interface AnchorPosition {
  top: number;
  left: number;
}

export type AnchorReference = 'anchorEl' | 'anchorPosition' | 'none';

interface IPopoverViewModel {
  anchorEl: null | HTMLElement;
  anchorOrigin?: AnchorOrigin;
  anchorPosition?: AnchorPosition;
  anchorReference?: AnchorReference;

  style?: React.CSSProperties;
  className?: string;
}

interface IPopoverActions {
  onClose?: () => void;
}

type PopoverProps = IPopoverViewModel & IPopoverActions;

const Popover: React.SFC<PopoverProps> = props => {
  let referenceElement: PopperJS.ReferenceObject | undefined = undefined;

  if (props.anchorReference) {
    switch (props.anchorReference) {
      case 'anchorEl':
        referenceElement = props.anchorEl || undefined;
        break;
      case 'anchorPosition':
        referenceElement = props.anchorPosition ? {
          getBoundingClientRect: () => ({
            top: props.anchorPosition!.top,
            left: props.anchorPosition!.left,
            bottom: props.anchorPosition!.top,
            right: props.anchorPosition!.left,
            width: 0,
            height: 0,
          }),
          clientWidth: 0,
          clientHeight: 0
        } : undefined;
        break;
    }
  }

  const open = Boolean(referenceElement);

  return <Popper referenceElement={referenceElement}>
    {({ref, style, placement, arrowProps}) =>
      <ClickAwayListener onClickAway={() => open && props.onClose && props.onClose()}>
        <div ref={ref} style={style} className={css({ opacity: open ? 1 : 0, pointerEvents: open ? 'auto' : 'none' })} data-placement={placement}>
            { props.children }
            {/*<div ref={arrowProps.ref} style={arrowProps.style} />*/}
        </div>
      </ClickAwayListener>
    }
  </Popper>;
};

export default Popover;