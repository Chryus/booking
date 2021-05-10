import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

const TopNav = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>Hotel Land</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/'>
                    <NavDropdown.Item>My Hotels</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={''}>Logout</NavDropdown.Item>
                </NavDropdown>
              ) : (
                <NavDropdown title='New User' id='adminmenu '>
                  <LinkContainer to='login'>
                    <NavDropdown.Item>
                      <i className='fas fa-user'></i>Sign In
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/productlist'>
                    <NavDropdown.Item>
                      <i className='fas fa-user'></i>Register
                    </NavDropdown.Item>
                  </LinkContainer>{' '}
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default TopNav;
