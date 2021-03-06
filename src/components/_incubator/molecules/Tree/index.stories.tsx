import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Card from '../../../atoms/Card';
import Tree from '.';

storiesOf('_Incubating/Molecules/Tree', module).add('Default', () => {
  return (
    <div style={{ padding: 50 }}>
      <Card>
        <Tree name="Main" open>
          <Tree name="Hello" />
          <Tree name="Subtree with children">
            <Tree name="Hello" />
            <Tree name="Sub-subtree with children">
              <Tree name="Child 1" style={{ color: '#37ceff' }} />
              <Tree name="Child 2" style={{ color: '#37ceff' }} />
              <Tree name="Child 3" style={{ color: '#37ceff' }} />
              <Tree name="Custom content">
                <div style={{ position: 'relative', width: '100%', height: 200, padding: 10 }}>
                  <div
                    style={{ width: '100%', height: '100%', background: 'black', borderRadius: 5 }}
                  />
                </div>
              </Tree>
            </Tree>
            <Tree name="Hello" />
          </Tree>
          <Tree name="World" />
          <Tree name={<span>🙀 Something something</span>} />
        </Tree>
      </Card>
    </div>
  );
});
