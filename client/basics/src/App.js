import React from 'react';
import Formpart from './formpart.js';
import './App.css';
import Welcome from './welcome.js'


function App() {
  return(
      <div className="container-fluid">
      <Welcome />
        <div className="row forms-container mb-5">
          <Formpart text='Strategies'/>
          <Formpart text='Instruments'/>
        </div>
      </div>

  )
}

export default App;