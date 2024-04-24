import getHeaderItem from '@/components/Header/DesktopHeader/getHeaderItem';
import { Fragment } from 'react';
import { DESKTOP_HEADER_ITEMS } from '@/components/Header/DesktopHeader/constants';

const DesktopHeader = () => {
  return (
    <div className="display-none d-lg-block">
      <div className="container">
        <div className="row no-gutters">
          <div className="navigation">
            {DESKTOP_HEADER_ITEMS.map((item) => {
              const Item = getHeaderItem(item, 'pc');
              const HeaderItem = Item && <Item content={item.content} />;
              return (
                <Fragment key={`${item.type}-pc`}>
                  {item.type === 'logo' ? (
                    <div className="navigation__logo flex-center">
                      {HeaderItem}
                    </div>
                  ) : (
                    <>{HeaderItem}</>
                  )}
                </Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopHeader;
