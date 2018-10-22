
declare module 'unified';
declare module 'unist-util-inspect';

declare module 'remark-parse';
declare module 'rehype-stringify';
declare module 'remark-rehype';

declare module 'rehype-parse';
declare module 'remark-stringify';
declare module 'rehype-remark';

declare module 'slate-html-serializer';

declare module 'slate-drop-or-paste-images' {
  const InsertImages = (options: {
    extensions: string[];
    insertImage: (transform, file) => any
  }) => any;
  export default InsertImages;
}

declare module 'slate-paste-linkify' {
  const PasteLinkify = (options: {
    type: string;
    hrefProperty?: string;
    collapseTo?: 'start' | 'end' | 'anchor' | 'focus';
  }) => any;
  export default PasteLinkify;
}

declare module 'slate-auto-replace' {
  import { Change } from "slate";
  const AutoReplace = (options: {
    trigger:	string | RegExp;	// The hotkey to match the inputed character against—either a character like a or a key name like enter or tab.
    change:	(change: Change, event, matches) => void;	// A function to apply the desired change. It will be called with change, e, matches, editor from the event handler. The matching (before and after) text is deleted but are accessible inside matches.before and matches.after.
    after?:	RegExp;	//An optional regexp that must match the text after the hotkey for the replacement to occur. Any capturing groups in the regexp will be deleted from the text content, but is accessible in matches parameter in the change function.
    before?:	RegExp;	// An optional regexp that must match the text before the hotkey for the replacement to occur. Any capturing groups in the regexp will be deleted from the text content, but is accessible in matches parameter in the change function.
  }) => any;
  export default AutoReplace;
}

declare module 'color';
declare module 'type-of' {
  const typeOf = (something: any) => string;
  export default typeOf;
}

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

interface SizeMeProps {
  size: {
    width: number | null;
    height: number | null;
  };
}

interface SizeMeOptions {
  monitorWidth?: boolean;
  monitorHeight?: boolean;
  monitorPosition?: boolean;
  refreshRate?: number;
  refreshMode?: 'throttle' | 'debounce';
  noPlaceholder?: boolean;
}

// type SizeMeFunction = (options?: SizeMeOptions) => <P extends SizeMeProps>(component: React.ComponentType<P>) => React.ComponentType<Omit<P, 'size'>>;

declare module 'react-sizeme' {
  import * as React from "react";
  export class SizeMe extends React.Component<SizeMeOptions & { children: (props: SizeMeProps) => React.ReactNode }> {}
}