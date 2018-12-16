import React, { Component } from 'react';
import firebase from 'firebase';
import Firestore from './Firestore';

class User extends Component {
  constructor(){
    super();
    this.state = {
      email: "",
      fullname: "",
    };
  }

  /*
    Here we update the state of each item above, so the states are set
    before the "addUser" method is called.
  */
  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  /*
    This is the function to ADD a new user (and its data) to the database.
  */
  addUser = e => {
    e.preventDefault();

    const db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true
    });
    const userRef = db.collection("users").add({
      fullname: this.state.fullname,
      email: this.state.email
    });

    this.setState({
      fullname: "",
      email: ""
    });
  };

  /*
    This is the function to GET a new user (and its data) from the database.
  */
  getUser = e => {
    e.preventDefault();

    const db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true
    });

    const userRef = db.collection("users").get()
      .then((snapshot) => {
        snapshot.docs.forEach(doc => {
          console.log(doc.data())
        })
      })
  };

  /*
    Here, we start the render of the elements.
  */
  render(){
    return(
      <div>
        <div>
          <form onSubmit={this.addUser}>
            <input
              type="text"
              name="fullname"
              placeholder="fullname"
              onChange={this.updateInput}
              value={this.state.fullname}
            />
            <input
              type="text"
              name="email"
              placeholder="email"
              onChange={this.updateInput}
              value={this.state.email}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div>
          <p></p>
          <button onClick={this.getUser.bind(this)}>Get User</button>
        </div>
      </div>
    );
  }
}

export default User;

/*
bizType1: "",
money2: "",
month3: "",
year3: "",
revenue4: "",
busName5: "",
busZIP5: "",
nameF6: "",
nameL6: "",
credit7: "",
phone8: "",
email8: ""

<input
  type="text"
  name="bizType1"
  placeholder="bizType1"
  onChange={this.updateInput}
  value={this.state.bizType1}
/>
<input
  type="text"
  name="money2"
  placeholder="money2"
  onChange={this.updateInput}
  value={this.state.money2}
/>
<input
  type="text"
  name="month3"
  placeholder="month3"
  onChange={this.updateInput}
  value={this.state.month3}
/>
<input
  type="text"
  name="year3"
  placeholder="year3"
  onChange={this.updateInput}
  value={this.state.year3}
/>
<input
  type="text"
  name="revenue4"
  placeholder="revenue4"
  onChange={this.updateInput}
  value={this.state.revenue4}
/>
<input
  type="text"
  name="busName5"
  placeholder="busName5"
  onChange={this.updateInput}
  value={this.state.busName5}
/>
<input
  type="text"
  name="busZIP5"
  placeholder="busZIP5"
  onChange={this.updateInput}
  value={this.state.busZIP5}
/>
<input
  type="text"
  name="nameF6"
  placeholder="nameF6"
  onChange={this.updateInput}
  value={this.state.nameF6}
/>
<input
  type="text"
  name="nameL6"
  placeholder="nameL6"
  onChange={this.updateInput}
  value={this.state.nameL6}
/>
<input
  type="text"
  name="credit7"
  placeholder="credit7"
  onChange={this.updateInput}
  value={this.state.credit7}
/>
<input
  type="text"
  name="phone8"
  placeholder="phone8"
  onChange={this.updateInput}
  value={this.state.phone8}
/>
<input
  type="text"
  name="email8"
  placeholder="email8"
  onChange={this.updateInput}
  value={this.state.email8}
/>
*/
