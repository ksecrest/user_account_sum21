import { Switch, Route } from 'react-router-dom';
import Home from './components/shared/Home';
import NoMatch from './components/shared/NoMatch';
import Profile from './components/user/Profile';
import Navbar from './components/shared/Navbar';
import { Container } from 'semantic-ui-react';


const App = () => (
  <>
  <Navbar />
  <Container>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/profile" component={Profile} />
      <Route component={NoMatch} />
    </Switch>
  </Container>
  </>
)

export default App;
