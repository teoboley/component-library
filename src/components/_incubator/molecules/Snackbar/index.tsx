import * as React from 'react';
import { css, cx } from 'emotion';
import { useTransition, animated } from 'react-spring';
import CloseIcon from '@material-ui/icons/Close';

import Card from '../../../atoms/Card';
import Heading, { EHeadingType } from '../../../atoms/Typography/Heading';
import Text, { ETextType } from '../../../atoms/Typography/Text';
import Button, { EButtonType } from '../../../atoms/Button';

let id = 0;

type MessageElement = (onClose: () => void) => JSX.Element;

interface IMessage {
  key: number;
  msgElement: MessageElement;
  timeout?: number;
}

export enum EMessageLocation {
  TopLeft = 'TopLeft',
  TopCenter = 'TopCenter',
  TopRight = 'TopRight',
  BottomLeft = 'BottomLeft',
  BottomCenter = 'BottomCenter',
  BottomRight = 'BottomRight'
}

export type AddMessageFunc = (
  msgElement: MessageElement,
  location?: EMessageLocation,
  timeout?: number | null
) => void;

export const messageHubOverrideName = 'messageHub';

export interface IMessageHubProps {
  children: (input: AddMessageFunc) => void;
}

const useMessageList = () => {
  const [refMap] = React.useState<WeakMap<IMessage, HTMLElement>>(() => new WeakMap());
  const [dismissMap] = React.useState<WeakMap<IMessage, () => void>>(() => new WeakMap());
  const [items, setItems] = React.useState<IMessage[]>([]);

  const transitions = useTransition(items, item => item.key, {
    from: { opacity: 0, height: 0, marginTop: 0 },
    enter: (((item: IMessage) => async (next: any) => {
      const timer =
        item.timeout &&
        setTimeout(() => {
          setItems(state => state.filter(i => i.key !== item.key));
        }, item.timeout);

      dismissMap.set(item, () => {
        timer && clearTimeout(timer);
        setItems(state => state.filter(i => i.key !== item.key));
      });

      await next({ opacity: 1, height: refMap.get(item)!.offsetHeight, marginTop: 5 });
    }) as any),
    leave: {
      opacity: 0,
      height: 0,
      marginTop: 0
    },
    config: { tension: 125, friction: 20, precision: 0.1 }
  });

  return {
    refMap,
    dismissMap,
    setItems,
    transitions
  };
};

export const MessageHub: React.FC<IMessageHubProps> = props => {
  // FIXME: add when moved out of incubating
  // const Override = useOverride(messageHubOverrideName);
  // if (Override) {
  //   return <Override {...props}/>;
  // }

  const { refMap, dismissMap, setItems, transitions } = useMessageList();

  React.useEffect(
    () =>
      void props.children((msgElement, location = EMessageLocation.BottomRight, timeout = 5000) => {
        // TODO: add to specific item list based on location
        return setItems(state => [
          ...state,
          { key: id++, msgElement, timeout: timeout || undefined }
        ]);
      }),
    []
  );

  const MessageSection: React.FC = messageSectionProps => {
    return (
      <div
        className={css({
          display: 'flex',
          flexDirection: 'column',
          alignItems: `flex-end`,
          '@media (max-width: 680px)': {
            alignItems: 'center'
          }
        })}
      >
        {transitions.map(({ key, item, props: style }) => {
          const Message = item.msgElement(() => {
            dismissMap.has(item) && dismissMap.get(item)!();
          });

          return (
            <animated.div
              key={key}
              style={style}
              className={css({
                boxSizing: 'border-box',
                position: 'relative',
                overflow: 'hidden',
                pointerEvents: 'auto'
              })}
            >
              <div ref={ref => ref && refMap.set(item, ref)}>{Message}</div>
            </animated.div>
          );
        })}
      </div>
    );
  };

  return (
    <div
      className={css({
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
        position: 'fixed',
        zIndex: 1000,
        // width: "0 auto",
        // top: 'unset',
        top: 30,
        bottom: 30,
        left: 30,
        right: 30,

        pointerEvents: 'none'
      })}
    >
      <div className={css({ width: '33%', height: '50%', display: 'inline-block' })}>
        <MessageSection />
      </div>
      <div className={css({ width: '33%', height: '50%', display: 'inline-block' })}>
        <MessageSection />
      </div>
      <div className={css({ width: '33%', height: '50%', display: 'inline-block' })}>
        <MessageSection />
      </div>
      <div className={css({ width: '33%', height: '50%', display: 'inline-block' })}>
        <MessageSection />
      </div>
      <div className={css({ width: '33%', height: '50%', display: 'inline-block' })}>
        <MessageSection />
      </div>
      <div className={css({ width: '33%', height: '50%', display: 'inline-block' })}>
        <MessageSection />
      </div>
    </div>
  );
};

export const MessageContext = React.createContext<AddMessageFunc>(() => null);

export const MessageProvider: React.FC<{
  children: JSX.Element | ((addMessageFunc: AddMessageFunc) => JSX.Element);
}> = props => {
  const ref = React.useRef<AddMessageFunc | null>(null);
  const [state, setState] = React.useState<{ value: AddMessageFunc | null }>({ value: null });

  React.useEffect(() => void setState({ value: ref.current }));

  return (
    <>
      <MessageContext.Provider value={state.value || (() => null)}>
        {isFunction(props.children) ? props.children(ref.current!) : props.children}
      </MessageContext.Provider>
      <MessageHub
        children={add => {
          ref.current = add;
        }}
      />
    </>
  );
};

export const MessageConsumer = MessageContext.Consumer;

export const useMessage = () => {
  return React.useContext(MessageContext);
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
  // FIXME: add when moved out of incubating
  // const Override = useOverride(snackbarOverrideName);
  // if (Override) {
  //   return <Override {...props} />;
  // }

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
          {props.heading}
        </Heading>
        <Text type={ETextType.Caption} className={css({ marginBottom: 0 })}>
          {props.description}
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
        {props.children}
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

// tslint:disable-next-line:ban-types
function isFunction(functionToCheck: any): functionToCheck is Function {
  return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}
