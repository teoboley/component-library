import * as React from "react";

import Menu from "../../molecules/Menu";
import Button from "../../atoms/Button";

interface IContextMenuControllerActiveState {
  anchorEl: HTMLElement;
  mousePosition: {
    x: number;
    y: number;
  } | null;
}

interface IContextMenuControllerViewModel {
  menuComponent: (menuController: { activeState: IContextMenuControllerActiveState | null; isOpen: boolean; close: () => void }) => JSX.Element;
  children: (contextController: { open: (element: HTMLElement, mousePosition?: { x: number; y: number; }) => void; isOpen: boolean; close: () => void }) => JSX.Element;
}

type ContextMenuControllerProps = IContextMenuControllerViewModel;

interface IContextMenuControllerState {
  active: IContextMenuControllerActiveState | null;
}

export class ContextMenuController extends React.Component<ContextMenuControllerProps, IContextMenuControllerState> {
  readonly state = {
    active: null
  };

  constructor(props: ContextMenuControllerProps) {
    super(props);

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen(element: HTMLElement, mousePosition?: { x: number; y: number; }) {
    this.setState({ active: { anchorEl: element, mousePosition: mousePosition || null } });
  };

  handleClose() {
    this.setState({ active: null });
  };

  render() {
    const { active } = this.state;

    return (
      <>
        { this.props.children({ open: this.handleOpen, isOpen: Boolean(active), close: this.handleClose }) }
        { this.props.menuComponent({ activeState: this.state.active, isOpen: Boolean(active), close: this.handleClose }) }
      </>
    );
  }
}

interface IContextMenuViewModel {
  options: Array<{ option: React.ReactNode; callback: () => void; }>;
  style?: React.CSSProperties;
  className?: string;
}

type ContextMenuProps = IContextMenuViewModel;

const ContextMenu: React.SFC<ContextMenuProps> = props => {
  return (
        <ContextMenuController menuComponent={({isOpen, activeState, close}) =>
          <Menu
            anchorEl={activeState && activeState.anchorEl}
            onClose={close}

            anchorReference={'anchorEl'}
            anchorOrigin={{vertical: 'center', horizontal: 'center'}}

            {...(activeState && activeState.mousePosition && {
              anchorPosition: {top: activeState.mousePosition.y, left: activeState.mousePosition.x},
              anchorReference: 'anchorPosition'
            })}

            style={props.style}
            className={props.className}
          >
            {props.options.map((option, i) =>
              <Button key={i} onClick={() => {
                option.callback();
                close();
              }}>{option.option}</Button>
            )}
          </Menu>
        }>
          {({open}) =>
            <span onContextMenu={e => {
              e.preventDefault();
              e.stopPropagation();
              open(e.currentTarget, {x: e.clientX, y: e.clientY});
            }}>
          {props.children}
        </span>
          }
        </ContextMenuController>
  );
};

export default ContextMenu;