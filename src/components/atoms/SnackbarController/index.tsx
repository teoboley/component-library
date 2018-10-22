import * as React from "react";
import { Snackbar, IconButton } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';

interface ISnackbarControllerViewModel {
  children: (snackbarController: { open: (message: string, actions?: JSX.Element[]) => void; isOpen: boolean; close: () => void }) => JSX.Element;
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

export default class SnackbarController extends React.Component<SnackbarControllerProps, ISnackbarControllerState> {
  private queue: ISnackbarModel[] = [];

  readonly state: ISnackbarControllerState = {
    open: false,
    messageInfo: {
      message: "",
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
  };

  processQueue() {
    if (this.queue.length > 0) {
      this.setState({
        messageInfo: { actions: [], ...this.queue.shift() || this.state.messageInfo},
        open: true
      });
    }
  };

  handleClose(event?: React.SyntheticEvent, reason?: string) {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ open: false });
  };

  handleExited() {
    this.processQueue();
  };

  render() {
    const { message, key, actions } = this.state.messageInfo;
    return (
      <>
        { this.props.children({ open: this.handleOpen, isOpen: this.state.open, close: this.handleClose }) }
        <Snackbar
          style={{ marginBottom: 20 }}
          key={key}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
          onExited={this.handleExited}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{message}</span>}
          action={[
            ...(actions || []),
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </>
    );
  }
}