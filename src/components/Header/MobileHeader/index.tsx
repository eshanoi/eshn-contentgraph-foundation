import Logo from '@/components/Header/Logo';
import { LOGO_SRC } from '@/components/Header/constants';
import MobileNavigationDrawer from '@/components/Header/MobileHeader/MobileNavigationDrawer';
import MobileSignUpModal from '@/components/Header/MobileHeader/MobileSignUpModal';
import MobileSearch from '@/components/Header/MobileHeader/MobileSearch';

const MobileHeader = () => {
  return (
    <div className="mobile-navigation-wrapper">
      <div className="d-sm-block d-lg-none">
        <div className="mobile-navigation">
          <div className="mobile-navigation__left">
            <div
              className="mobile-navigation__item"
              id="open-offside-menu"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <div className="hamburger-menu">
                <span className="hamburger-menu__line"></span>
                <span className="hamburger-menu__line"></span>
                <span className="hamburger-menu__line"></span>
              </div>
            </div>
            <div className="mobile-navigation__item">
              <Logo content={{ src: LOGO_SRC }} />
            </div>
          </div>
          <MobileSearch />
        </div>
      </div>
      <MobileNavigationDrawer />
      <MobileSignUpModal />
    </div>
  );
};

export default MobileHeader;
