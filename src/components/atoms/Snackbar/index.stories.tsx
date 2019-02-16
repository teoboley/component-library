import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { storiesOf } from '@storybook/react';

import { MessageHub, Snackbar, AddMessageFunc, MessageProvider, useMessage } from '.';
import Button, { EButtonType } from '../Button';
import { useEffect, useRef, useState } from 'react';

// const messagesRoot = document.createElement("div");
// messagesRoot.id = 'messages-root';
// document.body.appendChild(messagesRoot);
//
// const useMessage = () => {
//   const [state, setState] = useState<AddMessageFunc | null>(null);
//
//   return { showMessage: state, setRef: (newRef: AddMessageFunc) => {
//       setState(newRef);
//   }};
// };
//
// export const Test: React.FC<{}> = () => {
//   const { showMessage, setRef } = useMessage();
//
//   return (
//     <div>
//       <Snackbar heading={'Snackbar Heading'} description={'Some description'}>
//         <Button type={EButtonType.Outline}>Bye</Button>
//         <Button type={EButtonType.Contained}>Aight</Button>
//       </Snackbar>
//       <Button
//         onClick={() =>
//           showMessage && showMessage(
//             onClose => (
//               <Snackbar
//                 heading={'Snackbar Heading'}
//                 description={'Some description'}
//                 dismissable
//                 onClose={onClose}
//               >
//                 <Button type={EButtonType.Outline} onClick={onClose}>Bye</Button>
//                 <Button type={EButtonType.Contained}>Aight</Button>
//               </Snackbar>
//             )
//           )
//         }
//       >
//         Add Snackbar
//       </Button>
//       <MessageHub children={add => setRef(add)} />
//     </div>
//   );
// };

export const Test: React.FC<{}> = () => {
  const showMessage = useMessage();

  return (
      <div>
        <Snackbar heading={'Snackbar Heading'} description={'Some description'}>
          <Button type={EButtonType.Outline}>Bye</Button>
          <Button type={EButtonType.Contained}>Aight</Button>
        </Snackbar>
        <Button
          onClick={() =>
            showMessage(
              onClose => (
                <Snackbar
                  heading={'Snackbar Heading'}
                  description={'Some description'}
                  dismissable
                  onClose={onClose}
                >
                  <Button type={EButtonType.Outline} onClick={onClose}>Bye</Button>
                  <Button type={EButtonType.Contained}>Aight</Button>
                </Snackbar>
              )
            )
          }
        >
          Add Snackbar
        </Button>
      </div>
  );
};

storiesOf('Snackbar', module).add('Default', () => {
  return (
    <MessageProvider>
      <div style={{ padding: 50 }}>
        <Test />
      </div>
    </MessageProvider>
  );
});
