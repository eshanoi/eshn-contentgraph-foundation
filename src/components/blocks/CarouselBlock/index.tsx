import type { CarouselBlockFragment } from './CarouselBlockFragment.gql.g';
import { getBlockComponent, hasBlockComponent } from '../';
import { useId } from 'react';

export default function CarouselBlock({
  block,
}: {
  block: CarouselBlockFragment;
}) {
  const carouselId = useId();
  const { CarouselItems, CarouselControls } = block;

  // Extract carousel control settings with defaults
  const showControls = CarouselControls?.ShowControls ?? true;
  const showIndicators = CarouselControls?.ShowIndicators ?? true;
  const autoPlay = CarouselControls?.AutoPlay ?? false;
  const interval = CarouselControls?.Interval ?? 5000;
  const fade = CarouselControls?.Fade ?? false;
  const theme = CarouselControls?.Theme ?? 'dark';

  if (!CarouselItems || CarouselItems.length === 0) {
    return (
      <div className="carousel-block">
        <div className="alert alert-info">No carousel items to display</div>
      </div>
    );
  }

  return (
    <div className="carousel-block">
      <div
        id={carouselId}
        className={`carousel slide ${fade ? 'carousel-fade' : ''}`}
        data-bs-ride={autoPlay ? 'carousel' : 'false'}
        data-bs-interval={autoPlay ? interval : 'false'}
        data-bs-theme={theme}
        role="region"
        aria-label="Content carousel"
      >
        {/* Carousel Indicators */}
        {showIndicators && CarouselItems.length > 1 && (
          <div className="carousel-indicators">
            {CarouselItems.map((item, index) => (
              <button
                key={item?.ContentLink?.Id || `indicator-${index}`}
                type="button"
                data-bs-target={`#${carouselId}`}
                data-bs-slide-to={index}
                className={index === 0 ? 'active' : ''}
                aria-current={index === 0 ? 'true' : 'false'}
                aria-label={`Slide ${index + 1} of ${CarouselItems.length}`}
              />
            ))}
          </div>
        )}

        {/* Carousel Items */}
        <div className="carousel-inner">
          {CarouselItems.map((item, index) => {
            const expandedBlock = item?.ContentLink?.Expanded;

            const BlockComponent =
              expandedBlock && hasBlockComponent(expandedBlock)
                ? getBlockComponent(expandedBlock)
                : null;

            return (
              <div
                key={item?.ContentLink?.Id || `slide-${index}`}
                className={`carousel-item ${index === 0 ? 'active' : ''}`}
                aria-hidden={index !== 0 ? 'true' : 'false'}
              >
                {BlockComponent ? (
                  <BlockComponent block={expandedBlock as never} />
                ) : (
                  <div
                    className="d-flex align-items-center justify-content-center bg-light text-muted"
                    style={{ minHeight: '400px' }}
                    role="img"
                    aria-label="Unsupported content placeholder"
                  >
                    <div className="text-center p-4">
                      <h3 className="h4">Unsupported Content</h3>
                      <p className="mb-1">
                        Content Link ID: {item?.ContentLink?.Id}
                      </p>
                      <p className="mb-0">
                        Block type:{' '}
                        <code>{expandedBlock?.__typename || 'N/A'}</code>
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Carousel Controls */}
        {showControls && CarouselItems.length > 1 && (
          <>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target={`#${carouselId}`}
              data-bs-slide="prev"
              aria-label="Previous slide"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target={`#${carouselId}`}
              data-bs-slide="next"
              aria-label="Next slide"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </>
        )}
      </div>
    </div>
  );
}
