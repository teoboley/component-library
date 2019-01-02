import * as React from 'react';
import { css, cx } from 'emotion';
import CloseIcon from '@material-ui/icons/Close';
import { Transition, animated, config as springConfig, Trail } from 'react-spring';

import ModalContainer from '../../atoms/ModalContainer';
import Card from '../../atoms/Card';
import Button from '../../atoms/Button';
import Heading, { EHeadingType } from '../../atoms/Typography/Heading';

interface IModalViewModel {
  isOpen: boolean;

  style?: React.CSSProperties;
  className?: string;
}

interface IModalActions {
  onClose?: () => void;
}

type ModalProps = IModalViewModel & IModalActions;

const Modal: React.SFC<ModalProps> = props => {
  return (
    <ModalContainer isOpen={props.isOpen} onClose={props.onClose} style={{ maxWidth: '90%' }}>
      <div>
        <Button
          className={css({ position: 'absolute', right: 10, top: 10, padding: '5px 5px 3px 5px' })}
          onClick={props.onClose}
        >
          <CloseIcon />
        </Button>
        <Card
          style={props.style}
          className={cx(css({ padding: 35, minWidth: 400 }), props.className)}
        >
          <Heading type={EHeadingType.H2}>
            <Transition
              native
              items={'Yikes.'.split('').map((item, i) => ({ key: i, text: item }))}
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
          </Heading>
          {props.children}
        </Card>
      </div>
    </ModalContainer>
  );
};

export default Modal;
