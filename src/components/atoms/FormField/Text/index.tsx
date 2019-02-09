import * as React from 'react';
import { css, cx } from 'emotion';
import { useTheme } from '../../../../lib/theme';
import { withProps } from 'recompose';
import { KeyboardEventHandler, useState } from 'react';

type ValueTransformer<V> = { toString: (val: V) => string; fromString: (s: string) => V };

interface IFormFieldViewModel<V> {
  value: V | null;

  icon?: JSX.Element;

  activeColor?: string;
  inactiveColor?: string;

  type: string;

  valueTransformer?: ValueTransformer<V>;
  style?: React.CSSProperties;
  className?: string;
}

interface IFormFieldActions<V> {
  onChange?: (value: V | null) => void;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  onBlur?: () => void;
  onFocus?: () => void;
}

export type FormFieldProps<V> = IFormFieldViewModel<V> & IFormFieldActions<V>;

interface IFormFieldState {
  focused: boolean;
}

export const FormField: React.FC<FormFieldProps<string | undefined>> = props => {
    const theme = useTheme();
    const [ state, setState ] = useState<IFormFieldState>({ focused: false });

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
            width: 120,
            border: 'none',
            padding: '5px 0px',
            display: 'inline-block',
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
            <span className={css({ display: 'inline-flex', margin: '0px 2px' })}>
              {props.icon && <label className={iconStyles}>{props.icon}</label> }
              <input
                type={props.type}
                placeholder={'Placeholder'}
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
                        : null
                    );
                  }
                }}
                onKeyDown={props.onKeyDown}
                onFocus={() => {
                  setState({
                    focused: true
                  });

                  if (props.onFocus) {
                    props.onFocus();
                  }
                }}
                onBlur={() => {
                  setState({
                    focused: false
                  });

                  if (props.onBlur) {
                    props.onBlur();
                  }
                }}
              />
            </span>
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
