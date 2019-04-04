import * as React from 'react';
import { useTheme } from '../../../../lib/theme';
import { css, cx } from 'emotion';

import CheckIcon from '@material-ui/icons/Check';

import Text, { ETextType } from '../../Typography/Text';
import { inactiveColor } from '../shared';
import { ButtonBase, EButtonType } from '../../Button';

interface IFormFieldRadioViewModel {
  checked: boolean;

  required?: boolean;
  disabled?: boolean;

  label?: string;
  name?: string;

  style?: React.CSSProperties;
  className?: string;
}

interface IFormFieldRadioActions {
  onToggle?: (toggle: boolean) => void;
}

type FormFieldRadioProps = IFormFieldRadioViewModel & IFormFieldRadioActions;

const FormFieldRadio: React.FC<FormFieldRadioProps> = props => {
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
          type={'radio'}
          checked={props.checked}
          required={props.required}
          disabled={props.disabled}
          name={props.name}
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
        <ButtonBase type={EButtonType.Contained} color={props.checked ? theme.palette.primary : inactiveColor} disabled={props.disabled} className={css({
          margin: 0, padding: 0,
          height: 20,
          left: 0,
          position: 'absolute',
          top: -2,
          width: 20,
          borderRadius: 20,
          transform: 'none !important',
          fontSize: 15,

          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        })}>
          <span
            className={css({
              display: 'inline-block',
              backgroundColor: 'white',
              height: 8,
              width: 8,
              borderRadius: 10,
              position: 'relative',
              transform: props.checked ? 'scale(1)' : 'scale(0)',
              transition: 'transform 300ms 50ms',
              userSelect: "none"
            })}
          />
        </ButtonBase>
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

export default FormFieldRadio;
