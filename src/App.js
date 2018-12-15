import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Root from './components/Root';
import BusinessType1 from './components/BusinessType1';
import Money2 from './components/Money2';
import BusinessStart3 from './components/BusinessStart3';
import Revenue4 from './components/Revenue4';
import BusinessNameZIP5 from './components/BusinessNameZIP5';
import ContactName6 from './components/ContactName6';
import CreditScore7 from './components/CreditScore7';
import PhoneEmail8 from './components/PhoneEmail8';
import Confirm9 from './components/Confirm9';
import Final from './components/Final';

class App extends Component {
  constructor(){
    super();
    this.state = {
      bizType1: "No Business Type Chosen",
      money2: null,
      month3: "01",
      year3: "2010",
      revenue4: null,
      busName5: null,
      busZIP5: null,
      nameF6: null,
      nameL6: null,
      credit7: "No Credit Score Selected",
      phone8: null,
      email8: null
    };
  }

  onChangeB1(newName) {
    this.setState({
      bizType1: newName
    });
  }

  onChangeM2(newName) {
    this.setState({
      money2: newName
    });
  }

  onChangeB3(newNameMonth, newNameYear) {
    this.setState({
      month3: newNameMonth,
      year3: newNameYear
    });
  }

  onChangeR4(newName) {
    this.setState({
      revenue4: newName
    });
  }

  onChangeB5(newName, newZIP) {
    this.setState({
      busName5: newName,
      busZIP5: newZIP
    });
  }

  onChangeC6(newFirstName, newLastName) {
    this.setState({
      nameF6: newFirstName,
      nameL6: newLastName
    });
  }

  onChangeC7(newName) {
    this.setState({
      credit7: newName
    });
  }

  onChangeP8(newPhone, newEmail) {
    this.setState({
      phone8: newPhone,
      email8: newEmail
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Root>
            <Switch>
              <Route
                exact path="/"
                component={() => <BusinessType1
                  b1Change={this.onChangeB1.bind(this)}
                />}
              />
              <Route path="/BusinessType1"
                component={() => <BusinessType1
                  b1Change={this.onChangeB1.bind(this)}
                />}
              />
              <Route path="/Money2"
                component={() => <Money2
                  initialMoney={this.state.money2}
                  m2Change={this.onChangeM2.bind(this)}
                />}
              />
              <Route path="/BusinessStart3"
                component={() => <BusinessStart3
                  initialMonth={this.state.month3}
                  initialYear={this.state.year3}
                  b3Change={this.onChangeB3.bind(this)}
                />}
              />
              <Route path="/Revenue4"
                component={() => <Revenue4
                  initialRevenue={this.state.revenue4}
                  r4Change={this.onChangeR4.bind(this)}
                />}
              />
              <Route path="/BusinessNameZIP5"
                component={() => <BusinessNameZIP5
                  initialBusinessName={this.state.busName5}
                  initialBusinessZIP={this.state.busZIP5}
                  b5Change={this.onChangeB5.bind(this)}
                />}
              />
              <Route path="/ContactName6"
                component={() => <ContactName6
                  initialFirstName={this.state.nameF6}
                  initialLastName={this.state.nameL6}
                  c6Change={this.onChangeC6.bind(this)}
                />}
              />
              <Route path="/CreditScore7"
                component={() => <CreditScore7
                  c7Change={this.onChangeC7.bind(this)}
                />}
              />
              <Route path="/PhoneEmail8"
                component={() => <PhoneEmail8
                  initialPhone={this.state.phone8}
                  initialEmail={this.state.email8}
                  p8Change={this.onChangeP8.bind(this)}
                />}
              />
              <Route
                path="/Confirm9"
                component={() => <Confirm9
                  hLink={this.state.homeLink}
                  b1ChangedProp={this.state.bizType1}
                  m2ChangedProp={this.state.money2}
                  b3mChangedProp={this.state.month3}
                  b3yChangedProp={this.state.year3}
                  r4ChangedProp={this.state.revenue4}
                  b5nChangedProp={this.state.busName5}
                  b5zChangedProp={this.state.busZIP5}
                  c6fChangedProp={this.state.nameF6}
                  c6lChangedProp={this.state.nameL6}
                  c7ChangedProp={this.state.credit7}
                  p8pChangedProp={this.state.phone8}
                  p8eChangedProp={this.state.email8}
                />}
              />
            <Route path="/Final"
                component={() => <Final
                />}
              />
            </Switch>
          </Root>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
