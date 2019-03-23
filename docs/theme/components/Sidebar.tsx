import * as React from 'react';
import { Link, Menu as DoczMenu, MenuRenderProps, ThemeConfig } from 'docz';
import { css } from 'emotion';
import Heading, { EHeadingType } from '../../../src/components/atoms/Typography/Heading';
import { useTheme } from '../../../src/lib/theme';
import Button, { ButtonBase, EButtonSize, EButtonType } from '../../../src/components/atoms/Button';
import Text, { ETextType } from '../../../src/components/atoms/Typography/Text';

const formatMenuItems = (menuItems: MenuRenderProps) => {
  return menuItems
    .sort((a: MenuRenderProps[0], b: MenuRenderProps[0]) => {
      if (a.menu) {
        return 0;
      }
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    })
    .map((menuItem, mI) => {
      return <SidebarItem key={mI} {...menuItem} />;
    });
};

const SidebarItem: React.FC<MenuRenderProps[0]> = props => {
  if (props.menu) {
    return (
      <div className={css({ marginLeft: 10, marginTop: 15 })}>
        <Text type={ETextType.Label} className={css({ display: 'block', marginBottom: 10 })}>
          {props.name}
        </Text>
        {formatMenuItems(props.menu)}
      </div>
    );
  }

  const buttonEl = <Button size={EButtonSize.Small}>{props.name}</Button>;

  return (
    <div>
      {props.route ? (
        <Link to={props.route}>{buttonEl}</Link>
      ) : (
        <a href={props.href || '#'} target={props.href ? '_blank' : '_self'}>
          {buttonEl}
        </a>
      )}
    </div>
  );
};

interface ISidebarViewModel {}

interface ISidebarActions {}

type SidebarProps = ISidebarViewModel & ISidebarActions;

const Sidebar: React.FC<SidebarProps> = props => {
  const theme = useTheme();

  return (
    <ThemeConfig>
      {({ title, themeConfig: { logo } }) => (
        <DoczMenu>
          {menuItems => (
            <div
              className={css`
                position: relative;
                width: 280px;
                height: 90vh;
              `}
            >
              <div
                className={css`
                  display: flex;
                  flex-direction: column;
                  justify-content: space-between;

                  position: fixed;
                  width: 250px;
                  height: 90vh;
                  z-index: 1000;

                  padding: 20px;
                `}
              >
                <div className={css({ overflowY: 'scroll' })}>
                  <ButtonBase className={css({ padding: 0 })} onClick={() => { window.location.href = "/" }}>
                    <Heading type={EHeadingType.H5} className={css({ marginBottom: 0 })}>
                      Crash Test
                    </Heading>
                    <Heading
                      type={EHeadingType.H4}
                      className={css({ color: theme.palette.primary })}
                    >
                      Components
                    </Heading>
                    <div
                      className={css({
                        width: 40,
                        backgroundColor: theme.palette.primary,
                        height: 5
                      })}
                    />
                  </ButtonBase>
                  <div className={css({ marginTop: 30 })}>{formatMenuItems(menuItems)}</div>
                </div>
                <div>
                  <ButtonBase type={EButtonType.Overlay}>By Teo Boley</ButtonBase>
                </div>
              </div>
            </div>
          )}
        </DoczMenu>
      )}
    </ThemeConfig>
  );
};

export default Sidebar;
