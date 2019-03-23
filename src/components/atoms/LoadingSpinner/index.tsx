import * as React from 'react';
import { css, cx } from 'emotion';
import { BounceLoader } from 'react-spinners';
import { useTheme } from '../../../lib/theme';

interface ILoadingSpinnerViewModel {
  sizeUnit?: string;
  size?: number;
  color?: string;

  style?: React.CSSProperties;
  className?: string;
}

interface ILoadingSpinnerActions {

}

type LoadingSpinnerProps = ILoadingSpinnerViewModel & ILoadingSpinnerActions;

const LoadingSpinner: React.FC<LoadingSpinnerProps> = props => {
  const theme = useTheme();

  return (
    <div style={props.style} className={cx(css({ display: 'flex', justifyContent: 'center', alignItems: 'center' }), props.className)}>
      <BounceLoader
        sizeUnit={props.sizeUnit || "px"}
        size={props.size || 40}
        color={props.color ? theme.palette.getColor(props.color) : theme.palette.primary}
        loading={true}
      />
    </div>
  );
};

export default LoadingSpinner;