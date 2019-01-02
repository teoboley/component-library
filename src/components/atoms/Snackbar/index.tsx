import * as React from 'react';
import { IconButton, Snackbar } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Card from '../Card';
import Heading, { EHeadingType } from '../Typography/Heading';
import Text, { ETextType } from '../Typography/Text';
import { css, cx } from 'emotion';
import Button, { EButtonType } from '../Button';

interface INewSnackbarViewModel {
  dismissable?: boolean;

  style?: React.CSSProperties;
  className?: string;
}

interface INewSnackbarActions {}

type NewSnackbarProps = INewSnackbarViewModel & INewSnackbarActions;

export const NewSnackbar: React.SFC<NewSnackbarProps> = props => {
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
          Snackbar Heading
        </Heading>
        <Text type={ETextType.Caption} className={css({ marginBottom: 0 })}>
          Some description
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
        <Button type={EButtonType.Outline}>Bye</Button>
        <Button type={EButtonType.Contained}>Aight</Button>
      </div>
      {props.dismissable && (
        <Button
          type={EButtonType.Text}
          className={css({ padding: '2px 2px 0px 2px', position: 'absolute', top: 2, right: 2 })}
        >
          <CloseIcon />
        </Button>
      )}
    </Card>
  );
};

interface ISnackbarControllerViewModel {
  children: (
    snackbarController: {
      open: (message: string, actions?: JSX.Element[]) => void;
      isOpen: boolean;
      close: () => void;
    }
  ) => JSX.Element;
}

type SnackbarControllerProps = ISnackbarControllerViewModel;

interface ISnackbarModel {
  message: string;
  actions: JSX.Element[];
  key: number;
}

interface ISnackbarControllerState {
  open: boolean;
  messageInfo: ISnackbarModel;
}

export default class SnackbarController extends React.Component<
  SnackbarControllerProps,
  ISnackbarControllerState
> {
  private queue: ISnackbarModel[] = [];

  readonly state: ISnackbarControllerState = {
    open: false,
    messageInfo: {
      message: '',
      actions: [],
      key: -1
    }
  };

  constructor(props: SnackbarControllerProps) {
    super(props);

    this.handleOpen = this.handleOpen.bind(this);
    this.processQueue = this.processQueue.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleExited = this.handleExited.bind(this);
  }

  handleOpen(message: string, actions: JSX.Element[]) {
    this.queue.push({
      message,
      key: new Date().getTime(),
      actions
    });

    if (this.state.open) {
      // immediately begin dismissing current message
      // to start showing new one
      this.setState({ open: false });
    } else {
      this.processQueue();
    }
  }

  processQueue() {
    if (this.queue.length > 0) {
      this.setState({
        messageInfo: { actions: [], ...(this.queue.shift() || this.state.messageInfo) },
        open: true
      });
    }
  }

  handleClose(event?: React.SyntheticEvent, reason?: string) {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ open: false });
  }

  handleExited() {
    this.processQueue();
  }

  render() {
    const { message, key, actions } = this.state.messageInfo;
    return (
      <>
        {this.props.children({
          open: this.handleOpen,
          isOpen: this.state.open,
          close: this.handleClose
        })}
        <Snackbar
          style={{ marginBottom: 20 }}
          key={key}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
          onExited={this.handleExited}
          ContentProps={{
            'aria-describedby': 'message-id'
          }}
          message={<span id="message-id">{message}</span>}
          action={[
            ...(actions || []),
            <IconButton key="close" aria-label="Close" color="inherit" onClick={this.handleClose}>
              <CloseIcon />
            </IconButton>
          ]}
        />
      </>
    );
  }
}
