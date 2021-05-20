import { useSelector } from 'react-redux';
import { Card, Avatar } from 'antd';
import moment from 'moment';

const { Meta } = Card;

const StripeNav = () => {
  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo } = userLogin;

  return (
    <div className='d-flex justify-content-around'>
      <Card
        avatar={userInfo.name[0]}
        title={userInfo.name}
        description={`Joined ${moment(userInfo.createdAt).fromNow()}`}
      ></Card>
    </div>
  );
};

export default StripeNav;
