import Email from '@/components/Header/SignIn/Email';
import Password from '@/components/Header/SignIn/Password';
import RememberMe from '@/components/Header/SignIn/RememberMe';
import LoginButton from '@/components/Header/SignIn/LoginButton';
import ForgotPassword from '@/components/Header/SignIn/ForgotPassword';

const MobileSignInForm = () => {
  return (
    <form method="post">
      <li className="offside-navbar--menu__item">
        <Email />
      </li>
      <li className="offside-navbar--menu__item">
        <Password />
      </li>
      <li className="offside-navbar--menu__item">
        <RememberMe />
      </li>
      <li className="offside-navbar--menu__item">
        <LoginButton />
      </li>
      <li className="offside-navbar--menu__item">
        <ForgotPassword />
      </li>
    </form>
  );
};

export default MobileSignInForm;
