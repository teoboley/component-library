import * as React from "react";
import {withState} from "recompose";
import TextInputBar from "../../atoms/TextInputBar";
import {Button} from "../../atoms";
import {EButtonType} from "../../atoms/Button";

export enum EFileSelectType {
  Text = 'text'
}

interface IFileSelectViewModel {
  type?: EFileSelectType;
  hovering: boolean;
  value: string | null;
  placeholder?: string;
  buttonLabel?: string;
  buttonColor?: string;
  disabled?: boolean;

  style?: React.CSSProperties;
  className?: string;
}

interface IFileSelectActions {
  setHovering: (hovering: boolean) => boolean;
  onSelect?: () => void;
}

type FileSelectProps = IFileSelectViewModel & IFileSelectActions;

export const StatelessFileSelect: React.SFC<FileSelectProps> = props => {
  const type = props.type || EFileSelectType.Text;
  return (
    <span style={{ display: 'inline-block', position: 'relative', opacity: !props.disabled ? 1 : 0.5 }} onMouseEnter={() => props.setHovering(true)} onMouseLeave={() => props.setHovering(false)}>
      <span style={{ pointerEvents: 'none' }}>
      { type === EFileSelectType.Text ?
        <TextInputBar value={props.value !== null ? props.value : ''} placeholder={props.placeholder} style={props.style} className={props.className}/>
      : null
      }
      </span>
      <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, opacity: props.hovering ? 1 : 0,
        transition: 'opacity 100ms'
      }}>
        <Button
          style={{ width: '100%', height: '100%' }}
          onClick={props.onSelect}
          color={props.buttonColor}
          type={EButtonType.CONTAINED}
        >{ props.buttonLabel || 'Select File'}</Button>
      </div>
    </span>
  )
};

const FileSelect = withState('hovering', 'setHovering', false)(StatelessFileSelect);
export default FileSelect;
