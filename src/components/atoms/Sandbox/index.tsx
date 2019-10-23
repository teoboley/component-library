import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface ISandboxViewModel {
  style?: React.CSSProperties;
  className?: string;
  heightFromContent?: boolean;
}

interface ISandboxActions {
  onLoadWindow?: (win: Window) => void;
}

type SandboxProps = ISandboxViewModel & ISandboxActions;

interface ISandboxState {
  height: number;
}

class Sandbox extends React.Component<SandboxProps, ISandboxState> {
  public readonly state: ISandboxState = {
    height: 0
  };

  private node: HTMLIFrameElement | null;
  private iframeRoot: HTMLElement | null;

  constructor(props: SandboxProps) {
    super(props);

    this.handleLoad = this.handleLoad.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  public componentDidMount() {
    if (this.node) {
      this.node.addEventListener('load', this.handleLoad);
    }
  }

  public componentDidUpdate() {
    if (this.props.heightFromContent) {
      this.handleResize();
    }
  }

  public componentWillUnmount() {
    if (this.node) {
      if (!this.props.heightFromContent && this.node.parentElement) {
        window.removeEventListener('resize', this.handleResize);
      } else if (this.node.contentWindow) {
        this.node.contentWindow.removeEventListener('resize', this.handleResize);
      }

      this.node.removeEventListener('load', this.handleLoad);
    }
  }

  public handleLoad() {
    if (this.node) {
      this.iframeRoot = this.node.contentDocument ? this.node.contentDocument.body : null;

      if (!this.props.heightFromContent && this.node.parentElement) {
        window.addEventListener('resize', this.handleResize);
      } else if (this.node.contentWindow) {
        this.node.contentWindow.addEventListener('resize', this.handleResize);
      }

      if (this.node.contentWindow && this.props.onLoadWindow) {
        this.props.onLoadWindow(this.node.contentWindow);
      }

      this.handleResize();
      this.forceUpdate();
    }
  }

  public handleResize() {
    if (this.node) {
      if (!this.props.heightFromContent && this.node.parentElement) {
        const parentHeight = this.node.parentElement.offsetHeight;
        if (parentHeight !== this.state.height) {
          this.setState({ height: parentHeight });
        }
      } else if (this.node.contentWindow && this.node.contentWindow.document.documentElement) {
        const contentHeight = this.node.contentWindow.document.documentElement.offsetHeight;
        if (contentHeight !== this.state.height) {
          this.setState({ height: contentHeight });
        }
      }
    }
  }

  public render() {
    return (
      <iframe
        srcDoc={`<!DOCTYPE html>`}
        ref={node => (this.node = node)}
        style={{
          border: 'none',
          height: this.state.height,
          ...this.props.style
        }}
        className={this.props.className}
      >
        {this.iframeRoot && ReactDOM.createPortal(this.props.children, this.iframeRoot, 'frame')}
      </iframe>
    );
  }
}

export default Sandbox;
