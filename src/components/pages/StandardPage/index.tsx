import ContentArea from '@/components/ContentArea';
import type { StandardPageFragment } from './StandardPage.gql.g';

type Props = {
  page: StandardPageFragment;
};

const TOP_PADDING_MODES = {
  HALF: 'Half',
  FULL: 'Full',
};

export default function StandardPage({ page }: Props) {
  const {
    Name,
    BackgroundColor,
    BackgroundImage,
    BackgroundOpacity,
    BackgroundVideo,
    PageImage,
    MainBody,
    MainContentArea,
    TitleColor,
    TopPaddingMode,
    __typename,
  } = page;

  const bgStyle = {
    backgroundColor: BackgroundColor ?? 'transparent',
    opacity: BackgroundOpacity ?? 1,
  } as React.CSSProperties;

  let heroClass = '',
    boxClass = '';

  switch (TopPaddingMode) {
    case TOP_PADDING_MODES.HALF:
      heroClass = 'hero__half';
      boxClass = 'box__half';
      break;
    case TOP_PADDING_MODES.FULL:
      heroClass = 'hero__full';
      boxClass = 'box__full';
      break;
  }

  let url;
  if (BackgroundImage?.Url) {
    url = BackgroundImage.Url;
  } else if (PageImage?.Url) {
    url = PageImage.Url;
  }

  if (url) {
    url += url.includes('?') ? '&' : '?';
    url += `width=1440&format=webp`;
  }

  return (
    <div className="row">
      <div className="col-12 standard-page__container">
        <div className={`standard-page__hero ${heroClass}`}>
          <div className="standard-page__background" style={bgStyle}></div>
          {BackgroundVideo?.Url && (
            <video
              className={`standard-page__video ${heroClass}`}
              autoPlay
              loop
              playsInline
              muted
            >
              <source src={BackgroundVideo.Url} type="video/mp4" />
            </video>
          )}
          {url && (
            <picture>
              <img
                className="standard-page__banner ls-is-cached lazyloaded img-fluid"
                alt={`${Name} background image`}
                src={url}
              />
            </picture>
          )}
          <div className="hero__gradient"></div>
        </div>
        <div className={`standard-page__box ${boxClass}`}>
          <div className="article__title">
            <h1 style={{ color: TitleColor ?? 'inherit' }}>{Name}</h1>
          </div>
          <div className="standard-page__content">
            <div className="row">
              <div className="col-12">
                {MainBody && (
                  <div
                    className="col-12"
                    dangerouslySetInnerHTML={{ __html: MainBody }}
                  ></div>
                )}
              </div>
            </div>
            <div className="row">
              {MainContentArea && <ContentArea contentArea={MainContentArea} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
