import * as React from 'react';
import { useContext, useEffect, useState } from 'react';
import { css, cx } from 'emotion';
import { useTransition, animated } from 'react-spring';

import CloseIcon from '@material-ui/icons/Close';
import Card from '../Card';
import Heading, { EHeadingType } from '../Typography/Heading';
import Text, { ETextType } from '../Typography/Text';
import Button, { EButtonType } from '../Button';
import { useRef } from 'react';
import { useOverride } from '../../../lib/theme';


let id = 0;

type MessageElement = (onClose: () => void) => JSX.Element;

interface IMessage {
  key: number;
  msgElement: MessageElement;
  timeout?: number;
}

export type AddMessageFunc = (msgElement: MessageElement, timeout?: number | null) => void;

export const MessageHub: React.FC<{ children: (input: AddMessageFunc) => void; }> = props => {
  const [refMap] = useState<WeakMap<IMessage, HTMLElement>>(() => new WeakMap());
  const [dismissMap] = useState<WeakMap<IMessage, () => void>>(() => new WeakMap());
  const [items, setItems] = useState<Array<IMessage>>([]);

  const transitions = useTransition(items, item => item.key, {
    from: { opacity: 0, height: 0, marginTop: 0 },
    enter: item => async (next: any) => {
      const timer = item.timeout && setTimeout(() => {
        setItems(state => state.filter(i => i.key !== item.key));
      },item.timeout);

      dismissMap.set(item, () => {
        timer && clearTimeout(timer);
        setItems(state => state.filter(i => i.key !== item.key));
      });

      await next({ opacity: 1, height: refMap.get(item)!.offsetHeight, marginTop: 5 });
    },
    leave: {
      opacity: 0,
      height: 0,
      marginTop: 0
    },
    config: { tension: 125, friction: 20, precision: 0.1 }
  });

  useEffect(() => void props.children((msgElement, timeout = 5_000) => setItems(state => [...state, { key: id++, msgElement, timeout: timeout || undefined }])), []);

  return (
    <div className={css({
      position: "fixed",
      zIndex: 1000,
      width: "0 auto",
      top: 'unset',
      bottom: '30px',
      margin: '0 auto',
      left: 30,
      right: 30,
      display: 'flex',
      flexDirection: 'column',
      pointerEvents: 'none',
      alignItems: `flex-end`,
      '@media (max-width: 680px)': {
        alignItems: 'center'
      }
    })}>
      {transitions.map(({ key, item, props: style }) => {
        const Message = item.msgElement(() => {
          dismissMap.has(item) && dismissMap.get(item)!();
        });

        return (
          <animated.div key={key} style={style} className={css({
            boxSizing: 'border-box',
            position: 'relative',
            overflow: 'hidden',
            pointerEvents: 'auto'
          })}>
            <div ref={ref => ref && refMap.set(item, ref)}>
              { Message }
            </div>
          </animated.div>
        );
      })}
    </div>
  )
};

export const MessageContext = React.createContext<AddMessageFunc>(() => {});

export const MessageProvider: React.FC = props => {
  const ref = useRef<AddMessageFunc | null>(null);
  const [state, setState] = useState<{ value: AddMessageFunc | null }>({ value: null });

  useEffect(() => void setState({ value: ref.current }));

  return <>
    <MessageContext.Provider value={state.value || (() => {})}>
      {props.children}
    </MessageContext.Provider>
    <MessageHub children={add => {
      ref.current = add;
    }} />
  </>
};

export const MessageConsumer = MessageContext.Consumer;

export const useMessage = () => {
  return useContext(MessageContext);
};

interface ISnackbarViewModel {
  heading: React.ReactChild;
  description: React.ReactChild;
  dismissable?: boolean;

  style?: React.CSSProperties;
  className?: string;
}

interface ISnackbarActions {
  onClose?(): void;
}

export type SnackbarProps = ISnackbarViewModel & ISnackbarActions;

export const snackbarOverrideName = 'snackbar';

export const Snackbar: React.FC<SnackbarProps> = props => {
  const Override = useOverride(snackbarOverrideName);
  if (Override) {
    return <Override {...props}/>;
  }

  return (
    <Card
      style={props.style}
      className={cx(
        css({
          padding: 11,
          maxWidth: 400,
          minHeight: 45,
          position: 'relative',
          display: 'flex',
          justifyContent: 'space-between'
        }),
        props.className
      )}
    >
      <div className={css({ marginRight: 20 })}>
        <Heading type={EHeadingType.H6} className={css({ marginBottom: 0 })}>
          { props.heading }
        </Heading>
        <Text type={ETextType.Caption} className={css({ marginBottom: 0 })}>
          { props.description }
        </Text>
      </div>
      <div
        className={css({
          flexShrink: 0,
          '> button': { margin: 0, marginLeft: 5 },
          display: 'flex',
          alignItems: 'center',
          marginRight: props.dismissable ? 32 : undefined
        })}
      >
        { props.children }
      </div>
      {props.dismissable && (
        <Button
          type={EButtonType.Highlight}
          className={css({ padding: '2px 2px 0px 2px', position: 'absolute', top: 2, right: 2 })}
          onClick={e => {
            e.stopPropagation();
            props.onClose && props.onClose();
          }}
        >
          <CloseIcon />
        </Button>
      )}
    </Card>
  );
};
