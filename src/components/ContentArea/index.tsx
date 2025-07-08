import { getBlockComponent, hasBlockComponent } from '@/components/blocks';
import type { Maybe } from '@/gql/schema';
import PartialPage from '../pages/PartialPage';
import type { ExpandedContentAreaItemFragment } from './ExpandedContentAreaItemFragment.gql.g';

// Map display options to Bootstrap classes (based on backend mapping)
const DISPLAY_OPTIONS = {
  screen: 'screen-width-block',
  full: 'col-12',
  threequarter: 'col-lg-9 col-md-6 col-sm-12 col-12 displaymode-three-quarters',
  wide: 'col-lg-8 col-md-6 col-sm-12 col-12 displaymode-two-thirds',
  half: 'col-lg-6 col-md-6 col-sm-12 col-12 displaymode-half',
  narrow: 'col-lg-4 col-md-6 col-sm-12 col-12 displaymode-one-third',
  'one-quarter': 'col-lg-3 col-md-6 col-sm-12 col-12 displaymode-one-quarter',
  'one-sixth': 'col-lg-2 col-md-4 col-sm-12 col-12 displaymode-one-sixth',
} as const;

const getDisplayClasses = (
  displayOption: string | null | undefined,
): string => {
  if (!displayOption) return 'col-12';
  
  return DISPLAY_OPTIONS[displayOption as keyof typeof DISPLAY_OPTIONS] || 'col-12';
};

export default function ContentArea({
  contentArea,
}: {
  contentArea: Maybe<ExpandedContentAreaItemFragment>[];
}) {
  const normalizedContentArea = contentArea.filter(Boolean);

  return (
    <div>
      {normalizedContentArea.map((item) => {
        const content = item.ContentLink?.Expanded;
        if (!item.ContentLink || !content) {
          return null;
        }

        if (hasBlockComponent(content)) {
          const BlockComponent = getBlockComponent(content);

          return (
            <div
              className={`block ${content.__typename.toLowerCase()} ${getDisplayClasses(item.DisplayOption)}`}
              key={item.ContentLink.GuidValue}
            >
              <BlockComponent block={content as never} />
            </div>
          );
        } else if (content.__typename?.endsWith('Page')) {
          return (
            <div
              className={`block ${content.__typename.toLowerCase()} ${getDisplayClasses(item.DisplayOption)}`}
              key={item.ContentLink.GuidValue}
            >
              <PartialPage
                page={content as any}
                key={item.ContentLink.GuidValue}
              />
            </div>
          );
        } else {
          return (
            <div key={item.ContentLink?.GuidValue}>
              Missing component: {content.__typename}{' '}
              <pre>{JSON.stringify(content, null, 2)}</pre>
            </div>
          );
        }
      })}
    </div>
  );
}
