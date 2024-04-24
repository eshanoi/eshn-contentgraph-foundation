export type ListItem = {
  name: string;
  href?: string;
  items?: NestedListType[];
};

export type NestedListType = {
  title?: string;
  items?: ListItem[];
};
