import React from 'react';
import './App.css';
import NumPad from './Pad/num_pad.jsx';
import Display from './display/display.jsx';
//bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      expression: '0', 
    }
    this.addToExpression = this.addToExpression.bind(this)
    this.clear = this.clear.bind(this)
    this.evaluate = this.evaluate.bind(this)
  }
  
  evaluate(){
    let result = eval(this.state.expression)
    this.setState({expression : result})
  }
  clear(){
    this.setState(state => ({
      expression : '0',
    }))
  }

  addToExpression(char){
    let expression = this.state.expression;
    if(char === 'X'){char='*'}
    if(/\D/.test(char) && /\D$/.test(expression) && char !== '.'){
      if(char !== '-'){
        this.setState({expression:expression.replace(/\D$/ , char)})
      }
      
    }
    else if(char === '.' && /\.\d*$/.test(expression)){}
    else{
    this.setState(state => ({
      expression : state.expression.toString().replace(/^0/,'')+char
    }))
    }
  }
  render(){
    const result = this.state.result;
    const expression = this.state.expression;
    return (
      <div className="container">
        <div className="row">
        <div className="col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-8 offset-2 col-sm-8 offset-sm-2">
        <Display result={result} expression={expression}/>
        <NumPad addToExpression={this.addToExpression} equal={this.evaluate} clear={this.clear}/>
   
        </div>
    </div>
      </div>
    );
  }
}

export default App;
