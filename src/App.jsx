import React from 'react';
import './App.css';
import NumPad from './Pad/num_pad.jsx';
//bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render(){
    return (
      <div className="container">
        
        <NumPad/>
      </div>
    );
  }
}

export default App;
