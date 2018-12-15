import React from 'react';

import { Link } from 'react-router-dom'

const Confirm9 = (props) => {
    return (
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
    );
};

export default Confirm9;
