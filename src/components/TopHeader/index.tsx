import LanguageSwitcher from '@/components/TopHeader/LanguageSwitcher';

const TopHeader = () => {
  return (
    <div className="top-header">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="top-header__banner-text">
              Spend $500 dollars and get $50 Off
            </div>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
