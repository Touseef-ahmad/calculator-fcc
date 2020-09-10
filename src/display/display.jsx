import React from 'react';
import './styles.css'
class Display extends React.Component {
    render() {
        return (
            <div id="display">
                <div className="row">
                    <div className="col-12 col-md-12 col-sm-12">
                        <p>{this.props.expression}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-12 col-sm-12">
                        <h2>{this.props.result}</h2>
                    </div>
                </div>
            </div>
        );
    }
}
export default Display;