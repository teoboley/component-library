import * as React from "react";
import TagListItem, { ITagListItemViewModel, ITagListItemActions } from "../../atoms/TagListItem";
import GroupListItem from "../../molecules/GroupListItem";

export interface ITagGroupListItemViewModel extends ITagListItemViewModel {
  items?: ITagGroupListItemViewModel[];
}

export interface ITagGroupListItemActions extends ITagListItemActions {}

type TagGroupListItemProps = ITagGroupListItemViewModel &
  ITagGroupListItemActions;

const TagGroupListItem: React.SFC<TagGroupListItemProps> = props => {
  if (props.items != null && props.items.length > 0) {
    return (
      <GroupListItem
        label={props.label}
        indentAmount={(props.indentAmount || 0) + 20}
        selected={props.selected}
      >
        {props.items.map((item, i) => <TagGroupListItem key={i} {...item} />)}
      </GroupListItem>
    );
  }

  return <TagListItem {...props} />;
};

export default TagGroupListItem;
