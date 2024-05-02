import ContentArea from '@/components/ContentArea';
import type { ContainerBlockFragment } from './ContainterBlockFragment.gql.g';

export default function ContainerBlock({
  block,
}: {
  block: ContainerBlockFragment;
}) {
  const { MainContentArea, BackgroundColor, BlockOpacity, Margin, Padding } =
    block;

  const className = `${Padding} ${Margin}`;

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
