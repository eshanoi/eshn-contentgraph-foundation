import { getBlockComponent, hasBlockComponent } from "@/components/blocks";
import type { Maybe } from "@/gql/schema";
import PartialPage from "../pages/PartialPage";
import type { ExpandedContentAreaItemFragment } from "./ExpandedContentAreaItemFragment.gql.g";

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
              className={`block ${content.__typename.toLowerCase()} col-12`}
              key={item.ContentLink.GuidValue}
            >
              <BlockComponent block={content as never} />
            </div>
          );
        } else if (content.__typename?.endsWith("Page")) {
          return (
            <div
              className={`block ${content.__typename.toLocaleLowerCase()} col-12`}
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
              Missing component: {content.__typename}{" "}
              <pre>{JSON.stringify(content, null, 2)}</pre>
            </div>
          );
        }
      })}
    </div>
  );
}
