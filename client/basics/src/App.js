import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Instrument from './res/instrument';
import Landing from './res/landing';
import Strategy from './res/strategies'


class App extends Component{

  render(){
  return(
    <Router>
      <div className="App text-white">
            <Route exact path="/" component={Landing} />
            <Route path="/instrument" component={Instrument} />
            <Route path="/strategies" component={Strategy} />
      </div>         
    </Router>
      

  );
}
}

export default App;