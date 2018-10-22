import * as React from "react";

interface IContextMenuViewModel {
  menuComponent: (menuController: { anchorElement: HTMLElement | null; isOpen: boolean; close: () => void }) => JSX.Element;
  children: (contextController: { open: (element: HTMLElement) => void; isOpen: boolean; close: () => void }) => JSX.Element;
}

type ContextMenuProps = IContextMenuViewModel;

interface IContextMenuState {
  anchorEl: HTMLElement | null;
}

export default class ContextMenu extends React.Component<ContextMenuProps, IContextMenuState> {
  readonly state = {
    anchorEl: null
  };

  constructor(props: ContextMenuProps) {
    super(props);

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen(element: HTMLElement) {
    this.setState({ anchorEl: element });
  };

  handleClose() {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <>
        { this.props.children({ open: this.handleOpen, isOpen: Boolean(anchorEl), close: this.handleClose }) }
        { this.props.menuComponent({ anchorElement: this.state.anchorEl, isOpen: Boolean(anchorEl), close: this.handleClose }) }
      </>
    );
  }
}