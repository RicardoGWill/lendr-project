import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import firebase from 'firebase';
import Firestore from './Firestore';

class Confirm extends Component {

  constructor(props) {
    super();
    this.state = {
      bizType1: props.b1ChangedProp,
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
      items: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

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




  render(){
    // This const "props" makes you not have to write "this." before "props" below.
    // With a "stateless" component, "this" is unnecessary, but it is needed here
    // in a "stateful" component.
    const props = this.props;
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
              <button className="CustomGreenButton">
                <Link to="/Final"
                  className="WhiteNoUnderlineLink">Information is CORRECT
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="money2" placeholder="Loan Request Amount" onChange={this.handleChange} value={this.state.money2} />
            <input type="text" name="bizType1" placeholder={this.props.b1ChangedProp} onChange={this.handleChange} value={this.state.bizType1} />
            <input type="text" name="month3" placeholder="Month Founded" onChange={this.handleChange} value={this.state.month3} />
            <input type="text" name="year3" placeholder="Year Founded" onChange={this.handleChange} value={this.state.year3} />
            <input type="text" name="revenue4" placeholder="Company Revenue" onChange={this.handleChange} value={this.state.revenue4} />
            <input type="text" name="busName5" placeholder="Business Name" onChange={this.handleChange} value={this.state.busName5} />
            <input type="text" name="busZIP5" placeholder="Business ZIP Code" onChange={this.handleChange} value={this.state.busZIP5} />
            <input type="text" name="nameF6" placeholder="First Name" onChange={this.handleChange} value={this.state.nameF6} />
            <input type="text" name="nameL6" placeholder="Last Name" onChange={this.handleChange} value={this.state.nameL6} />
            <input type="text" name="credit7" placeholder="Credit Score" onChange={this.handleChange} value={this.state.credit7} />
            <input type="text" name="phone8" placeholder="Phone Number" onChange={this.handleChange} value={this.state.phone8} />
            <input type="text" name="email8" placeholder="Email Address" onChange={this.handleChange} value={this.state.email8} />
            <button>Add Item</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Confirm;
