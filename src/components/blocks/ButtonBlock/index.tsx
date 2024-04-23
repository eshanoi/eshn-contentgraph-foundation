import type { ButtonBlockFragment } from "./ButtonBlockFrament.gql.g";
import type { CSSProperties } from "react";

function ButtonBlock({ block }: { block: ButtonBlockFragment }) {
  const {
    Padding,
    Margin,
    BackgroundColor,
    BlockOpacity,
    TextColorOverdrive,
    BackgroundColorOverdrive,
    ButtonTextUppercase,
    ButtonText,
    TextPadding,
    ShowTransparentBackground,
    BorderStyle,
    ButtonLink,
    FontSize,
    ButtonBackgroundColor,
    BorderWidth,
    BorderRadius,
    ButtonStyle,
    ButtonBackgroundHoverColor,
    ButtonBorderColor,
    ButtonCaption,
    ButtonBorderHoverColor,
    BorderStyleOverdrive,
    ButtonTextColor,
    ButtonTextHoverColor,
    ContentLink,
  } = block;

  const id = ContentLink?.Id ?? "ctabutton";

  const blockStyle: CSSProperties = {
    backgroundColor: BackgroundColor ?? undefined,
    opacity: BlockOpacity ?? undefined,
    "--button-background-hover-color": ButtonBackgroundHoverColor,
    "--button-border-hover-color": ButtonBorderHoverColor,
    "--button-text-hover-color": ButtonTextHoverColor,
    buttonStyle: ButtonStyle,
  } as CSSProperties;

  const blockClassname = `${Padding ?? ""} ${Margin ?? ""}`;

  const buttonStyle: CSSProperties = {
    color: ButtonTextColor,
    borderRadius: BorderRadius,
    borderWidth: BorderWidth,
    borderStyle: BorderStyle,
    backgroundColor: ButtonBackgroundColor,
    fontSize: FontSize,
    padding: TextPadding,
  } as CSSProperties;

  return (
    <>
      <div className={`button-block ${blockClassname}`} style={blockStyle}>
        <a
          title={ButtonText || undefined}
          href={ButtonLink || undefined}
          style={buttonStyle}
        >
          {ButtonText || "Button Text"}

          {ButtonCaption && (
            <p dangerouslySetInnerHTML={{ __html: ButtonCaption }}></p>
          )}
        </a>
      </div>
    </>
  );
}

export { ButtonBlock as Button };
