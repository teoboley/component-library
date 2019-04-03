import * as React from 'react';
import { DocPreview, theme, ThemeConfig } from 'docz';

import { Heading, Text } from '../../src/components/atoms/Typography/index';
import { EHeadingType } from '../../src/components/atoms/Typography/Heading';
import { ETextType } from '../../src/components/atoms/Typography/Text';
import { Page } from './components/Page';
import { useTheme } from '../../src/lib/theme';
import { css } from 'emotion';
import Table from '../../src/components/molecules/Table';
import Code from '../../src/components/atoms/Code';
import LoadingSpinner from '../../src/components/atoms/LoadingSpinner';

const Index = () => {
  const theme = useTheme();

  return (
    <ThemeConfig>
      {config => (
        <DocPreview
          components={{
            page: Page,
            // notFound: components.NotFound,
            render: props => {
              console.log("RENDER PROPS");
              console.log(props);

              return (
                <div className={css({ marginBottom: 30 })}>
                  <div className={css({ marginBottom: 20, padding: '30px 50px' })}>{props.component}</div>
                  <Code mode={'text/typescript-jsx'} value={props.code} lineNumbersHidden/>
                </div>
              );
            },
            h1: props => (<Heading type={EHeadingType.H1} className={css({ color: theme.palette.primary })}>{props.children}</Heading>),
            h2: props => (<Heading type={EHeadingType.H2} className={css({ marginTop: 30 })}>{props.children}</Heading>),
            h3: props => (<Heading type={EHeadingType.H3} className={css({ marginTop: 30 })}>{props.children}</Heading>),
            h4: props => (<Heading type={EHeadingType.H4} className={css({ marginTop: 30 })}>{props.children}</Heading>),
            h5: props => (<Heading type={EHeadingType.H5} className={css({ marginTop: 30 })}>{props.children}</Heading>),
            h6: props => (<Heading type={EHeadingType.H6} className={css({ marginTop: 30 })}>{props.children}</Heading>),
            // ul: components.List,
            loading: props => <LoadingSpinner />,
            table: props => {
              console.log("TABLE PROPS");
              console.log(props);

              console.log("Columns");
              const columns: string[] = props.children[0].props.children.props.children.map((th: any) => th.props).filter((x: any) => !!x).map((th: any) => th.children);
              console.log(columns);

              console.log("DATA");
              const data = props.children[1].props.children.map((tr: any) => tr.props.children.filter((x: any) => !!x).reduce((acc: any, curr: any, i: number) => ({
                ...acc,
                [columns[i]]: curr.props.children
              }), {}));
              console.log(data);

              return <Table data={data} columns={columns.map((columnName: string) => ({
                Header: columnName,
                accessor: columnName
              }))} className={css({ marginTop: 10 })}/>;
            },
            pre: props => <div>PRE</div>,
            inlineCode: props => <Code mode={'text'} value={props.children} inline />,
            span: (props: any) => (<Text>{props.children}</Text>),
            p: (props: any) => (<Text type={ETextType.Body}>{props.children}</Text>),
            li: (props: any) => (<li><Text>{props.children}</Text></li>)
          }}
        />
      )}
    </ThemeConfig>
  );
};

export default theme({
  colors: {
    primary: 'tomato',
    secondary: 'khaki',
    gray: 'lightslategray',
  },
})(Index) as any