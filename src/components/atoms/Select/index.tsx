import * as React from 'react';
import ReactSelect, { components as ReactSelectComponents } from 'react-select'
import Color = require('color');
import { getBWContrastingColor, ThemeConsumer } from '../../../lib/theme';
import Tooltip from '../Tooltip';
import { Spring } from 'react-spring';
import Card from '../Card';
import { css } from 'emotion';

const options = [
  { value: 'ocean', label: <Tooltip content={"Hi"}><span>Ocean</span></Tooltip> },
  { value: 'blue', label: 'Blue' },
  { value: 'purple', label: 'Purple' },
  { value: 'red', label: 'Red' },
  { value: 'orange', label: 'Orange' },
  { value: 'yellow', label: 'Yellow' },
  { value: 'green', label: 'Green' },
  { value: 'forest', label: 'Forest' },
  { value: 'slate', label: 'Slate' },
  { value: 'silver', label: 'Silver' },
];

interface ISelectViewModel {
  label?: string;
  value: any;

  style?: React.CSSProperties;
  className?: string;
}

interface ISelectActions {
  onSelect?: (value: any) => void;
}

type SelectProps = ISelectViewModel & ISelectActions;

const menuHeaderStyle = {
  padding: '8px 12px',
};

const Menu = (props: any) => {
  return (
      <Spring
        from={{ height: '0px', opacity: 0 }}
        to={{ height: 'auto', opacity: 1 }}>
        {style => <div style={style}>
          <Card className={css({ marginTop: 10, padding: 10, width: '100%' })}>
            <div style={menuHeaderStyle}>
              Custom Menu with {props.options.length} options
            </div>
            <ReactSelectComponents.MenuList {...props}>
              {props.children}
            </ReactSelectComponents.MenuList>
          </Card>
        </div>}
      </Spring>
  );
};

const Select: React.FC<SelectProps> = props => {
  return (
    <ThemeConsumer>
      {theme =>
        <ReactSelect options={options} styles={{
          control: styles => ({ ...styles, backgroundColor: 'white', cursor: 'pointer' }),
          option: (styles, { data, isDisabled, isFocused, isSelected }) => (
            {
              ...styles,
              backgroundColor: isDisabled
                ? undefined
                : isSelected ? theme.palette.primary : isFocused ? new Color(theme.palette.primary).alpha(0.1).hex() : undefined,
              color: isDisabled
                ? '#ccc'
                : (isSelected || isFocused)
                  ? getBWContrastingColor(theme.palette.primary)
                  : undefined,
              padding: '10px 20px',
              // transition: 'background-color 200ms, color 200ms',
              cursor: 'pointer'
            }
          ),
          input: styles => ({ ...styles, cursor: 'pointer' }),
          singleValue: styles => ({ ...styles, color: 'black' }),
          menu: (styles, state) => {
            return ({
              ...styles,
              border: '5px solid red'
            });
          },
          container: styles => ({
            ...styles,
            ...theme.typography.label
          })
        }} components={{ Menu }} className={props.className}/>
      }</ThemeConsumer>
  );
};

export default Select;