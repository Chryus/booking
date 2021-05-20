import { Tab, Tabs, Row, Col, ListGroup, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const DashboardNav = () => {
  return (
    <>
      <Tabs defaultActiveKey='profile' id='uncontrolled-tab-example'>
        <Tab eventKey='home' title='Your Bookings'>
          hi{' '}
        </Tab>
        <Tab eventKey='profile' title='Your Hotels'>
          yo{' '}
        </Tab>
      </Tabs>
    </>
  );
};

export default DashboardNav;
