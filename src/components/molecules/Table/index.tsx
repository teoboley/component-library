import * as React from 'react';
import ReactTable, { Column } from 'react-table';
import { css, cx } from 'emotion';

import { useTheme } from '../../../lib/theme';
import Card from '../../atoms/Card';
import { Button } from '../../atoms';
import FormFieldNumber from '../../atoms/FormField/Number';
import Select from '../../_incubator/molecules/Select';
import baseTableCSS from './baseStyles';

interface ITableViewModel<D> {
  data: D[];
  columns: Array<Column<D>>;

  filterable?: boolean;
  enforcePagination?: boolean;

  style?: React.CSSProperties;
  className?: string;
}

interface ITableActions {}

type TableProps<D extends any = any> = ITableViewModel<D> & ITableActions;

const Table: React.FC<TableProps> = props => {
  const theme = useTheme();

  const tableOverrideStyles = css({
    padding: 0,
    display: 'block',
    '.ReactTable': {
      ...theme.typography.body,
      border: 'none',

      '.rt-thead': {
        ...theme.typography.label,

        '.rt-th, .rt-td': {
          paddingTop: 15,
          paddingBottom: 15,
          borderRight: 'none'
        },

        '.rt-th.-sort-asc, .rt-td.-sort-asc': {
          boxShadow: `inset 0 3px 0 0 ${theme.palette.primary}`
        },

        '.rt-th.-sort-desc, .rt-td.-sort-desc': {
          boxShadow: `inset 0 -3px 0 0 ${theme.palette.primary}`
        }
      },

      '.rt-thead.-header': {
        // boxShadow: 'none',
        boxShadow: '0 17px 15px -15px rgba(0, 0, 0, 0.10)'
      },

      '.rt-thead.-headerGroups': {
        backgroundColor: theme.palette.cardBackground,

        '.rt-th, .rt-td': {
          borderRight: '1px solid rgba(0, 0, 0, 0.05)'
        }
      },

      '.rt-thead.-filters': {
        'input, select': {
          // border: 'none'
        }
      },

      '.rt-tbody': {
        '.rt-th, .rt-td': {
          paddingTop: 15,
          paddingBottom: 15,
          textAlign: 'center',
          borderRight: 'none'
        }
      },

      '.-pagination': {
        '.-pageInfo': {
          ...theme.typography.label
        },

        input: {
          // all: 'unset'
        },

        '.-pageSizeOptions': {
          margin: 0,
          minWidth: 200
        }
      }
    }
  });

  const defaultPageSize = 20;

  return (
    <Card className={cx(baseTableCSS, tableOverrideStyles, props.className)} style={props.style}>
      <ReactTable
        data={props.data}
        columns={props.columns}
        pageSize={props.data.length <= defaultPageSize ? props.data.length : undefined}
        defaultPageSize={defaultPageSize}
        showPagination={props.enforcePagination || props.data.length > defaultPageSize}
        filterable={props.filterable}
        getPaginationProps={() => ({
          renderPageJump: ({
            onChange,
            value,
            onBlur,
            onKeyPress,
            inputType,
            pageJumpText
          }: any) => (
            <div className="-pageJump">
              <FormFieldNumber
                // aria-label={pageJumpText}
                onChange={(_, e) => onChange(e)}
                value={value}
                onBlur={onBlur}
                onKeyPress={onKeyPress}
              />
            </div>
          ),
          renderPageSizeOptions: ({
            pageSize,
            pageSizeOptions,
            rowsSelectorText,
            onPageSizeChange,
            rowsText
          }: any) => (
            <span className="select-wrap -pageSizeOptions">
              <Select
                inputValue={pageSize}
                // aria-label={rowsSelectorText}
                onSelect={value => onPageSizeChange(Number(value))}
                selected={pageSize}
                options={pageSizeOptions.map((option: number, i: number) => ({
                  label: `${option} ${rowsText}`,
                  value: option
                }))}
              />
            </span>
          )
        })}
        PreviousComponent={buttonProps => {
          return (
            <Button disabled={buttonProps.disabled} onClick={buttonProps.onClick}>
              {buttonProps.children}
            </Button>
          );
        }}
        NextComponent={buttonProps => {
          return (
            <Button disabled={buttonProps.disabled} onClick={buttonProps.onClick}>
              {buttonProps.children}
            </Button>
          );
        }}
      />
    </Card>
  );
};

export default Table;
