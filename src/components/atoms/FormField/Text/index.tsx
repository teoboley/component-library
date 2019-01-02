import * as React from 'react';
import { css, cx } from 'emotion';
import { ThemeConsumer } from '../../../../lib/theme';
import { withProps } from 'recompose';

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
  onBlur?: () => void;
  onFocus?: () => void;
}

export type FormFieldProps<V> = IFormFieldViewModel<V> & IFormFieldActions<V>;

interface IFormFieldState {
  focused: boolean;
}

const baseCSS = css({
  backgroundColor: 'transparent',
  border: '1px solid transparent',
  margin: 0,
  padding: '10px 14px',
  display: 'inline-block',
  '&:focus': {
    outline: 'none'
  },
  transition: 'border 200ms'
});

export class FormField extends React.Component<
  FormFieldProps<string | undefined>,
  IFormFieldState
> {
  readonly state = {
    focused: false
  };

  render() {
    return (
      <ThemeConsumer>
        {theme => {
          const activeColor = this.props.activeColor || theme.palette.primaryColor;
          const inactiveColor = this.props.inactiveColor || '#8D8D8D';

          const iconStyles = css({
            backgroundColor: this.props.value || this.state.focused ? activeColor : inactiveColor,
            borderRadius: '5px 0px 0px 5px',
            color: 'white',
            // mixBlendMode: 'screen',
            display: 'flex',
            padding: 5,
            justifyContent: 'center',
            alignItems: 'center',
            '&:focus': {
              backgroundColor: activeColor
            },
            transition: 'background-color 200ms'
          });

          const inputStyles = css({
            ...theme.typography.formField,
            border: `1px solid ${this.props.value ? activeColor : inactiveColor}`,
            borderRadius: this.props.icon ? '0px 5px 5px 0px' : 5,
            color: this.props.value ? activeColor : inactiveColor,
            '&::placeholder': {
              ...theme.typography.formField,
              color: inactiveColor
            },
            '&:focus': {
              color: activeColor,
              border: `1px solid ${activeColor}`
            }
          });

          return (
            <span className={css({ display: 'inline-flex' })}>
              {this.props.icon && <span className={iconStyles}>{this.props.icon}</span>}
              <input
                type={this.props.type}
                placeholder={'Placeholder'}
                style={this.props.style}
                className={cx(baseCSS, inputStyles, this.props.className)}
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
        }}
      </ThemeConsumer>
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
