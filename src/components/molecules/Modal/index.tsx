import * as React from 'react';
import { css, cx } from 'emotion';
import CloseIcon from '@material-ui/icons/Close';

import ModalContainer from '../../atoms/ModalContainer';
import Card from '../../atoms/Card';
import Button from '../../atoms/Button';
import Heading, { EHeadingType } from '../../atoms/Typography/Heading';
import { DisplayTextAnimation } from '../../../lib/animation';
import { useOverride } from '../../../lib/theme';

interface IModalViewModel {
  isOpen: boolean;

  style?: React.CSSProperties;
  className?: string;
}

interface IModalActions {
  onClose?: () => void;
}

export type ModalProps = IModalViewModel & IModalActions;

export const modalOverrideName = 'modal';

const Modal: React.FC<ModalProps> = props => {
  const Override = useOverride(modalOverrideName);
  if (Override) {
    return <Override {...props} />;
  }

  const HeadingAnimation = DisplayTextAnimation;

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
            <HeadingAnimation text={'Yikes'} />
          </Heading>
          {props.children}
        </Card>
      </div>
    </ModalContainer>
  );
};

export default Modal;
