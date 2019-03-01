import * as React from 'react';
import Popover, { TooltipPlacement, AnchorPosition, AnchorReference } from '../../atoms/Popover';
import Card from '../../atoms/Card';
import { css } from 'emotion';
import { useOverride } from '../../../lib/theme';

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

export type MenuProps = IMenuViewModel & IMenuActions;

export const menuOverrideName = 'menu';

const Menu: React.FC<MenuProps> = props => {
  const Override = useOverride(menuOverrideName);
  if (Override) {
    return <Override {...props}/>;
  }

  const { children, ...otherProps } = props;

  return (
    <Popover {...otherProps}>
      <Card className={css({ padding: 0 })}>{children}</Card>
    </Popover>
  );
};

export default Menu;
