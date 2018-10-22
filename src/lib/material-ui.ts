import * as React from "react";
import {
  StyledComponentProps,
  StyleRules,
  withStyles,
  Theme,
  WithStyles,
  WithTheme
} from '@material-ui/core/styles';
import { AnyComponent, ConsistentWith, Omit, Overwrite } from "@material-ui/core";
import { WithStylesOptions } from "@material-ui/core/styles/withStyles";

type WithPropsStyleRulesCallback<Props, ClassKey extends string = string> = (
  props: Props,
  theme: Theme,
) => StyleRules<ClassKey>;

export function withPropsStyles<
  Props,
  ClassKey extends string = string,
  Options extends WithStylesOptions<ClassKey> = {}
  >( style: WithPropsStyleRulesCallback<Props, ClassKey> | StyleRules<ClassKey>,
     options?: Options ): <P extends ConsistentWith<P, StyledComponentProps<ClassKey> & Partial<WithTheme>>>(
  component: AnyComponent<P & WithStyles<ClassKey, Options['withTheme']>>,
) => React.ComponentType<Overwrite<Omit<P, 'theme'>, StyledComponentProps<ClassKey>>> {
  const wPropsStyles = ( component: any ) => {
    return React.forwardRef<any, Props>( (props, ref) => {
      const proxyProps: any = Object.assign({}, props);
      const proxy = (theme: Theme) => ({}.toString.call(style) === '[object Function]' ? ((style  as WithPropsStyleRulesCallback<Props, ClassKey>)(props, theme)) : style as StyleRules<ClassKey>);

      const hoc = withStyles(proxy, options)(component);

      return props.children ?
        React.createElement(hoc, { ...proxyProps, ref} as any, props.children) :
        React.createElement(hoc, {...proxyProps, ref} as any)
    })
  };

  return wPropsStyles as any;
}