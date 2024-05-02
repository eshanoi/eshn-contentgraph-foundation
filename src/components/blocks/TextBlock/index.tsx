import type { TextBlockFragment } from './TextBlockFragment.gql.g';

export default function TextBlock({ block }: { block: TextBlockFragment }) {
  const { MainBody, Padding, Margin, BackgroundColor, BlockOpacity } = block;

  let backgroundColor = BackgroundColor;

  if (backgroundColor?.startsWith('background-color:')) {
    backgroundColor = backgroundColor
      .replace('background-color:', '')
      .replace(';', '');
  }

  const blockStyle = {
    backgroundColor: backgroundColor ?? undefined,
    opacity: BlockOpacity ?? undefined,
  } as React.CSSProperties;

  return (
    <>
      <div
        style={blockStyle}
        className={`${Padding ?? ''} ${Margin ?? ''}`}
        dangerouslySetInnerHTML={{ __html: MainBody ?? '' }}
      />
    </>
  );
}
