import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import firebase from 'firebase';
import Firestore from './Firestore';

class Confirm extends Component {

  constructor(props) {
    super();
    this.state = {
      bizType1: props.b1ChangedProp,
      money2: props.m2ChangedProp,
      month3: props.b3mChangedProp,
      year3: props.b3yChangedProp,
      revenue4: props.r4ChangedProp,
      busName5: props.b5nChangedProp,
      busZIP5: props.b5zChangedProp,
      nameF6: props.c6fChangedProp,
      nameL6: props.c6lChangedProp,
      credit7: props.c7ChangedProp,
      phone8: props.p8pChangedProp,
      email8: props.p8eChangedProp,
      items: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitAndBlank = this.submitAndBlank.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  // This was previously here, but now is in App.js
  /*
  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref('items');
    const item = {
      businessType: this.state.bizType1,
      money: this.state.money2,
      month: this.state.month3,
      year: this.state.year3,
      revenue: this.state.revenue4,
      busName: this.state.busName5,
      busZIP: this.state.busZIP5,
      firstName: this.state.nameF6,
      lastName: this.state.nameL6,
      credit: this.state.credit7,
      phone: this.state.phone8,
      email: this.state.email8
    }
    itemsRef.push(item);
    this.setState({
      bizType1: '',
      money2: '',
      month3: '',
      year3: '',
      revenue4: '',
      busName5: '',
      busZIP5: '',
      nameF6: '',
      nameL6: '',
      credit7: '',
      phone8: '',
      email8: '',
    });
  }
  */

  submitAndBlank(e) {
    this.props.submitChange(e);
  }

  render(){
    // This const "props" makes you not have to write "this." before "props" below.
    // With a "stateless" component, "this" is unnecessary, but it is needed here
    // in a "stateful" component.
    const props = this.props;

    // STARTED TODAY
    const linkTo = (
      this.state.bizType1 != "No Business Type Chosen" &&
      this.state.money2 != "" &&
      this.state.month3 != "" &&
      this.state.year3 != "" &&
      this.state.revenue4 != "" &&
      this.state.busName != "" &&
      this.state.busZIP5 != "" &&
      this.state.nameF6 != "" &&
      this.state.namL6 != "" &&
      this.state.credit7 != "No Credit Score Selected" &&
      this.state.phone8 != "" &&
      this.state.email8 != ""
    ) ? "/Final" : "/Confirm9";


    // This starts the "return" of the user interface.
    return(
      <div>
        <div>
          <div className="HorizontalFlex">
            <div className="FirstItem">
              Business Type:
            </div>
            <div className="SecondItem">
              {props.b1ChangedProp}
            </div>
          </div>
          <div className="HorizontalFlex">
            <div className="FirstItem">
              Loan Amount Desired:
            </div>
            <div className="SecondItem">
              ${props.m2ChangedProp}
            </div>
          </div>
          <div className="HorizontalFlex">
            <div className="FirstItem">
              Year Business was Founded:
            </div>
            <div className="SecondItem">
              {props.b3mChangedProp}/{props.b3yChangedProp}
            </div>
          </div>
          <div className="HorizontalFlex">
            <div className="FirstItem">
              Your Annual Revenue:
            </div>
            <div className="SecondItem">
              ${props.r4ChangedProp}
            </div>
          </div>
          <div className="HorizontalFlex">
            <div className="FirstItem">
              Your Business Name:
            </div>
            <div className="SecondItem">
              {props.b5nChangedProp}
            </div>
          </div>
          <div className="HorizontalFlex">
            <div className="FirstItem">
              Your Business ZIP:
            </div>
            <div className="SecondItem">
              {props.b5zChangedProp}
            </div>
          </div>
          <div className="HorizontalFlex">
            <div className="FirstItem">
              Your First Name:
            </div>
            <div className="SecondItem">
              {props.c6fChangedProp}
            </div>
          </div>
          <div className="HorizontalFlex">
            <div className="FirstItem">
              Your Last Name:
            </div>
            <div className="SecondItem">
              {props.c6lChangedProp}
            </div>
          </div>
          <div className="HorizontalFlex">
            <div className="FirstItem">
              Your Credit Score:
            </div>
            <div className="SecondItem">
              {props.c7ChangedProp}
            </div>
          </div>
          <div className="HorizontalFlex">
            <div className="FirstItem">
              Your Phone Number:
            </div>
            <div className="SecondItem">
              {props.p8pChangedProp}
            </div>
          </div>
          <div className="HorizontalFlex">
            <div className="FirstItem">
              Your Email Address:
            </div>
            <div className="SecondItem">
              {props.p8eChangedProp}
            </div>
          </div>
          <div className="ButtonRow">
            <div className="FirstItem">
              <button className="CustomRedButton">
                <Link to="/BusinessType1"
                  className="WhiteNoUnderlineLink">Infomation is NOT Correct
                </Link>
              </button>
            </div>
            <div className="SecondItem">
              <button className="CustomGreenButton" onClick={this.submitAndBlank}>
                <Link to={linkTo}
                  className="WhiteNoUnderlineLink">Information is CORRECT
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Confirm;
