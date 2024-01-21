import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './components/Home'
import Footer from './components/Footer';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home}/>
      </Switch>
    </Router>
  );
};

export default App;
