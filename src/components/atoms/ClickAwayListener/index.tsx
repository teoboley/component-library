import * as React from 'react';
import * as ReactDOM from 'react-dom';
import EventListener, { EventListenerProps } from 'react-event-listener';

function ownerDocument(node: Element | Text) {
  return (node && node.ownerDocument) || document;
}

function setRef(ref: any, value: any) {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}

function useForkRef<T>(refA: React.Ref<T>, refB: React.Ref<T>) {
  /**
   * This will create a new function if the ref props change.
   * This means react will call the old forkRef with `null` and the new forkRef
   * with the ref. Cleanup naturally emerges from this behavior
   */
  return React.useCallback(
    refValue => {
      setRef(refA, refValue);
      setRef(refB, refValue);
    },
    [refA, refB]
  );
}

function useMountedRef() {
  const mountedRef = React.useRef(false);
  React.useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  return mountedRef;
}

interface IClickAwayListenerViewModel {
  children: any; // FIXME
  mouseEvent?: 'onClick' | 'onMouseDown' | 'onMouseUp' | false;
  touchEvent?: 'onTouchStart' | 'onTouchEnd' | false;
}

interface IClickAwayListenerActions {
  onClickAway: (e: any) => void;
}

type ClickAwayListenerProps = IClickAwayListenerViewModel & IClickAwayListenerActions;

const ClickAwayListener: React.FC<ClickAwayListenerProps> = props => {
  const {
    children,
    mouseEvent = 'onMouseUp',
    touchEvent = 'onTouchEnd',
    onClickAway,
    ...other
  } = props;
  const mountedRef = useMountedRef();
  const movedRef = React.useRef(false);

  const nodeRef = React.useRef<Element | Text | null>(null);
  // can be removed once we drop support for non ref forwarding class components
  const handleOwnRef = React.useCallback(ref => {
    nodeRef.current = ReactDOM.findDOMNode(ref);
  }, []);
  const handleRef = useForkRef(children.ref, handleOwnRef);

  const handleClickAway = React.useCallback(
    event => {
      // Ignore events that have been `event.preventDefault()` marked.
      if (event.defaultPrevented) {
        return;
      }

      // IE 11 support, which trigger the handleClickAway even after the unbind
      if (!mountedRef.current) {
        return;
      }

      // Do not act if user performed touchmove
      if (movedRef.current) {
        movedRef.current = false;
        return;
      }

      const { current: node } = nodeRef;
      // The child might render null.
      if (!node) {
        return;
      }

      const doc = ownerDocument(node);

      if (
        doc.documentElement &&
        doc.documentElement.contains(event.target) &&
        !node.contains(event.target)
      ) {
        onClickAway(event);
      }
    },
    [mountedRef, onClickAway]
  );

  const handleTouchMove = React.useCallback(() => {
    movedRef.current = true;
  }, []);

  const listenerProps: Partial<EventListenerProps<any>> = {};
  if (mouseEvent !== false) {
    listenerProps[mouseEvent] = handleClickAway;
  }
  if (touchEvent !== false) {
    listenerProps[touchEvent] = handleClickAway;
    listenerProps.onTouchMove = handleTouchMove;
  }

  return (
    <>
      {React.cloneElement(children, { ref: handleRef })}
      <EventListener target="document" {...listenerProps} {...other} />
    </>
  );
};

export default ClickAwayListener;
