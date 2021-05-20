import { Container } from 'react-bootstrap';
import StripeNav from '../../components/layout/StripeNav';
import DashboardNav from '../../components/layout/DashboardNav';

const Dashboard = () => {
  return (
    <>
      <Container fluid className='bg-secondary p-5'>
        <StripeNav />
      </Container>
      <Container fluid className='p-4'>
        <DashboardNav />
      </Container>
      <Container>
        <p>Show all bookins and a button to browse hotels</p>
      </Container>
    </>
  );
};

export default Dashboard;
