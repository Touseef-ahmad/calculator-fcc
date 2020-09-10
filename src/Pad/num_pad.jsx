import React from 'react';
import Key from './key.jsx'

class NumPad extends React.Component {
  render() {
    return (
      <div className="row">
           <div className="col-md-12 col-lg-12 col-sm-12 col-12">
        <div className="row">
          <Key addToExpression={this.props.clear} char="AC" width={6}/>
          <Key addToExpression={this.props.addToExpression} char="/" />
          <Key addToExpression={this.props.addToExpression} char="X" />
        </div>
        <div className="row">
          <Key addToExpression={this.props.addToExpression} char="7" />
          <Key addToExpression={this.props.addToExpression} char="8" />
          <Key addToExpression={this.props.addToExpression} char="9" />
          <Key addToExpression={this.props.addToExpression} char="-" />
        </div>
        <div className="row">
          <Key addToExpression={this.props.addToExpression} char="4" />
          <Key addToExpression={this.props.addToExpression} char="5" />
          <Key addToExpression={this.props.addToExpression} char="6" />
          <Key addToExpression={this.props.addToExpression} char="+" />
        </div>
        <div className="row">
          <div className="col-md-9 col-lg-9 col-9 col-sm-9">
            <div className="row">
              <Key addToExpression={this.props.addToExpression} char="1" width={4}/>
              <Key addToExpression={this.props.addToExpression} char="2" width={4}/>
              <Key addToExpression={this.props.addToExpression} char="3" width={4}/>
            </div>
            <div className="row">
              <Key addToExpression={this.props.addToExpression} char="0" width={8}/>
              <Key addToExpression={this.props.addToExpression} char="." width={4}/>
            </div>
          </div>
          <div className="col-md-3 col-lg-3 col-3 col-sm-3">
          <Key addToExpression={this.props.equal} char="=" width={12}/>
          </div>
        </div>

      </div>
   
      </div>
    );
  }
}

export default NumPad;
