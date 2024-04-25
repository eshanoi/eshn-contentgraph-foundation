import Collapse from '@/components/common/Collapse';
import MobileSignInForm from '@/components/Header/MobileHeader/MobileAccountMenu/MobileSignInForm';
import MobileMockUserList from '@/components/Header/MobileHeader/MobileMockUserList';

const MobileAccountMenu = () => {
  return (
    <ul className="offside-navbar--menu">
      <Collapse
        name="Sign In"
        id="signIn"
        className="offside-navbar--menu__item"
      >
        <ul className="offside-navbar--menu child-menu">
          <MobileSignInForm />
        </ul>
      </Collapse>
      <Collapse name="Users" id="users" className="offside-navbar--menu__item">
        <ul className="offside-navbar--menu child-menu">
          <MobileMockUserList />
        </ul>
      </Collapse>
      <li
        className="offside-navbar--menu__item"
        data-bs-toggle="modal"
        data-bs-target="#signUpMobileModal"
      >
        Sign Up
      </li>
    </ul>
  );
};

export default MobileAccountMenu;
