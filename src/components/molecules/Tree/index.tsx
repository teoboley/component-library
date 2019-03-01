import * as React from 'react';
import { useState } from 'react';
import { animated, useSpring } from 'react-spring';
import { css, cx } from 'emotion';

import MinimizeIcon from '@material-ui/icons/Remove';
import MaximizeIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';

import { useMeasure, usePrevious } from '../../../lib/hooks';
import Text, { ETextType } from '../../atoms/Typography/Text';
import { ButtonBase, EButtonType } from '../../atoms/Button';
import { useOverride } from '../../../lib/theme';

interface ITreeViewModel {
  name: React.ReactChild;
  open?: boolean;

  style?: React.CSSProperties;
  className?: string;
}

export type TreeProps = ITreeViewModel;

export const treeOverrideName = 'tree';

export const Tree: React.NamedExoticComponent<TreeProps> = React.memo(
  props => {
    // this might not work due to react.memo
    const Override = useOverride(treeOverrideName);
    if (Override) {
      return <Override {...props}/>;
    }

    const [isOpen, setOpen] = useState(props.open);
    const previous = usePrevious(isOpen);
    const [bind, { height: viewHeight }] = useMeasure<HTMLDivElement>();

    // FIXME: this typing is weird
    const { height, opacity, transform } = useSpring({
      from: { height: 0, opacity: 0, transform: 'translate3d(20px,0,0)' },
      to: {
        height: isOpen ? viewHeight : 0,
        opacity: isOpen ? 1 : 0,
        transform: `translate3d(${isOpen ? 0 : 20}px,0,0)`
      }
    } as any) as { height: number; opacity: number; transform: string };

    const Icon = props.children ? (isOpen ? MinimizeIcon : MaximizeIcon) : CloseIcon;

    return (
      <div
        className={cx(css({
          padding: '4px 0px 0px 0px',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          verticalAlign: 'middle'
        }), props.className)}
        style={props.style}
      >
        <ButtonBase type={EButtonType.Highlight} className={css({ position: 'relative', padding: 0, top: -2, marginRight: 10 })} disabled={!props.children} onClick={() => void setOpen(!isOpen)}><Icon
          style={{
            width: '1em',
            height: '1em',
            cursor: 'pointer',
            verticalAlign: 'middle'
          }}
        /></ButtonBase>
        <Text
          type={ETextType.Label}
          style={{ display: 'inline-block', verticalAlign: 'middle' }}
        >
          {name}
        </Text>
        <animated.div
          className={css({
            willChange: 'transform, opacity, height',
            marginLeft: '6px',
            padding: '0px 0px 0px 14px',
            overflow: 'hidden'
          })}
          style={{ opacity, height: isOpen && previous === isOpen ? 'auto' : height }}
        >
          {/*<div
            className={css({
              position: 'absolute',
              width: 0,
              left: 5,
              top: 5,
              bottom: 5,
              borderLeft: '1px solid rgba(0, 0, 0, 0.1)'
            })}
          />*/}
          <animated.div style={{ transform }} {...bind}>
            {props.children}
          </animated.div>
        </animated.div>
      </div>
    );
  }
);

export default Tree;
