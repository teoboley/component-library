import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {blue, green, grey, red} from "@material-ui/core/colors";

import Button, {EButtonType} from ".";

storiesOf('Button', module)
  .add("Text", () => {
    return <div style={{ padding: 50 }}>
        <div>
          <Button color={'primary'}>Primary</Button>
          <Button color={'secondary'}>Secondary</Button>
        </div>
        <div>
          <Button color={red["400"]}>Red</Button>
          <Button color={blue["400"]}>Blue</Button>
          <Button color={green["500"]}>Green</Button>
          <Button color={green["500"]} disabled>Disabled</Button>
        </div>
    </div>
  })
  .add("Outline", () => {
    return <div style={{ padding: 50 }}>
      <div>
        <Button type={EButtonType.Outline} color={'primary'}>Primary</Button>
        <Button type={EButtonType.Outline} color={'secondary'}>Secondary</Button>
      </div>
      <div>
        <Button type={EButtonType.Outline} color={red["400"]}>Red</Button>
        <Button type={EButtonType.Outline} color={blue["400"]}>Blue</Button>
        <Button type={EButtonType.Outline} color={green["500"]}>Green</Button>
        <Button type={EButtonType.Outline} color={green["500"]} disabled>Disabled</Button>
      </div>
    </div>
  })
  .add("Contained", () => {
    return <div style={{ padding: 50 }}>
      <div>
        <Button type={EButtonType.Contained} color={'primary'}>Primary</Button>
        <Button type={EButtonType.Contained} color={'secondary'}>Secondary</Button>
      </div>
      <div>
        <Button type={EButtonType.Contained} color={red["400"]}>Red</Button>
        <Button type={EButtonType.Contained} color={blue["400"]}>Blue</Button>
        <Button type={EButtonType.Contained} color={green["500"]}>Green</Button>
        <Button type={EButtonType.Contained} color={green["500"]} disabled>Disabled</Button>
      </div>
    </div>
  })
;