import type { TextBlockFragment } from "./TextBlockFragment.gql.g";

export default function TextBlock({ block }: { block: TextBlockFragment }) {
  const { MainBody, Padding, Margin, BackgroundColor, BlockOpacity } = block;

  return (
    <>
      <div
        style={{
          backgroundColor: BackgroundColor ?? undefined,
          opacity: BlockOpacity ?? undefined,
        }}
        className={`${Padding ?? ""} ${Margin ?? ""}`}
        dangerouslySetInnerHTML={{ __html: MainBody ?? "" }}
      />
    </>
  );
}
