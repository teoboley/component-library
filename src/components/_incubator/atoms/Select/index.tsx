import * as React from 'react';
import ReactSelect, { components as ReactSelectComponents } from 'react-select';
import * as Color from 'color';
import { getBWContrastingColor, useOverride, useTheme } from '../../../../lib/theme';
import { Spring } from 'react-spring/renderprops';
import Card from '../../../atoms/Card';
import { css } from 'emotion';

interface ISelectOption<V> {
  value: V;
  label: React.ReactChild;
}

interface ISelectViewModel<V> {
  label?: string;
  value: V | null;
  options: ISelectOption<V>[];

  style?: React.CSSProperties;
  className?: string;
}

interface ISelectActions<V> {
  onSelect?: (value: V | null) => void;
}

export type SelectProps<V = {}> = ISelectViewModel<V> & ISelectActions<V>;

const menuHeaderStyle = {
  padding: '8px 12px'
};

const Menu = (props: any) => {
  return (
    <Spring from={{ height: '0px', opacity: 0 }} to={{ height: 'auto', opacity: 1 }}>
      {style => (
        <div style={style}>
          <Card className={css({ marginTop: 10, padding: 10, width: '100%' })}>
            <div style={menuHeaderStyle}>Custom Menu with {props.options.length} options</div>
            <ReactSelectComponents.MenuList {...props}>
              {props.children}
            </ReactSelectComponents.MenuList>
          </Card>
        </div>
      )}
    </Spring>
  );
};

export const selectOverrideName = 'select';

const Select: React.FC<SelectProps> = props => {
  const Override = useOverride(selectOverrideName);
  if (Override) {
    return <Override {...props}/>;
  }

  const theme = useTheme();

  return (
    <ReactSelect
      options={props.options}
      styles={{
        control: styles => ({ ...styles, backgroundColor: 'white', cursor: 'pointer' }),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => ({
          ...styles,
          backgroundColor: isDisabled
            ? undefined
            : isSelected
            ? theme.palette.primary
            : isFocused
            ? new Color(theme.palette.primary).alpha(0.1).hex()
            : undefined,
          color: isDisabled
            ? '#ccc'
            : isSelected || isFocused
            ? getBWContrastingColor(theme.palette.primary)
            : undefined,
          padding: '10px 20px',
          // transition: 'background-color 200ms, color 200ms',
          cursor: 'pointer'
        }),
        input: styles => ({ ...styles, cursor: 'pointer' }),
        singleValue: styles => ({ ...styles, color: 'black' }),
        menu: (styles, state) => {
          return {
            ...styles,
            border: '5px solid red'
          };
        },
        container: styles => ({
          ...styles,
          ...theme.typography.label
        })
      }}
      components={{ Menu }}

      onChange={e => props.onSelect && props.onSelect(e && (Array.isArray(e) ? e[0].value : e.value) || null)}

      className={props.className}
    />
  );
};

export default Select;
