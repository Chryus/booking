import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TopNav from './components/layout/TopNav';
import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';

function App() {
  return (
    <Router>
      <TopNav />
      <main className='py-3'>
        <Container>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
          </Switch>
        </Container>
      </main>
    </Router>
  );
}

export default App;
