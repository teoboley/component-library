import * as React from 'react';

interface IConditionalWrapperViewModel {
  condition: boolean;
  wrapperFunc: (input: NonNullable<React.ReactNode>) => JSX.Element;
  children: NonNullable<React.ReactNode>;
}

interface IConditionalWrapperActions {}

type ConditionalWrapperProps = IConditionalWrapperViewModel & IConditionalWrapperActions;

export const ConditionalWrapper: React.FC<ConditionalWrapperProps> = props => {
  return props.condition ? props.wrapperFunc(props.children) : <>{props.children}</>;
};
