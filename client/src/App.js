import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import {Container} from 'semantic-ui-react'
import NavBar from './components/NavBar';
import About from './pages/About';
import { PRIMARY_COLOR } from './styles';
import ComponentDemo from './pages/ComponentDemo';

function App() {

  return (
    <>
    <NavBar />
    <Container>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/componentDemo' component={ComponentDemo} />
        
      </Switch>
      </Container>
   </>
  );
}

export default App;
