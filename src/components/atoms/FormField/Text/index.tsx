import * as React from 'react';
import { css, cx } from 'emotion';
import { useTheme } from '../../../../lib/theme';
import { withProps } from 'recompose';
import { ChangeEvent, KeyboardEventHandler, useState } from 'react';
import Text, { ETextType } from '../../Typography/Text';

type ValueTransformer<V> = { toString: (val: V) => string; fromString: (s: string) => V };

interface IFormFieldViewModel<V> {
  value: V | null;

  icon?: JSX.Element;
  label?: string;
  placeholder?: V | string;

  activeColor?: string;
  inactiveColor?: string;

  type: string;

  valueTransformer?: ValueTransformer<V>;
  style?: React.CSSProperties;
  className?: string;
}

interface IFormFieldActions<V> {
  onChange?: (value: V | null, e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  onKeyPress?: KeyboardEventHandler<HTMLInputElement>;
  onBlur?: () => void;
  onFocus?: () => void;
}

export type FormFieldProps<V> = IFormFieldViewModel<V> & IFormFieldActions<V>;

export const FormField: React.FC<FormFieldProps<string | undefined>> = props => {
  const theme = useTheme();
  const [focused, setFocused] = useState(false);

  const activeColor = props.activeColor || theme.palette.primary;
  const inactiveColor = props.inactiveColor || '#8D8D8D';

  const iconStyles = css({
    color: props.value ? activeColor : inactiveColor,
    display: 'flex',
    padding: 5,
    margin: '0px 3px',
    justifyContent: 'center',
    alignItems: 'center',
    '&:focus': {
      color: activeColor
    },
    transition: 'color 200ms'
  });

  const inputStyles = css({
    ...theme.typography.formField,
    backgroundColor: 'transparent',
    // width: 120,
    border: 'none',
    transition: 'border 200ms',
    borderBottom: `2px solid ${props.value ? activeColor : inactiveColor}`,
    color: props.value ? activeColor : inactiveColor,
    '&::placeholder': {
      ...theme.typography.formField,
      color: inactiveColor
    },
    '&:focus': {
      color: activeColor,
      borderBottom: `2px solid ${activeColor}`,
      outline: 'none'
    }
  });

  return (
    <div className={css({ display: 'flex', alignItems: 'flex-end', margin: '10px 2px' })}>
      {props.icon && <label className={iconStyles}>{props.icon}</label>}
      <div>
        {props.label && <label className={css({display: 'block'})}><Text type={ETextType.Label} className={css({ fontSize: 12, marginBottom: 0 })}>{props.label}</Text></label>}
      <input
        type={props.type}
        placeholder={props.placeholder}
        style={props.style}
        className={cx(inputStyles, props.className)}
        value={
          props.value
            ? props.valueTransformer
              ? props.valueTransformer.toString(props.value)
              : props.value
            : ''
        }
        onChange={e => {
          const val = e.target.value === '' ? null : e.target.value;

          if (props.onChange) {
            return props.onChange(
              val !== null
                ? props.valueTransformer
                  ? props.valueTransformer.fromString(val)
                  : (val as any)
                : null, e
            );
          }
        }}
        onKeyDown={props.onKeyDown}
        onKeyPress={props.onKeyPress}
        onFocus={() => {
          setFocused(true);

          if (props.onFocus) {
            props.onFocus();
          }
        }}
        onBlur={() => {
          setFocused(false);

          if (props.onBlur) {
            props.onBlur();
          }
        }}
      />
      </div>
    </div>
  );
};

export function specifyFormType<V extends string | string[] | number | undefined>(
  type: string,
  valueTransformer?: ValueTransformer<V>
): React.ComponentType<Omit<Omit<FormFieldProps<V>, 'type'>, 'valueTransformer'>> {
  return withProps({ type, valueTransformer })(FormField as any) as any;
}

export const FormFieldText = specifyFormType<string>('string');

export default FormFieldText;
