import React from 'react';
import './styles.css'
class Display extends React.Component {
    render() {
        return (
            <div id="display-container">
                <div className="row" id="display">
                    <div className="col-12 col-md-12 col-sm-12">
                        <h2>{this.props.expression}</h2>
                    </div>
                </div>
                
            </div>
        );
    }
}
export default Display;