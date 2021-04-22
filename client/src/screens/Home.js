import React from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Home = () => {
  const { user } = useSelector((state) => ({ ...state }));
  return (
    <Container fluid className='h1 p-5 text-center'>
      Home Page {JSON.stringify(user)}
    </Container>
  );
};

export default Home;
