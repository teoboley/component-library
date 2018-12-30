import * as React from 'react';
import * as Modal from 'react-modal';
import {css} from "emotion";

interface IModalContainerViewModel {
  isOpen: boolean;

  style?: React.CSSProperties;
  className?: string;
}

interface IModalContainerActions {
  onClose?: () => void;
}

type ModalContainerProps = IModalContainerViewModel & IModalContainerActions;

const ModalContainer: React.SFC<ModalContainerProps> = props => {
  return (
    <>
      <style>{
        // language=CSS
        `
        .ReactModal__Content > * {
          opacity: 0;
          transform: scale(0);
          transition: transform 300ms 100ms, opacity 300ms;
        }

        .ReactModal__Content--after-open > * {
          opacity: 1;
          transform: scale(1);
        }

        .ReactModal__Content--before-close > * {
          opacity: 0;
          transform: scale(0);
        }

        .ReactModal__Overlay {
          background-color: rgba(0, 0, 0, 0);
          transition: background-color 500ms;
        }

        .ReactModal__Overlay--after-open {
          background-color: rgba(0, 0, 0, 0.25);
        }

        .ReactModal__Overlay--before-close {
          background-color: rgba(0, 0, 0, 0);
        }
      `}</style>
      <Modal
        isOpen={props.isOpen}
        onRequestClose={props.onClose}
        overlayClassName={css({
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        })}
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'transparent',
            overflow: 'hidden',
            padding: 0,
            border: 'none',
            borderRadius: 0,
            ...props.style
          }
        }}
        className={props.className}
        closeTimeoutMS={1000}
      >
        <div>
          {props.children}
        </div>
      </Modal>
    </>
  );
};

export default ModalContainer;