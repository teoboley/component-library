import * as React from 'react'
import { PageProps, ThemeConfig, Menu as DoczMenu } from 'docz'
import Edit from '@material-ui/icons/Edit';

import { css } from 'emotion';
import Sidebar from './Sidebar';
import Card from '../../../src/components/atoms/Card';

export const Page: React.FC<PageProps> = ({
                                       children,
                                       doc: { link, fullpage, edit = true },
                                     }) => {
  const content = (
    <>
      {link && edit && (
        <a className={css`
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          opacity: 0.7;
          transition: opacity 0.4s;
          font-size: 14px;
          text-decoration: none;
          text-transform: uppercase;

          &:hover {
            opacity: 1;
          }
          `} href={link} target="_blank">
          <Edit width={14} /> Edit page
        </a>
      )}
      {children}
    </>
  );

  return (
    <ThemeConfig>
      {({ repository }) => (
        <div className={css`
          display: flex;
          max-width: 100vw;
          `}>
          {repository && <a href={repository}>Repository</a>}
          {!fullpage && <Sidebar />}
          <Card className={css`
              flex: 1;
              font-size: 18px;
              min-width: 0;
              padding: 5px;
              margin: 0 20px 0 0;
            `}>
            {fullpage ? content : <div className={css`
              box-sizing: border-box;
              margin: 0 auto;
              padding: 30px;
            `}>{content}</div>}
          </Card>
        </div>
      )}
    </ThemeConfig>
  )
}
