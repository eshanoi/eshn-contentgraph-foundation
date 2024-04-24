import SignUp from '@/components/Header/SignUp';
import Modal from '@/components/common/Modal';

const MobileSignUpModal = () => {
  return (
    <Modal id="signUpMobileModal" title="Sign Up">
      <div className="offside-navbar--menu child-menu d-block">
        <SignUp />
      </div>
    </Modal>
  );
};

export default MobileSignUpModal;
