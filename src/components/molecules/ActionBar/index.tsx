import * as React from "react";
import Tooltip, { ITooltipViewModel } from "../../atoms/Tooltip";
import {
  FormatBold,
  FormatItalic,
  FormatUnderlined,
  ShortText,
  BorderStyle,
  FormatListBulleted,
  FormatIndentIncrease,
  FormatIndentDecrease,
  BorderRight, BorderLeft
} from "@material-ui/icons";
import * as Color from "color";
import { withTheme, WithTheme } from "@material-ui/core";
import Button, { EButtonType } from "../../atoms/Button";

interface IActionBarItemViewModel {
  active: boolean;
  activeIconColor: string;
  primaryColor: string;
  icon: JSX.Element;
}

interface IActionBarItemActions {
  onToggle?: () => void;
}

type ActionBarItemProps = IActionBarItemViewModel & IActionBarItemActions;

export const ActionBarItem: React.SFC<ActionBarItemProps> = props => {
  return (
    <Button type={props.active ? EButtonType.CONTAINED : EButtonType.TEXT} color={props.active ? props.primaryColor : 'black'} style={{ margin: '0px 2px 0px 2px', padding: 0, minWidth: 30 }} onClick={e => {
      e.preventDefault();
      if (props.onToggle) props.onToggle();
    }}>
      { props.icon }
    </Button>
  )
};

export enum EActionBarType {
  TEXT = "TEXT",
  LIST = "LIST",
  TABLE = "TABLE",
  BLOCKQUOTE = "BLOCKQUOTE",
  CODE = "CODE"
}

type ActionBarTypeGroup =
{
  type: EActionBarType.TEXT;
  fields: {
    bold: boolean;
    italic: boolean;
    underline: boolean;
  }
} |
  {
    type: EActionBarType.LIST;
    fields: {
      bold: boolean;
      italic: boolean;
      underline: boolean;
    }
  } |
  {
    type: EActionBarType.TABLE;
    fields: {
      bold: boolean;
      italic: boolean;
      underline: boolean;
    }
  };

interface IActionBarViewModel {
  type: ActionBarTypeGroup;
  activeColor?: string;
  activeIconColor?: string;
}

interface IActionBarActions {
  onToggle?: (type: string) => void;
}

export type ActionBarProps = IActionBarViewModel & IActionBarActions;

const UnstyledActionBar: React.SFC<ActionBarProps & WithTheme> = props => {
  let actionBarParams: {
    typeIcon: JSX.Element;
    typeColor: string;
    primaryColor?: string;
    items: Array<{
      key: string;
      icon: JSX.Element;
      title: string;
      active: boolean;
    } | "divider">;
  };

    switch (props.type.type) {
      case EActionBarType.TABLE:
        actionBarParams = {
          typeIcon: <BorderStyle/>,
          typeColor: "white",
          primaryColor: "#00ff63",
          items: [
            {
              key: 'bold',
              icon: <FormatBold/>,
              title: "Bold",
              active: props.type.fields.bold
            },
            {
              key: 'italic',
              icon: <FormatItalic/>,
              title: "Italic",
              active: props.type.fields.italic
            },
            {
              key: 'underline',
              icon: <FormatUnderlined/>,
              title: "Underline",
              active: props.type.fields.underline
            },
            "divider",
            {
              key: 'addLeftColumn',
              icon: <BorderLeft/>,
              title: "Add Column to the left",
              active: false
            },
            {
              key: 'addRightColumn',
              icon: <BorderRight/>,
              title: "Add Column to the right",
              active: false
            }
          ]
        };
        break;
      case EActionBarType.LIST:
        actionBarParams = {
          typeIcon: <FormatListBulleted/>,
          typeColor: "white",
          primaryColor: "#f50057",
          items: [
            {
              key: 'bold',
              icon: <FormatBold/>,
              title: "Bold",
              active: props.type.fields.bold
            },
            {
              key: 'italic',
              icon: <FormatItalic/>,
              title: "Italic",
              active: props.type.fields.italic
            },
            {
              key: 'underline',
              icon: <FormatUnderlined/>,
              title: "Underline",
              active: props.type.fields.underline
            },
            "divider",
            {
              key: 'decreaseIndent',
              icon: <FormatIndentDecrease/>,
              title: "Decrease Indent",
              active: false
            },
            {
              key: 'increaseIndent',
              icon: <FormatIndentIncrease/>,
              title: "Increase Indent",
              active: true
            }
          ]
        };
        break;
      default:
        actionBarParams = {
          typeIcon: <ShortText/>,
          typeColor: "white",
          items: [
            {
              key: 'bold',
              icon: <FormatBold/>,
              title: "Bold",
              active: props.type.fields.bold
            },
            {
              key: 'italic',
              icon: <FormatItalic/>,
              title: "Italic",
              active: props.type.fields.italic
            },
            {
              key: 'underline',
              icon: <FormatUnderlined/>,
              title: "Underline",
              active: props.type.fields.underline
            }
          ]
        };
    }

  const primaryColor =  props.activeColor || actionBarParams.primaryColor || (Color(actionBarParams.typeColor).darken(0.1).isDark() ? props.theme.palette.common.white : props.theme.palette.common.black);
  const activeIconColor = props.activeIconColor || Color(primaryColor).darken(0.1).isDark() ? props.theme.palette.common.white : props.theme.palette.common.black;

  return (
      <span style={{ display: "inline-flex", background: actionBarParams.typeColor, borderRadius: 4 }}>
        <span style={{ padding: 10, backgroundColor: primaryColor, color: activeIconColor }}>
          { actionBarParams.typeIcon }
        </span>
        <span style={{ display: "flex", paddingLeft: 4, paddingRight: 4, alignItems: "center" }}>
          { actionBarParams.items.map(item =>
            item !== "divider" ?
              <Tooltip key={item.key} content={item.title} backgroundColor={primaryColor}>
                <ActionBarItem icon={item.icon} active={item.active} activeIconColor={activeIconColor} primaryColor={primaryColor} onToggle={() => {
                  if (props.onToggle) props.onToggle(item.key);
                }}/>
              </Tooltip>
              :
              <div style={{ color: activeIconColor, backgroundColor: Color(primaryColor).grayscale().fade(0.9), margin: '0px 2px 0px 2px', width: 3, height: "100%", borderRadius: 2 }}/>
          )}
        </span>
      </span>
  );
};

const ActionBar = withTheme()(UnstyledActionBar);

export type ActionBarTooltipProps = ActionBarProps & {
  open?: boolean;
  disableHoverListener?: boolean;
  disableFocusListener?: boolean;
  disableTouchListener?: boolean;

  children: ITooltipViewModel["children"];
}

export const ActionBarTooltip: React.SFC<ActionBarTooltipProps> = props => {
  const {open, disableHoverListener, disableFocusListener, disableTouchListener, ...otherProps} = props;

  return <Tooltip open={open} disableHoverListener={disableHoverListener} disableFocusListener={disableFocusListener} disableTouchListener={disableTouchListener} withArrow noPadding content={
    <ActionBar {...otherProps}/>
  }>
    { props.children }
  </Tooltip>
};

export default ActionBar;