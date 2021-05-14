import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ ...rest }) => {
  const { userLogin } = useSelector((state) => ({ ...state }));
  const { userInfo } = userLogin;

  return userInfo && userInfo.token ? (
    <Route {...rest} />
  ) : (
    <Redirect to='/login' />
  );
};

export default PrivateRoute;
