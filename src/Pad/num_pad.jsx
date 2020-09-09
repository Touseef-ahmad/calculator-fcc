import React from 'react';
import Key from './key.jsx'

class NumPad extends React.Component {
  render() {
    return (
      <div className="row">
           <div className="col-md-12 col-lg-12 col-sm-12 col-12">
        <div className="row">
          <Key char="AC" width={6}/>
          <Key char="/" />
          <Key char="X" />
        </div>
        <div className="row">
          <Key char="7" />
          <Key char="8" />
          <Key char="9" />
          <Key char="-" />
        </div>
        <div className="row">
          <Key char="4" />
          <Key char="5" />
          <Key char="6" />
          <Key char="+" />
        </div>
        <div className="row">
          <div className="col-md-9 col-lg-9 col-9 col-sm-9">
            <div className="row">
              <Key char="1" width={4}/>
              <Key char="2" width={4}/>
              <Key char="3" width={4}/>
            </div>
            <div className="row">
              <Key char="0" width={8}/>
              <Key char="." width={4}/>
            </div>
          </div>
          <div className="col-md-3 col-lg-3 col-3 col-sm-3">
          <Key char="=" width={12} class="equal"/>
          </div>
        </div>

      </div>
   
      </div>
    );
  }
}

export default NumPad;
