import React from 'react';
import {IDS} from './ids';
import './styles.css';


export default class Key extends React.Component {
  
    render(){
        const char = this.props.char;
        const width = this.props.width;
        return(
          <div className={width ? `col-md-${width} col-lg-${width} col-sm-${width} col-${width} padding-0` : "col-md-3 col-lg-3 col-3 col-sm-3 padding-0"}>
            <button id={IDS[char]} onClick={()=>this.props.addToExpression(char)} className={`btn btn-dark btn-lg btn-block`}>
            {char}
          </button>
          </div>
        )
      }
}