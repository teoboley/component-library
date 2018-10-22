import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ThreeDRotationIcon from '@material-ui/icons/ThreeDRotation';
import FormatBold from '@material-ui/icons/FormatBold';
import FormatAlignLeft from '@material-ui/icons/FormatAlignLeft';
import Tooltip from "../src/components/atoms/Tooltip";
import Button, { EButtonType } from "../src/components/atoms/Button";
import { red, blue, green, grey } from "@material-ui/core/colors";
import ActionBar, { ActionBarTooltip, EActionBarType } from "../src/components/molecules/ActionBar";

// import { linkTo } from '@storybook/addon-links';

storiesOf('Action Bar', module)
  .add('Text', () => {
    return <div style={{ display: "flex", flexWrap: "wrap", padding: 100, backgroundColor: "lightgrey", maxWidth: "90%" }}>
      <span style={{ margin: '50px 50px' }}>
        <ActionBar type={{type: EActionBarType.TEXT, fields: { bold: false, italic: true, underline: false }}} onToggle={action('onToggle')}/>
      </span>
      <span style={{ margin: '50px 50px' }}>
        <ActionBar type={{type: EActionBarType.LIST, fields: { bold: true, italic: true, underline: false }}} onToggle={action('onToggle')}/>
      </span>
      <span style={{ margin: '50px 50px' }}>
        <ActionBar type={{type: EActionBarType.TABLE, fields: { bold: false, italic: false, underline: true }}} onToggle={action('onToggle')}/>
      </span>
    </div>
  }).add('Nested Tooltip', () => {
    class NestedComponent extends React.Component {
      buttonRef: any | null;

      render() {
        return <div style={{ padding: 100, backgroundColor: "lightgrey" }}>
          <ActionBarTooltip type={{type: EActionBarType.LIST, fields: { bold: false, italic: true, underline: false }}} disableHoverListener disableTouchListener disableFocusListener onToggle={action('onToggle')}>
            { ({ open }) =>
              <div style={{ padding: 25, width: 300, backgroundColor: "darkgrey" }}>
                  <span style={{ display: "inline-block" }} ref={(ref: any) => this.buttonRef = ref}>
                  <Button onClick={() => {
                    open(this.buttonRef);
                  }}>Trigger</Button>
                  </span>
              </div>
            }
          </ActionBarTooltip>
        </div>
      }
    }

    return <NestedComponent />
  })
;

storiesOf('Button', module)
  .add("Text", () => {
    return <div style={{ padding: 100, backgroundColor: "lightgrey" }}>
        <Button color={red["400"]} withGlow>With Arrow</Button>
        <Button color={blue["400"]} withGlow>With Icon</Button>
        <Button color={green["500"]} withGlow>With Multiple Icons</Button>
    </div>
  })
  .add("Contained", () => {
    return <div style={{ padding: 100, backgroundColor: "lightgrey" }}>
      <Button type={EButtonType.CONTAINED} color={red["400"]} withGlow style={{ marginRight: 20 }}>With Arrow</Button>
      <Button type={EButtonType.CONTAINED} color={blue["400"]} withGlow style={{ marginRight: 20 }}>With Icon</Button>
      <Button type={EButtonType.CONTAINED} color={green["500"]} withGlow style={{ marginRight: 20 }}>With Multiple Icons</Button>
    </div>
  })
;

storiesOf('Tooltip', module)
  .add("With arrow", () => {
    return <div style={{ padding: 100, backgroundColor: "lightgrey" }}>
      <Tooltip content={'Add'} backgroundColor={red["400"]} withArrow>
        <Button color={red["400"]}>With Arrow</Button>
      </Tooltip>
      <Tooltip content={<ThreeDRotationIcon />} backgroundColor={blue["800"]} withArrow>
        <Button color={blue["800"]}>With Icon</Button>
      </Tooltip>
      <Tooltip content={<><ThreeDRotationIcon /><FormatBold /><FormatAlignLeft /></>} withArrow>
        <Button>With Multiple Icons</Button>
      </Tooltip>
    </div>
  })
  .add("Without arrow", () => {
    return <div style={{ padding: 100, backgroundColor: "lightgrey" }}>
      <Tooltip content={'Add'} backgroundColor={grey["200"]}>
        <Button>Without Arrow</Button>
      </Tooltip>
      <Tooltip content={<ThreeDRotationIcon />}>
        <Button>With Icon</Button>
      </Tooltip>
    </div>
  })
  .add("In nested component", () => {
    class NestedComponent extends React.Component {
      buttonRef: any | null;

      render() {
        return <div style={{ padding: 100, backgroundColor: "lightgrey" }}>
          <Tooltip content={'Add'} backgroundColor={grey["200"]} disableHoverListener disableTouchListener disableFocusListener>
            { ({ open }) =>
              <div style={{ padding: 25, width: 300, backgroundColor: "darkgrey" }}>
                <span style={{ display: "inline-block" }} ref={(ref: any) => this.buttonRef = ref}>
                <Button onClick={() => {
                  open(this.buttonRef);
                }}>Trigger</Button>
                </span>
              </div>
            }
          </Tooltip>
        </div>
      }
    }

    return <NestedComponent />;
  })
;