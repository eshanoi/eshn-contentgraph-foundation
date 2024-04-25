import DesktopHeader from '@/components/Header/DesktopHeader';
import MobileHeader from '@/components/Header/MobileHeader';

const Header = () => {
  return (
    <div className="header">
      <div className="header__wrapper">
        <DesktopHeader />
        <MobileHeader />
      </div>
    </div>
  );
};

export default Header;
