
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Users from './pages/Users';
import Add from './pages/Add';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/read' component={Users} exact/>
        <Route path='/save' component={Add} exact/>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
