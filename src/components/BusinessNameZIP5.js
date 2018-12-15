import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class BusinessNameZIP5 extends Component {

  constructor(props){
    super();
    this.state = {
      bName: props.initialBusinessName,
      bZip: props.initialBusinessZIP,
    };
  }

  onChangeBN() {
    this.props.b5Change(this.state.bName, this.state.bZip);
  }

  onHandleChangeBName(event) {
    this.setState({
      bName: event.target.value
    });
  }

  onHandleChangeBZip(event) {
    this.setState({
      bZip: event.target.value
    });
  }

  render(){
    return(
      <div className="BodyComponent">
        <div className="CenterAlignButtonsAndInputs">
          <div>
            <p className="LargeText">What is the name of your business?</p>
          </div>
          <div>
            <input
              className="InputStandard"
              type="text"
              value={this.state.bName}
              onChange={(event) => this.onHandleChangeBName(event)}
            />
            <div>
              <p className="LargeText">What is your business ZIP Code?</p>
            </div>
            <input
              className="InputStandard"
              type="text"
              value={this.state.bZip}
              onChange={(event) => this.onHandleChangeBZip(event)}
            />
            <br/>
            <br/>
            <button onClick={this.onChangeBN.bind(this)} className="InputStandard"><Link to="/ContactName6" className="BlackNoUnderlineLink">Continue</Link></button>
          </div>
        </div>
      </div>
    );
  }
}

export default BusinessNameZIP5;
