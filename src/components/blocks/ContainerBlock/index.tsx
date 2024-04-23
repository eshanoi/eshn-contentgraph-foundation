import ContentArea from "@/components/ContentArea";
import type { ContainerBlockFragment } from "./ContainterBlockFragment.gql.g";
import { consoleLog } from "@/logger";

export default function ContainerBlock({
  block,
}: {
  block: ContainerBlockFragment;
}) {
  const { MainContentArea, BackgroundColor, BlockOpacity, Margin, Padding } =
    block;

  const className = `${Padding} ${Margin}`;
  consoleLog.info("ContainerBlock", JSON.stringify(block));

  const blockStyle = {
    backgroundColor: BackgroundColor ?? undefined,
    opacity: BlockOpacity ?? undefined,
  } as React.CSSProperties;

  return (
    <div style={blockStyle} className={className}>
      {MainContentArea && <ContentArea contentArea={MainContentArea as any} />}
    </div>
  );
}
