import React, { Component } from 'react';

import { Link } from 'react-router-dom'

class CreditScore7 extends Component {

  constructor(props){
    super();
    this.state = {
      gr: "Excellent (720+)",
      gd: "Good (680-719)",
      fr: "Fair (640-679)",
      pr: "Poor (639 or less)"
    };
  }

  c7great() {
    this.props.c7Change(this.state.gr);
  }

  c7good() {
    this.props.c7Change(this.state.gd);
  }

  c7fair() {
    this.props.c7Change(this.state.fr);
  }

  c7poor() {
    this.props.c7Change(this.state.pr);
  }

  render(){
    return(
      <div className="BodyComponent">
        <div>
          <p className="LargeText">What is your credit score?</p>
        </div>
        <div className="ButtonRow">
          <button onClick={this.c7great.bind(this)} className="RoundButton"><Link to="/PhoneEmail8" className="WhiteNoUnderlineLink">Excellent (720+)</Link></button>
          <button onClick={this.c7good.bind(this)} className="RoundButton"><Link to="/PhoneEmail8" className="WhiteNoUnderlineLink">Good (680-719)</Link></button>
          <button onClick={this.c7fair.bind(this)} className="RoundButton"><Link to="/PhoneEmail8" className="WhiteNoUnderlineLink">Fair (640-679)</Link></button>
          <button onClick={this.c7poor.bind(this)} className="RoundButton"><Link to="/PhoneEmail8" className="WhiteNoUnderlineLink">Poor (639 or less)</Link></button>
        </div>
        <br/>
        <br/>
        <div className="App">
          (We have lenders who can help all credit scenarios.)
        </div>
      </div>
    );
  }
}

export default CreditScore7;
