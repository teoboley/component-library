import * as React from 'react';
import { Link, Menu as DoczMenu, MenuRenderProps, ThemeConfig } from 'docz';
import { css } from 'emotion';
import Heading, { EHeadingType } from '../../../src/components/atoms/Typography/Heading';
import { useTheme } from '../../../src/lib/theme';
import Button, { EButtonSize } from '../../../src/components/atoms/Button';
import Text, { ETextType } from '../../../src/components/atoms/Typography/Text';

const sortMenuItemsFn = (a: MenuRenderProps[0], b: MenuRenderProps[0]) => {
  if (a.menu) { return 0; }
  if (a.name < b.name) { return -1; }
  if (a.name > b.name) { return 1; }
  return 0;
};

const SidebarItem: React.FC<MenuRenderProps[0]> = props => {
  if (props.menu) {
    return <div className={css({ marginLeft: 10, marginTop: 15 })}>
      <Text type={ETextType.Label} className={css({ display: 'block', marginBottom: 10 })}>{props.name}</Text>
      {props.menu.sort(sortMenuItemsFn).map((menuItem, mI) => {
        return <SidebarItem key={mI} {...menuItem}/>;
      })}
    </div>
  }

  const buttonEl = <Button size={EButtonSize.Small}>{props.name}</Button>;

  return <div>
    {props.route ? (
      <Link to={props.route}>{buttonEl}</Link>
    ) : (
      <a
        href={props.href || '#'}
        target={props.href ? '_blank' : '_self'}
      >{buttonEl}</a>
    )}
  </div>
};

interface ISidebarViewModel {
}

interface ISidebarActions {

}

type SidebarProps = ISidebarViewModel & ISidebarActions;

const Sidebar: React.FC<SidebarProps> = props => {
  const theme = useTheme();

  return (
    <ThemeConfig>
      {({ title, themeConfig: { logo } }) => (
        <DoczMenu>{(menuItems) => (
          <div className={css`
            position: relative;
            width: 280px;
            height: 70vh;
          `}>
          <div className={css`
            position: fixed;
            width: 250px;
            height: 70vh;
            z-index: 1000;

            padding: 20px;
          `}>
            <Heading type={EHeadingType.H4}>{title}</Heading>
            <div className={css({ marginTop: 30 })}>
              {menuItems.sort(sortMenuItemsFn).map((sidebarItem, i) => <SidebarItem key={i} {...sidebarItem}/>)}
            </div>
        </div>
          </div>
      )}</DoczMenu>)}</ThemeConfig>
  );
};

export default Sidebar;