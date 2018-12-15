import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class BusinessStart3 extends Component {

  constructor(props){
    super();
    this.state = {
      mon: props.initialMonth,
      yr: props.initialYear,
    };
  }

  onChangeBS() {
    this.props.b3Change(this.state.mon, this.state.yr);
  }

  onHandleChangeMon(event) {
    this.setState({
      mon: event.target.value
    });
  }

  onHandleChangeYr(event) {
    this.setState({
      yr: event.target.value
    });
  }

  render(){
    return(
      <div className="BodyComponent">
        <div className="CenterAlignButtonsAndInputs">
          <div>
            <p className="LargeText">When did you start your business?</p>
          </div>
          <div>
            <input
              className="InputStandard"
              type="text"
              value={this.state.mon}
              onChange={(event) => this.onHandleChangeMon(event)}
            />
            <input
              className="InputStandard"
              type="text"
              value={this.state.yr}
              onChange={(event) => this.onHandleChangeYr(event)}
            />
          <button onClick={this.onChangeBS.bind(this)} className="InputStandard"><Link to="/Revenue4" className="BlackNoUnderlineLink">Continue</Link></button>
            <p>Hire me, and I'll make a dropdown picker! :)</p>
          </div>
        </div>
      </div>
    );
  }
}

export default BusinessStart3;
