import * as React from 'react';
import { css } from 'emotion';

import ClickAwayListener from '../../../atoms/ClickAwayListener';
import { FormFieldText } from '../../../atoms/FormField';
import Popover from '../../../atoms/Popover';
import { ButtonBase, EButtonType } from '../../../atoms/Button';
import { ToggleAnimation } from '../../../../lib/animation';
import Card from '../../../atoms/Card';

interface ISelectOption<T> {
  value: T;
  render: JSX.Element;
}

interface IFormFieldSelectViewModel<T> {
  inputValue: string | null;
  selected: T | null;
  placeholder?: string;

  options: Array<ISelectOption<T>>;

  style?: React.CSSProperties;
  className?: string;
}

interface IFormFieldSelectActions<T> {
  onChange?: (newInputValue: string | null) => void;
  onSelect?: (option: ISelectOption<T>) => void;
  onSearch?: (query: string) => void;
}

type FormFieldSelectProps<T> = IFormFieldSelectViewModel<T> & IFormFieldSelectActions<T>;

function FormFieldSelect<T>(props: FormFieldSelectProps<T>) {
  const addActionRef = React.useRef<HTMLDivElement | null>(null);

  const [open, setOpened] = React.useState<boolean>(false);

  return (
    <div style={props.style} className={props.className}>
      <ClickAwayListener
        onClickAway={() => {
          if (open) {
            props.onChange && props.onChange('');
            setOpened(false);
          }
        }}
      >
        <div>
          <div ref={addActionRef}>
            <div
              className={css({
                backgroundColor: '#ededed',
                borderRadius: 4,
                padding: '0.5px 10px'
              })}
            >
              <FormFieldText
                placeholder={props.placeholder}
                value={props.inputValue}
                onChange={props.onChange}
                className={css({
                  '&:focus': {
                    borderBottom: 'none'
                  },
                  borderBottom: 'none',
                  margin: '0px',
                  width: '100%'
                })}
                onFocus={() => {
                  setOpened(true);
                }}
                activeColor={'#666666'}
                inactiveColor={'#999999'}
              />
            </div>
          </div>
          <div
            className={css({
              height: 0,
              overflow: 'hidden'
            })}
          >
            <Popover
              anchorEl={(open && addActionRef.current) || null}
              placement={{ vertical: 'bottom' }}
              placementEnforced
              animationComponent={MenuAnimation}
            >
              <Card
                className={css({
                  display: 'block',
                  maxHeight: 300,
                  minWidth: 180,
                  overflowY: 'scroll'
                })}
              >
                <div
                  className={css({
                    display: 'flex',
                    flexDirection: 'column'
                  })}
                >
                  {props.options.map((option, i) => (
                    <ButtonBase
                      key={i}
                      type={EButtonType.Overlay}
                      className={css({
                        display: 'block'
                      })}
                      onClick={() => props.onSelect && props.onSelect(option)}
                    >
                      {option.render}
                    </ButtonBase>
                  ))}
                </div>
              </Card>
            </Popover>
          </div>
        </div>
      </ClickAwayListener>
    </div>
  );
}

const MenuAnimation: ToggleAnimation = ({ toggle, children, delay }) => (
  <div
    className={css({
      opacity: toggle ? 1 : 0,
      transform: toggle ? 'scale(1)' : 'scale(0)',
      transformOrigin: 'top center',
      transition: `opacity 300ms ease${delay ? ' ' + delay : ''}, transform 300ms ease${
        delay ? ' ' + delay : ''
      }`
    })}
  >
    {children}
  </div>
);

export default FormFieldSelect;
