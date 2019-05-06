import * as React from 'react';
import { css } from 'emotion';

import Menu from '../../../molecules/Menu';
import Button from '../../../atoms/Button';
import { useOverride } from '../../../../lib/theme';

interface IContextMenuControllerActiveState {
  anchorEl: HTMLElement;
  mousePosition: {
    x: number;
    y: number;
  } | null;
}

interface IContextMenuControllerViewModel {
  menuComponent: (
    menuController: {
      activeState: IContextMenuControllerActiveState | null;
      isOpen: boolean;
      close: () => void;
    }
  ) => JSX.Element;
  children: (
    contextController: {
      open: (element: HTMLElement, mousePosition?: { x: number; y: number }) => void;
      isOpen: boolean;
      close: () => void;
    }
  ) => JSX.Element;
}

type ContextMenuControllerProps = IContextMenuControllerViewModel;

export const ContextMenuController: React.FC<ContextMenuControllerProps> = props => {
  const [active, setActive] = React.useState<IContextMenuControllerActiveState | null>(null);

  const handleOpen = (element: HTMLElement, mousePosition?: { x: number; y: number }) => {
    setActive({ anchorEl: element, mousePosition: mousePosition || null });
  };

  const handleClose = () => {
    setActive(null);
  };

  return (
    <>
      {props.children({
        open: handleOpen,
        isOpen: Boolean(active),
        close: handleClose
      })}
      {props.menuComponent({
        activeState: active,
        isOpen: Boolean(active),
        close: handleClose
      })}
    </>
  );
};

interface IContextMenuViewModel {
  options: Array<{ option: React.ReactNode; callback: () => void }>;
  style?: React.CSSProperties;
  className?: string;
}

export type ContextMenuProps = IContextMenuViewModel;

export const contextMenuOverrideName = 'contextMenu';

const ContextMenu: React.FC<ContextMenuProps> = props => {
  // FIXME: add when moved out of incubating
  // const Override = useOverride(contextMenuOverrideName);
  // if (Override) {
  //   return <Override {...props} />;
  // }

  return (
    <ContextMenuController
      menuComponent={({ isOpen, activeState, close }) => (
        <Menu
          anchorEl={activeState && activeState.anchorEl}
          onClose={() => {
            console.log('onClose');
            console.log(['isOpen', isOpen]);
            close();
          }}
          anchorReference={'anchorEl'}
          placement={{ vertical: 'center', horizontal: 'left' }}
          {...activeState &&
            activeState.mousePosition && {
              anchorPosition: {
                top: activeState.mousePosition.y,
                left: activeState.mousePosition.x
              },
              anchorReference: 'anchorPosition'
            }}
          style={props.style}
          className={props.className}
        >
          {props.options.map((option, i) => (
            <Button
              key={i}
              onClick={() => {
                option.callback();
                close();
              }}
              className={css({ borderRadius: 0 })}
            >
              {option.option}
            </Button>
          ))}
        </Menu>
      )}
    >
      {({ open }) => (
        <div
          onContextMenu={e => {
            open(e.currentTarget, { x: e.clientX, y: e.clientY });
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          {props.children}
        </div>
      )}
    </ContextMenuController>
  );
};

export default ContextMenu;
