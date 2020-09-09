import React from 'react';

import './styles.css';


export default class Key extends React.Component {
  
    render(){
        const char = this.props.char;
        const width = this.props.width;
        const cl = this.props.class;
        return(
          <div className={width ? `col-md-${width} col-lg-${width} col-sm-${width} col-${width} padding-0` : "col-md-3 col-lg-3 col-3 col-sm-3 padding-0"}>
            <button className={`btn btn-info btn-lg btn-block`}>
            {char}
          </button>
          </div>
        )
      }
}