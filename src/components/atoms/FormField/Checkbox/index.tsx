import * as React from 'react';
import { useTheme } from '../../../../lib/theme';
import { css, cx } from 'emotion';

import CheckIcon from '@material-ui/icons/Check';

import Text, { ETextType } from '../../Typography/Text';

interface IFormFieldCheckboxViewModel {
  checked: boolean;

  required?: boolean;
  disabled?: boolean;

  label?: string;

  style?: React.CSSProperties;
  className?: string;
}

interface IFormFieldCheckboxActions {
  onToggle?: (toggle: boolean) => void;
}

type FormFieldCheckboxProps = IFormFieldCheckboxViewModel & IFormFieldCheckboxActions;

const FormFieldCheckbox: React.FC<FormFieldCheckboxProps> = props => {
  const theme = useTheme();

  return (
    <label style={props.style} className={cx(css({ display: 'block', marginTop: 10, marginBottom: 10 }), props.className)}>
      <span
        style={{
          position: 'relative',
          paddingLeft: 28
        }}
      >
        <input
          type={'checkbox'}
          checked={props.checked}
          required={props.required}
          disabled={props.disabled}
          className={css({
            position: 'absolute',
            opacity: 0,
            marginRight: 10,
            cursor: 'pointer',
            height: 0,
            width: 0
          })}
          onChange={event => props.onToggle && props.onToggle(event.target.checked)}
        />
        <span
          className={css({
            backgroundColor: props.checked ? theme.palette.primary : props.disabled ? theme.palette.disabled : '#d3d3d3',
            height: 20,
            left: 0,
            position: 'absolute',
            top: -2,
            transition: 'background-color 200ms',
            width: 20,
            cursor: 'pointer',
            textAlign: 'center',
            color: 'white',
            borderRadius: 2
          })}
        >
          <CheckIcon
            fontSize={"small"}
            className={css({
              position: 'relative',
              top: 0,
              transform: props.checked ? 'scale(1)' : 'scale(0)',
              transition: 'transform 300ms 50ms',
              userSelect: "none"
            })}
          />
        </span>
      </span>
      <Text className={css({
          // "dib mv0 fw7 t-medium black",
          marginTop: 0,
        marginBottom: 0,
        display: 'inline-block'
        })} type={ETextType.Label}>
        {props.label}
        {props.required && !props.disabled && <span className={css({ color: theme.palette.warning })}>*</span>}
      </Text>
    </label>
  );
};

export default FormFieldCheckbox;
