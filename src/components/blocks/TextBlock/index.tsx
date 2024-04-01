import { consoleLog } from "@/logger";
import type { TextBlockFragment } from "./TextBlockFragment.gql.g";

export default function TextBlock({ block }: { block: TextBlockFragment }) {
  const { MainBody, Padding, Margin, BackgroundColor, BlockOpacity } = block;

  consoleLog.info("TextBlock", {
    MainBody,
    Padding,
    Margin,
    BackgroundColor,
    BlockOpacity,
  });

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
