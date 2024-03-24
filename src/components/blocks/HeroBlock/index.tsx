import type { HeroBlockFragment } from './HeroBlockFragment.gql.g'
import HeroBlockLink from './HeroBlockLink'

const blockRatios: Record<string, number> = {
  '5:1': 20,
  '4:1': 25,
  '3:1': 33,
  '16:9': 55,
  '3:2': 65,
  '4:3': 75,
  '1:1': 100,
  '2:3': 150,
  '9:16': 175,
}

export default function HeroBlock({ block }: { block: HeroBlockFragment }) {
  const {
    BlockRatio,
    BackgroundImage,
    MainBackgroundVideo,
    BackgroundColor,
    BlockOpacity,
    Callout,
    Link,
  } = block
  const {
    CalloutPosition,
    Padding,
    Margin,
    CalloutTextColor,
    CalloutContentAlignment,
    CalloutContent,
    BackgroundColorBehindText,
  } = Callout ?? {}

  const blockRatio = blockRatios[BlockRatio ?? ''] ?? 50

  return (
    <>
      <div>
        <div
          className="hero-block"
          style={{
            paddingBottom: `${blockRatio}%`,
          }}
        >
          {BackgroundImage && (
            <div
              className="hero-block__image"
              style={{
                backgroundImage: `url('${BackgroundImage.Url}')`,
              }}
            ></div>
          )}

          {MainBackgroundVideo?.Url && !BackgroundImage && (
            <div className="hero-block__video">
              <video autoPlay loop playsInline muted>
                <source src={MainBackgroundVideo.Url} type="video/mp4" />
              </video>
            </div>
          )}

          <div
            className="hero-block__overlay"
            style={{
              backgroundColor: BackgroundColor ?? undefined,
              opacity: BlockOpacity ?? undefined,
            }}
          ></div>
          <div className="screen-width-wrapper">
            <div
              className="hero-block__callout screen-width-container"
              style={{ justifyContent: CalloutPosition ?? undefined }}
            >
              {Link && !MainBackgroundVideo && <HeroBlockLink Link={Link} />}
              <div
                className={`callout ${Padding ?? ''} ${Margin ?? ''}`}
                style={{
                  color: (CalloutTextColor ?? undefined) as any,
                  textAlign: (CalloutContentAlignment ?? undefined) as any,
                }}
              >
                <div
                  className="hero-block__callout-content"
                  dangerouslySetInnerHTML={{ __html: CalloutContent ?? '' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
