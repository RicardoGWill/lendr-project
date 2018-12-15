import React, { Component } from 'react';

import { Link } from 'react-router-dom'

class Money2 extends Component {
  constructor(props){
    super();
    this.state = {
      mo: props.initialMoney,
    };
  }

  onChangeMoney() {
    this.props.m2Change(this.state.mo);
  }

  onHandleChange(event) {
    this.setState({
      mo: event.target.value
    });
  }

  render(){
    return(
      <div className="BodyComponent">
        <div className="CenterAlignButtonsAndInputs">
          <div>
            <p className="LargeText">How much money do you need?</p>
          </div>
          <div>
            $<input
              className="InputStandard"
              type="text"
              value={this.state.mo}
              onChange={(event) => this.onHandleChange(event)}
            />
          </div>
          <div className="MarginTop">
            <button onClick={this.onChangeMoney.bind(this)} className="InputStandard">
              <Link to="/BusinessStart3" className="BlackNoUnderlineLink">Continue
              </Link></button>
          </div>
        </div>
      </div>
    );
  }
}

export default Money2;
