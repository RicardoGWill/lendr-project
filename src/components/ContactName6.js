import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class ContactName6 extends Component {

  constructor(props){
    super();
    this.state = {
      cFirst: props.initialFirstName,
      cLast: props.initialLastName,
    };
  }

  onChangeN() {
    this.props.c6Change(this.state.cFirst, this.state.cLast);
  }

  onHandleChangeCFirst(event) {
    this.setState({
      cFirst: event.target.value
    });
  }

  onHandleChangeCLast(event) {
    this.setState({
      cLast: event.target.value
    });
  }

  render(){
    return(
      <div className="BodyComponent">
        <div className="CenterAlignButtonsAndInputs">
          <div>
            <p className="LargeText">What is your name?</p>
          </div>
          <div>
            <div>
              First:
            </div>
            <input
              className="InputStandard"
              type="text"
              value={this.state.cFirst}
              onChange={(event) => this.onHandleChangeCFirst(event)}
            />
            <div>
              Last:
            </div>
            <input
              className="InputStandard"
              type="text"
              value={this.state.cLast}
              onChange={(event) => this.onHandleChangeCLast(event)}
            />
            <br/>
            <br/>
            <button onClick={this.onChangeN.bind(this)} className="InputStandard">
              <Link to="/CreditScore7" className="BlackNoUnderlineLink">Continue
              </Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactName6;
