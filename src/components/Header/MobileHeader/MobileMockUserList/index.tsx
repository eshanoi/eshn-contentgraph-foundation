import { MOCK_USERS } from '@/components/Header/constants';
import MockUserItem from '@/components/Header/MockUserItem';

const MobileMockUserList = () => {
  return (
    <ul className="offside-navbar--menu child-menu">
      {MOCK_USERS.map((user) => (
        <li key={`${user.name}`} className="offside-navbar--menu__item">
          <MockUserItem user={user} />
        </li>
      ))}
    </ul>
  );
};

export default MobileMockUserList;
