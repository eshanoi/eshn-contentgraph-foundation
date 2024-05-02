import { getRelativeUrl } from '@/utils/functions';
import type { StandardPagePartialFragment } from './StandardPage/StandardPagePartialFragment.gql.g';

type Props = {
  page: StandardPagePartialFragment;
};

export default function PartialPage({ page }: Props) {
  const {
    TeaserColorTheme,
    TeaserRatio,
    Padding,
    Margin,
    DisplayAsCard,
    PageImage,
    TeaserVideo,
    Name,
    TeaserText,
    Url,
    TeaserButtonStyle,
    TeaserButtonText,
    ApplyHoverEffect,
    TeaserTextAlignment,
  } = page;
  let textStyle = '';
  if (TeaserColorTheme) {
    if (TeaserColorTheme === 'Light') {
      textStyle = 'teaser-text--white';
    } else {
      textStyle = 'teaser-text--black';
    }
  }

  let ThemeCssClass = '';
  switch (TeaserColorTheme) {
    case 'Light':
      ThemeCssClass = 'teaser-theme--light';
      break;
    case 'Dark':
      ThemeCssClass = 'teaser-theme--dark';
      break;
  }

  let AlignmentCssClass = '';
  switch (TeaserTextAlignment) {
    case 'Left':
      AlignmentCssClass = 'teaser-content-align--left';
      break;
    case 'Right':
      AlignmentCssClass = 'teaser-content-align--right';
      break;
    case 'Center':
      AlignmentCssClass = 'teaser-content-align--center';
      break;
  }

  let teaserRatio = 50;
  switch (TeaserRatio) {
    case '5:1':
      teaserRatio = 20;
      break;
    case '4:1':
      teaserRatio = 25;
      break;
    case '3:1':
      teaserRatio = 33;
      break;
    case '16:9':
      teaserRatio = 55;
      break;
    case '3:2':
      teaserRatio = 65;
      break;
    case '4:3':
      teaserRatio = 75;
      break;
    case '1:1':
      teaserRatio = 100;
      break;
    case '2:3':
      teaserRatio = 150;
      break;
    case '9:16':
      teaserRatio = 175;
      break;
    default:
      teaserRatio = 50;
      break;
  }

  return (
    <div className={`${Padding} ${Margin}`}>
      {!DisplayAsCard && (
        <div
          className={`teaser ${ThemeCssClass} ${AlignmentCssClass} ${
            ApplyHoverEffect && 'teaser--hover-effect'
          }`}
          style={{
            paddingBottom: `${teaserRatio}%`,
          }}
        >
          <div
            className="teaser__image"
            style={{
              backgroundImage: `url(${PageImage?.Url})`,
            }}
          ></div>
          {TeaserVideo?.Url && !PageImage?.Url && (
            <div className="teaser__video">
              <video autoPlay loop playsInline muted>
                <source src={TeaserVideo.Url} type="video/mp4" />
              </video>
            </div>
          )}
          <div className="screen-width-wrapper">
            <div className={`teaser-text ${textStyle} screen-width-container`}>
              <h2>{Name}</h2>
              <div className="teaser-text__details">
                {TeaserText && <p>{TeaserText}</p>}
                {TeaserButtonText && (
                  <a
                    className={`${TeaserButtonStyle}`}
                    href={getRelativeUrl(Url) ?? undefined}
                  >
                    {TeaserButtonText}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
