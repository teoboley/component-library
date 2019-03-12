import * as React from 'react';
import ReactTable, { Column } from 'react-table';
import { css, cx } from 'emotion';
import { useTheme } from '../../../lib/theme';
import baseTableCSS from './baseStyles';
import Card from '../../atoms/Card';

interface ITableViewModel {
  style?: React.CSSProperties;
  className?: string;
}

interface ITableActions {}

type TableProps = ITableViewModel & ITableActions;

const data = [
  {
    name: 'Tanner Linsley',
    age: 26,
    friend: {
      name: 'Jason Maurer',
      age: 23
    }
  }
];

const columns: Array<Column<typeof data[0]>> = [
  {
    Header: 'Name',
    accessor: 'name' // String-based value accessors!
  },
  {
    Header: 'Age',
    accessor: 'age',
    Cell: props => <span className="number">{props.value}</span> // Custom cell components!
  },
  {
    id: 'friendName', // Required because our accessor is not a string
    Header: 'Friend Name',
    accessor: d => d.friend.name // Custom value accessors!
  },
  {
    Header: props => <span>Friend Age</span>, // Custom header components!
    accessor: 'friend.age'
  }
];

const Table: React.FC<TableProps> = props => {
  const theme = useTheme();

  const tableOverrideStyles = css({
    padding: 0,
    display: 'block',
    ".ReactTable": {
      ...theme.typography.body,
      border: 'none',

      ".rt-thead": {
        ...theme.typography.label,

        ".rt-th, .rt-td": {
          padding: 15,
          borderRight: 'none',
        },

        ".rt-th.-sort-asc, .rt-td.-sort-asc": {
          boxShadow: `inset 0 3px 0 0 ${theme.palette.primary}`
        },

        ".rt-th.-sort-desc, .rt-td.-sort-desc": {
          boxShadow: `inset 0 -3px 0 0 ${theme.palette.primary}`
        }
      },

      ".rt-thead.-header": {
        // boxShadow: 'none',
        boxShadow: '0 2px 15px 0 rgba(0, 0, 0, 0.10)'
      },

      ".rt-tbody": {
        ".rt-th, .rt-td": {
          padding: 15,
          textAlign: 'center',
          borderRight: 'none',
        }
      }
    }
  });

  return (
    <Card className={cx(baseTableCSS, tableOverrideStyles, props.className)} style={props.style}>
      <ReactTable data={data} columns={columns} />
    </Card>
  );
};

export default Table;
