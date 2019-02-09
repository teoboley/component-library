import * as React from 'react';
import Popover, { TooltipPlacement, AnchorPosition, AnchorReference } from '../../atoms/Popover';
import Card from '../../atoms/Card';
import { css } from 'emotion';

interface IMenuViewModel {
  anchorEl: null | HTMLElement;
  placement?: TooltipPlacement;
  anchorPosition?: AnchorPosition;
  anchorReference?: AnchorReference;

  style?: React.CSSProperties;
  className?: string;
}

interface IMenuActions {
  onClose?: () => void;
}

type MenuProps = IMenuViewModel & IMenuActions;

const Menu: React.FC<MenuProps> = props => {
  const { children, ...otherProps } = props;

  return (
    <Popover {...otherProps}>
      <Card className={css({ padding: 0 })}>{children}</Card>
    </Popover>
  );
};

export default Menu;
