import type { CallToActionBlockFragment } from "./CallToActionBlockFragment.gql.g";
import { type CSSProperties } from "react";
import { Button } from "../ButtonBlock";
import { consoleLog } from "@/logger";

const backgroundSetting: { [key: string]: any } = {
  "image-fit-width": { backgroundRepeat: "no-repeat", backgroundSize: "cover" },
  "image-fit-height": {
    backgroundRepeat: "no-repeat",
    backgroundSize: "auto 100%",
  },
  "image-tile": { backgroundRepeat: "repeat", backgroundSize: "auto" },
  "image-stretch": {
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
  },
  "image-default": { backgroundRepeat: "no-repeat", backgroundSize: "auto" },
};

export default function CallToActionBlock({
  block,
}: {
  block: CallToActionBlockFragment;
}) {
  const {
    Title,
    Margin,
    Padding,
    BackgroundColor,
    BackgroundImage,
    BackgroundImageSetting,
    BlockOpacity,
    Subtext,
    TextColor,
    Button: ButtonData,
  } = block;

  let blockStyle: CSSProperties = {
    backgroundColor: BackgroundColor ?? undefined,
    opacity: BlockOpacity ?? undefined,
  };

  let contentStyle: CSSProperties = {
    backgroundImage: BackgroundImage?.Url
      ? `url(${BackgroundImage?.Url})`
      : undefined,
    color: TextColor ?? undefined,
  };

  if (BackgroundImageSetting) {
    contentStyle = {
      ...contentStyle,
      ...backgroundSetting[BackgroundImageSetting],
    };
  }

  let className = `${Padding} ${Margin}`;

  return (
    <div style={blockStyle} className={className}>
      <div style={contentStyle}>
        <h2>{Title}</h2>
        {Subtext && <div dangerouslySetInnerHTML={{ __html: Subtext }}></div>}
        {ButtonData && <Button block={ButtonData as never} />}
      </div>
    </div>
  );
}
