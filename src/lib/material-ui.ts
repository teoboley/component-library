import * as React from "react";
import {
  StyledComponentProps,
  StyleRules,
  withStyles,
  Theme,
  WithStyles,
  WithTheme, StyleRulesCallback
} from '@material-ui/core/styles';
import {PropInjector} from "@material-ui/core";
import { WithStylesOptions } from "@material-ui/core/styles/withStyles";

type WithPropsStyleRulesCallback<Props, ClassKey extends string = string> = (
  props: Props,
  theme: Theme,
) => StyleRules<ClassKey>;

export function withPropsStyles<
  Props,
  ClassKey extends string,
  Options extends WithStylesOptions<ClassKey> = {}
  >(
  style: WithPropsStyleRulesCallback<Props, ClassKey> | StyleRules<ClassKey>,
  options?: Options,
): PropInjector<WithStyles<ClassKey, Options['withTheme']>, StyledComponentProps<ClassKey>> {
  const wPropsStyles = ( component: any ) => {
    return React.forwardRef<any, Props>( (props, ref) => {
      const proxyProps: any = Object.assign({}, props);
      // StyleRulesCallback<ClassKey> | StyleRules<ClassKey>
      const proxy = (theme: Theme) => ({}.toString.call(style) === '[object Function]' ? (style as WithPropsStyleRulesCallback<Props, ClassKey>)(props, theme) : style as StyleRules<ClassKey>);

      const hoc = withStyles(proxy, options)(component);

      return props.children ?
        React.createElement(hoc, { ...proxyProps, ref} as any, props.children) :
        React.createElement(hoc, {...proxyProps, ref} as any)
    })
  };

  return wPropsStyles as any;
}