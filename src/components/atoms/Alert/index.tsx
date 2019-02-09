import * as React from 'react';
import { css, cx } from 'emotion';
import CloseIcon from '@material-ui/icons/Close';

import { getBWContrastingColor, ThemeConsumer } from '../../../lib/theme';

import 'codemirror/mode/shell/shell';
import 'codemirror/mode/javascript/javascript';
import { DisplayToggleAnimation } from '../../../lib/animation';
import Button from '../Button';

interface IAlertViewModel {
  color?: string;
  open: boolean;

  style?: React.CSSProperties;
  className?: string;
}

interface IAlertActions {
  onClose?(): void;
}

type AlertProps = IAlertViewModel & IAlertActions;

const Alert: React.FC<AlertProps> = props => {
  return (
    <ThemeConsumer>
      {theme => {
        const backgroundColor = props.color ? theme.palette.getColor(props.color) : theme.palette.danger;

        return (
          <DisplayToggleAnimation toggle={props.open}>
            <div style={props.style} className={cx(css({
              ...theme.typography.label,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: "5px 10px 5px 15px",
              borderRadius: 5,
              margin: "2px 0px",
              color: getBWContrastingColor(backgroundColor),
              backgroundColor
            }), props.className)}>
              <div>
                {props.children}
              </div>
              <div>
                <Button color={getBWContrastingColor(backgroundColor)} onClick={props.onClose} className={css({ padding: "2px 2px 0px 2px" })}><CloseIcon /></Button>
              </div>
            </div>
          </DisplayToggleAnimation>
        );
      }}
    </ThemeConsumer>
  );
};

export default Alert;
