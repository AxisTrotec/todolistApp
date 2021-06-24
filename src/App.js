import {Route, Switch} from 'react-router-dom';
import './index.css';
import { createContext } from 'react';

import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Error from './components/Error';

export const data = createContext(null);

function App(props){
  return(
    <data.Provider value={props}>
      <Navbar />
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/about' component={About} />
        <Route component={Error}/>
      </Switch>
    </data.Provider>
  )
}

export default App;