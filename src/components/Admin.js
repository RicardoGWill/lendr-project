import React, { Component } from 'react';
import firebase from 'firebase';
import Firestore from './Firestore';

class Admin extends Component {
  constructor(props) {
    super();
    this.state = {
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
  componentDidMount() {
    const itemsRef = firebase.database().ref('items');
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          businessType: items[item].businessType,
          money: items[item].money,
          month: items[item].month,
          year: items[item].year,
          revenue: items[item].revenue,
          busName: items[item].busName,
          busZIP: items[item].busZIP,
          firstName: items[item].firstName,
          lastName: items[item].lastName,
          credit: items[item].credit,
          phone: items[item].phone,
          email: items[item].email
        });
      }
      this.setState({
        items: newState
      });
    });
  }
  removeItem(itemId) {
    const itemRef = firebase.database().ref(`/items/${itemId}`);
    itemRef.remove();
  }
  render(props) {
    return (
      <div className='app'>
        <header>
            <div className="wrapper">
              <h1>Item List</h1>
            </div>
        </header>
        <div className='container'>
          <section className='add-item'>
                <form onSubmit={this.handleSubmit}>
                  <input type="text" name="money2" placeholder="Loan Request Amount" onChange={this.handleChange} value={this.state.money2} />
                  <input type="text" name="bizType1" placeholder="Business Type" onChange={this.handleChange} value={this.state.bizType1} />
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
          </section>
          <section className='display-item'>
              <div className="wrapper">
                <ul>
                  {this.state.items.map((item) => {
                    return (
                      <li key={item.id}>
                        <h3>Name: {item.lastName}, {item.firstName}</h3>
                        <p><b>Phone:</b> {item.phone}, <b>Email:</b> {item.email}</p>
                        <p><b>Business Name:</b> {item.busName}, <b>Type:</b> {item.businessType}, <b>Revenue:</b> ${item.revenue}, <b>ZIP:</b> {item.busZIP}</p>
                        <p><b>Business Founding:</b> {item.month}/{item.year}</p>
                        <p><b>Amount Requested:</b> ${item.money}, <b>Credit Score:</b> {item.credit}</p>
                        <p><button onClick={() => this.removeItem(item.id)}>Remove Item</button>
                        </p>
                      </li>
                    )
                  })}
                </ul>
              </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Admin;
