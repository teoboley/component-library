import * as React from "react";
import Popover, {AnchorOrigin, AnchorPosition, AnchorReference} from "../../atoms/Popover";
import Card from "../../atoms/Card";

interface IMenuViewModel {
  anchorEl: null | HTMLElement;
  anchorOrigin?: AnchorOrigin;
  anchorPosition?: AnchorPosition;
  anchorReference?: AnchorReference;

  style?: React.CSSProperties;
  className?: string;
}

interface IMenuActions {
  onClose?: () => void;
}

type MenuProps = IMenuViewModel & IMenuActions;

// TODO: add card
const Menu: React.SFC<MenuProps> = props => {
  const { children, ...otherProps } = props;

  return <Popover {...otherProps}>
    <Card>
      { children }
    </Card>
  </Popover>
};

export default Menu;