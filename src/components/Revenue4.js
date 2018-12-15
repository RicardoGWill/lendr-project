import React, { Component } from 'react';

import { Link } from 'react-router-dom'

class Revenue4 extends Component {
  constructor(props){
    super();
    this.state = {
      rev: props.initialRevenue,
    };
  }

  onChangeRevenue() {
    this.props.r4Change(this.state.rev);
  }

  onHandleChange(event) {
    this.setState({
      rev: event.target.value
    });
  }

  render(){
    return(
      <div className="BodyComponent">
        <div className="CenterAlignButtonsAndInputs">
          <div>
            <p className="LargeText">What is your annual revenue?</p>
          </div>
          <div>
            $<input
            className="InputStandard"
              type="text"
              value={this.state.rev}
              onChange={(event) => this.onHandleChange(event)}
            />
          <button onClick={this.onChangeRevenue.bind(this)} className="InputStandard"><Link to="/BusinessNameZIP5"
            className="BlackNoUnderlineLink">Continue</Link></button>
          </div>
        </div>
      </div>
    );
  }
}

export default Revenue4;
