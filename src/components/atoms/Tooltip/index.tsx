import * as React from 'react';
import { WithStyles } from '@material-ui/core/styles';
import MuiTooltip from '@material-ui/core/Tooltip';

import styles from "./styles";
import { Zoom } from "@material-ui/core";
import { CSSProperties } from "react";
import { withPropsStyles } from "../../../lib/material-ui";

type ChildFunction = ((params: { open: (anchorEl?: any) => void; close: () => void; }) => React.ReactElement<any>);

export interface ITooltipViewModel {
  children: React.ReactElement<any> | ChildFunction;

  content: React.ReactElement<any> | string;
  withArrow?: boolean;
  backgroundColor?: string;
  maxWidth?: number;
  color?: string;
  open?: boolean;
  noPadding?: boolean;
  distance?: number;

  disableHoverListener?: boolean;
  disableFocusListener?: boolean;
  disableTouchListener?: boolean;

  style?: CSSProperties;
  className?: string;
}

export type TooltipProps = ITooltipViewModel;

type TooltipState = {
  arrowRef: any | null;
  open: boolean;
  anchorEl: any | null;
}

class Tooltip extends React.Component<TooltipProps & WithStyles<ReturnType<typeof styles>>, TooltipState> {
  static getDerivedStateFromProps(nextProps: TooltipProps, prevState: TooltipState) {
    if (nextProps.open !== undefined && nextProps.open !== prevState.open) {
      return {
        ...prevState,
        open: nextProps.open,
      };
    }

    // Return null to indicate no change to state.
    return null;
  }

  state = {
    arrowRef: null,
    anchorEl: null,
    open: this.props.open || false
  };

  constructor(props: TooltipProps & WithStyles<ReturnType<typeof styles>>) {
    super(props);
    this.handleArrowRef = this.handleArrowRef.bind(this);
    this.handleTooltipClose = this.handleTooltipClose.bind(this);
    this.handleTooltipOpen = this.handleTooltipOpen.bind(this);
  }

  handleArrowRef(node: any) {
    this.setState({
      arrowRef: node,
    });
  };

  handleTooltipClose() {
    this.setState({ open: false, anchorEl: null });
  };

  handleTooltipOpen(anchorEl?: any) {
    this.setState({ open: true, anchorEl: anchorEl || null });
  };

  render() {
    const { classes } = this.props;

    return (
        <MuiTooltip
          title={
            <React.Fragment>
              { this.props.content }
              { this.props.withArrow && <span className={classes.arrowArrow} ref={this.handleArrowRef} />}
            </React.Fragment>
          }
          placement="top"
          TransitionComponent={Zoom}
          classes={{ tooltip: classes.tooltip, popper: this.props.withArrow ? classes.arrowPopper : undefined }}
          onClose={() => this.handleTooltipClose()}
          onOpen={() => this.handleTooltipOpen()}
          open={this.state.open}
          disableHoverListener={this.props.disableHoverListener}
          disableFocusListener={this.props.disableFocusListener}
          disableTouchListener={this.props.disableTouchListener}
          PopperProps={{
            ...(this.state.anchorEl != null ? {
              anchorEl: this.state.anchorEl,
            } : {}),
            popperOptions: {
              modifiers: {
                arrow: {
                  enabled: this.props.withArrow && Boolean(this.state.arrowRef),
                  element: this.state.arrowRef,
                }
              }
            }
          }}
          style={this.props.style}
          className={this.props.className}
        >
          <span style={{display: "inline-block"}}>
          { {}.toString.call(this.props.children) === '[object Function]' ? (this.props.children as ChildFunction)({ open: this.handleTooltipOpen, close: this.handleTooltipClose }) : this.props.children as React.ReactElement<any> }
          </span>
        </MuiTooltip>
    );
  }
}

export default withPropsStyles(styles)(Tooltip);