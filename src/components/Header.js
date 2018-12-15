import React, { Component } from 'react';

class Header extends Component {
  render(){
    return(
      <div>
      <header className ="App-header">
        <img src="https://fykc6449ui43pz4472lmw5nd-wpengine.netdna-ssl.com/wp-content/themes/lendr/public/img/logo-fff.png" className="App-logo" alt="logo" />
        <div className="Call">Call us:  </div>
        <div className="Tel">888-887-2812</div>
      </header>
      </div>
    );
  }
}

export default Header;
