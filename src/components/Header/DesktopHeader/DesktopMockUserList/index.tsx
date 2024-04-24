import { MOCK_USERS } from '@/components/Header/constants';
import MockUserItem from '@/components/Header/MockUserItem';

const DesktopMockUserList = () => {
  return (
    <div className="list-group--header">
      {MOCK_USERS.map((user) => (
        <MockUserItem key={`${user.name}-pc`} user={user} />
      ))}
    </div>
  );
};

export default DesktopMockUserList;
