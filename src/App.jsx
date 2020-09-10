import React from 'react';
import './App.css';
import NumPad from './Pad/num_pad.jsx';
import Display from './display/display.jsx'
//bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      expression: '0', 
      result : '0',
    }
    this.addToExpression = this.addToExpression.bind(this)
    this.clear = this.clear.bind(this)
    this.evaluate = this.evaluate.bind(this)
  }
  evaluate(){
    const result = eval(this.state.expression)
    this.setState({result})
    this.setState(state => ({
      expression : state.expression + " = " + result
    }))
  }
  clear(){
    this.setState(state => ({
      expression : '0',
      result:'0'
    }))
  }

  addToExpression(char){
    let expression = this.state.expression;
    if(/=/.test(expression)){this.clear()}
    if(char === 'X'){char='*'}
    if(/\D/.test(char) && /\D$/.test(expression) && char !== '.'){ // if input is non-digit
      
      this.setState({expression : expression.replace(/^0/,'').replace(/\D$/ , char)})
    }else{
    this.setState(state => ({
      expression : state.expression.replace(/^0/,'')+char
    }))
    }
  }
  render(){
    const result = this.state.result;
    const expression = this.state.expression;
    return (
      <div className="container">
        <Display result={result} expression={expression}/>
        <NumPad addToExpression={this.addToExpression} equal={this.evaluate} clear={this.clear}/>
      </div>
    );
  }
}

export default App;
