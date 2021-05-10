import React from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Home = () => {
  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo } = userLogin;

  return (
    <Container fluid className='h1 p-5 text-center'>
      Home Page {userInfo && userInfo.name}
    </Container>
  );
};

export default Home;
