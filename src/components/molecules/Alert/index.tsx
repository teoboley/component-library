import * as React from 'react';
import { css, cx } from 'emotion';
import CloseIcon from '@material-ui/icons/Close';

import { getBWContrastingColor, useOverride, useTheme } from '../../../lib/theme';
import { DisplayToggleAnimation } from '../../../lib/animation';
import Button, { EButtonType } from '../../atoms/Button';

import 'codemirror/mode/shell/shell';
import 'codemirror/mode/javascript/javascript';

interface IAlertViewModel {
  color?: string;
  open: boolean;

  style?: React.CSSProperties;
  className?: string;
}

interface IAlertActions {
  onClose?(): void;
}

export type AlertProps = IAlertViewModel & IAlertActions;

export const alertOverrideName = 'alert';

const Alert: React.FC<AlertProps> = props => {
  const Override = useOverride(alertOverrideName);
  if (Override) {
    return <Override {...props} />;
  }

  const theme = useTheme();
  const backgroundColor = props.color ? theme.palette.getColor(props.color) : theme.palette.danger;

  return (
    <DisplayToggleAnimation toggle={props.open}>
      <div
        style={props.style}
        className={cx(
          css({
            ...theme.typography.label,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '5px 10px 5px 15px',
            borderRadius: 5,
            margin: '2px 0px',
            color: getBWContrastingColor(backgroundColor),
            backgroundColor
          }),
          props.className
        )}
      >
        <div>{props.children}</div>
        <div>
          <Button
            type={EButtonType.Highlight}
            color={getBWContrastingColor(backgroundColor)}
            onClick={props.onClose}
            className={css({ padding: '2px 2px 0px 2px' })}
          >
            <CloseIcon />
          </Button>
        </div>
      </div>
    </DisplayToggleAnimation>
  );
};

export default Alert;
