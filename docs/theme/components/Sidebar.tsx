import * as React from 'react';
import { Link, Menu as DoczMenu, ThemeConfig } from 'docz';
import { css } from 'emotion';
import Heading, { EHeadingType } from '../../../src/components/atoms/Typography/Heading';
import { useTheme } from '../../../src/lib/theme';
import Button from '../../../src/components/atoms/Button';

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
            {menuItems.map((sidebarItem, i) => {
              const buttonEl = <Button>{sidebarItem.name}</Button>;

            return <div key={i}>
                {sidebarItem.route ? (
                  <Link to={sidebarItem.route}>{buttonEl}</Link>
                ) : (
                  <a
                    href={sidebarItem.href || '#'}
                    target={sidebarItem.href ? '_blank' : '_self'}
                  >{buttonEl}</a>
                  )}
              </div>
            })}
        </div>
          </div>
      )}</DoczMenu>)}</ThemeConfig>
  );
};

export default Sidebar;