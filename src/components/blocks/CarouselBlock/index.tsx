import type { CarouselBlockFragment } from './CarouselBlockFragment.gql.g';
import { getBlockComponent, hasBlockComponent } from '../';
import { consoleLog } from '@/logger';

export default function CarouselBlock({
  block,
}: {
  block: CarouselBlockFragment;
}) {
  return (
    <div className="carousel-block">
      <h2>Carousel Block (No UI yet)</h2>
      <div className="carousel-items-container">
        {block.CarouselItems?.map((item, index) => {
          const expandedBlock = item?.ContentLink?.Expanded;

          const BlockComponent =
            expandedBlock && hasBlockComponent(expandedBlock)
              ? getBlockComponent(expandedBlock)
              : null;

          return (
            <div key={index} className="my-carousel-item">
              <h3>Item {index + 1}</h3>
              {BlockComponent ? (
                <BlockComponent block={expandedBlock as never} />
              ) : (
                <>
                  <h3>Item {index + 1}</h3>
                  <p>Content Link ID: {item?.ContentLink?.Id}</p>
                  <p>
                    Unsupported or missing block:{' '}
                    {expandedBlock?.__typename || 'N/A'}
                  </p>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
