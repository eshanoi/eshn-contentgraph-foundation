import Email from '@/components/Header/SignIn/Email';
import Password from '@/components/Header/SignIn/Password';
import RememberMe from '@/components/Header/SignIn/RememberMe';
import LoginButton from '@/components/Header/SignIn/LoginButton';
import ForgotPassword from '@/components/Header/SignIn/ForgotPassword';
import type { FC } from 'react';

const SignIn: FC = () => {
  return (
    <form method="post" role="form">
      <div className="login-user__signin-form">
        <Email />
        <Password />
        <RememberMe />
        <div className="login-users__bottom">
          <LoginButton />
          <ForgotPassword />
        </div>
      </div>
    </form>
  );
};

export default SignIn;
