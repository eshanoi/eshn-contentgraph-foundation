export type FooterItem = {
  href?: string;
  text: string;
  label?: string;
  className: string;
};

export type FooterSectionType = {
  header?: string;
  items: FooterItem[];
  className: string;
};
