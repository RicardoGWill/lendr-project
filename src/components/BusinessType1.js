import React, { Component } from 'react';

import { Link } from 'react-router-dom'

class BusinessType1 extends Component {
  constructor(props){
    super();
    this.state = {
      sp: "Sole Proprietorship",
      pa: "Partnership",
      co: "Corporation",
      sc: "S Corporation",
      llc: "Limited Liability Company (LLC)"
    };
  }

  b1sp() {
    this.props.b1Change(this.state.sp);
  }

  b1pa() {
    this.props.b1Change(this.state.pa);
  }

  b1co() {
    this.props.b1Change(this.state.co);
  }

  b1sc() {
    this.props.b1Change(this.state.sc);
  }

  b1llc() {
    this.props.b1Change(this.state.llc);
  }

  render(){
    return(
      <div className="BodyComponent">
        <div>
          <p className="LargeText">What type of business do you own?</p>
        </div>
        <div className="ButtonRow">
          <button onClick={this.b1sp.bind(this)} className="RoundButton"><Link to="/Money2"
            className="WhiteNoUnderlineLink">Sole Proprietorship</Link></button>
          <button onClick={this.b1pa.bind(this)} className="RoundButton"><Link to="/Money2"
            className="WhiteNoUnderlineLink">Partnership</Link></button>
          <button onClick={this.b1co.bind(this)} className="RoundButton"><Link to="/Money2"
            className="WhiteNoUnderlineLink">Corporation</Link></button>
          <button onClick={this.b1sc.bind(this)} className="RoundButton"><Link to="/Money2"
            className="WhiteNoUnderlineLink">S Corporation</Link></button>
          <button onClick={this.b1llc.bind(this)} className="RoundButton"><Link to="/Money2"
            className="WhiteNoUnderlineLink">Limited Liability Company (LLC)</Link></button>
        </div>
      </div>
    );
  }
}

export default BusinessType1;
