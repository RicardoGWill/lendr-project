import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';

import { Link } from 'react-router-dom'

/*
  {this.props.children} refers to the "Switch" with multiple "Route"s inside
  the "Root" tag in App.js.  Thus, as shown below, Header.js is always
  rendered at the top whenever Home.js or User.js are shown.
*/
class Root extends Component {
  render(){
    return(
      <div>
        <div>
          <Header/>
        </div>
        <hr/>
        <div className="LinkBar">
          <Link to="/BusinessType1" className="LinkBarItem">Business Type </Link>
          <Link to="/Money2" className="LinkBarItem">Loan Amount </Link>
          <Link to="/BusinessStart3" className="LinkBarItem">Business Founding </Link>
          <Link to="/Revenue4" className="LinkBarItem">Revenue </Link>
          <Link to="/BusinessNameZIP5" className="LinkBarItem">Business Name and ZIP </Link>
          <Link to="/ContactName6" className="LinkBarItem">Name </Link>
          <Link to="/CreditScore7" className="LinkBarItem">Credit Score </Link>
          <Link to="/PhoneEmail8" className="LinkBarItem">Contact Info </Link>
          <Link to="/Confirm9" className="LinkBarItem">Confirmation </Link>
        </div>
        <hr/>
        <div>
          {this.props.children}
        </div>
        <div>
          <Footer/>
        </div>
      </div>

    );
  }
}

export default Root;
