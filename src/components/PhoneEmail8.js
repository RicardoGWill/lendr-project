import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class PhoneEmail8 extends Component {

  constructor(props){
    super();
    this.state = {
      phone: props.initialPhone,
      email: props.initialEmail,
    };
  }

  onChangeP8() {
    this.props.p8Change(this.state.phone, this.state.email);
  }

  onHandleChangePhone(event) {
    this.setState({
      phone: event.target.value
    });
  }

  onHandleChangeEmail(event) {
    this.setState({
      email: event.target.value
    });
  }

  render(){
    return(
      <div className="BodyComponent">
        <div className="CenterAlignButtonsAndInputs">
          <div>
            <p className="LargeText">What is the best way to reach you?</p>
          </div>
          <div>
            <div>
              Phone Number:
            </div>
            <input
              className="InputStandard"
              type="text"
              value={this.state.phone}
              onChange={(event) => this.onHandleChangePhone(event)}
            />
            <div>
              Email Address:
            </div>
            <input
              className="InputStandard"
              type="text"
              value={this.state.email}
              onChange={(event) => this.onHandleChangeEmail(event)}
            />
            <br/>
            <br/>
            <button onClick={this.onChangeP8.bind(this)} className="InputStandard"><Link to="/Confirm9" className="BlackNoUnderlineLink">Continue</Link></button>
          </div>
        </div>
      </div>
    );
  }
}

export default PhoneEmail8;
