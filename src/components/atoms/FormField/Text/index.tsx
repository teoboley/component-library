import * as React from 'react';
import { css, cx } from 'emotion';
import { useTheme } from '../../../../lib/theme';
import { withProps } from 'recompose';
import { KeyboardEventHandler } from 'react';

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

export class FormField extends React.Component<
  FormFieldProps<string | undefined>,
  IFormFieldState
> {
  readonly state = {
    focused: false
  };

  render() {
    const theme = useTheme();
          const activeColor = this.props.activeColor || theme.palette.primary;
          const inactiveColor = this.props.inactiveColor || '#8D8D8D';

          const iconStyles = css({
            color: this.props.value ? activeColor : inactiveColor,
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
            borderBottom: `2px solid ${this.props.value ? activeColor : inactiveColor}`,
            color: this.props.value ? activeColor : inactiveColor,
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
              {this.props.icon && <label className={iconStyles}>{this.props.icon}</label> }
              <input
                type={this.props.type}
                placeholder={'Placeholder'}
                style={this.props.style}
                className={cx(inputStyles, this.props.className)}
                value={
                  this.props.value
                    ? this.props.valueTransformer
                      ? this.props.valueTransformer.toString(this.props.value)
                      : this.props.value
                    : ''
                }
                onChange={e => {
                  const val = e.target.value === '' ? null : e.target.value;

                  if (this.props.onChange) {
                    return this.props.onChange(
                      val !== null
                        ? this.props.valueTransformer
                          ? this.props.valueTransformer.fromString(val)
                          : (val as any)
                        : null
                    );
                  }
                }}
                onKeyDown={this.props.onKeyDown}
                onFocus={() => {
                  this.setState({
                    focused: true
                  });

                  if (this.props.onFocus) {
                    this.props.onFocus();
                  }
                }}
                onBlur={() => {
                  this.setState({
                    focused: false
                  });

                  if (this.props.onBlur) {
                    this.props.onBlur();
                  }
                }}
              />
            </span>
    );
  }
}

export function specifyFormType<V extends string | string[] | number | undefined>(
  type: string,
  valueTransformer?: ValueTransformer<V>
): React.ComponentType<Omit<Omit<FormFieldProps<V>, 'type'>, 'valueTransformer'>> {
  return withProps({ type, valueTransformer })(FormField as any) as any;
}

export const FormFieldText = specifyFormType<string>('string');

export default FormFieldText;
