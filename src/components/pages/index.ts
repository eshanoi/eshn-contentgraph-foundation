import type React from 'react';
import HomePage from './HomePage';
import StandardPage from './StandardPage';

export type Page = Parameters<
  (typeof registry)[keyof typeof registry]
>['0']['page'];
export type PageComponentProps = {
  page: Page;
};
export type PageComponent = ({ page }: PageComponentProps) => React.JSX.Element;

const registry = {
  HomePage: HomePage,
  StandardPage,
} satisfies Record<string, any>;

export function hasPageComponent(document: {
  __typename?: string;
}): document is Page {
  return (
    !!document?.__typename &&
    Object.keys(registry).includes(document.__typename)
  );
}

export function getPageComponent(document: Page) {
  return registry[document.__typename];
}
