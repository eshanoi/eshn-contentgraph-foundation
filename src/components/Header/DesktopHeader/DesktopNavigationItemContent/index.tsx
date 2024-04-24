import type { FC } from 'react';
import type { NavigationContent } from '@/components/Header/types';
import Link from 'next/link';
import Image from 'next/image';

type Props = NavigationContent;

const DesktopNavigationItemContent: FC<Props> = ({
  subNavigations,
  bannerSrc,
}) => {
  return (
    <div className="mega-container" style={{ top: '116px', left: 0 }}>
      <div className="mega-menu--header__item">
        <div className="col-md-auto mega-menu-wrapper">
          <div className="row">
            {subNavigations.map((subNav) => (
              <div
                className={`col-${12 / subNavigations.length}`}
                key={`${subNav.title}-pc`}
              >
                <ul className="category__item">
                  <li className="main-category">{subNav.title}</li>
                  {subNav.items.map((item) => (
                    <li key={`${item.name}-pc`}>
                      <Link href={item.href} className="link">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {bannerSrc && (
          <div className="row mega-menu--image-box__lg">
            <div className="category__image col-lg-6">
              <picture className="img-fluid">
                <source srcSet={bannerSrc} />
                <Image
                  className="img-fluid"
                  src={bannerSrc}
                  alt="navigation-banner"
                  width="640"
                  height="427"
                />
              </picture>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DesktopNavigationItemContent;
