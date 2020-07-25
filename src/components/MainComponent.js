import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Home from './HomeComponent'

class Main extends Component {

  constructor(props) {
    super(props);
  }
  render() {

    const HomePage = () => {
      return(
        <Home />
      );
    }

    return (
      <div>
        <Header />
        <Switch>
              <Route path="/home" component={HomePage} />
              <Route path="/aboutus" component={HomePage} />
              <Route path="/initiatives" component={HomePage} />
              <Route path="/initiatives/disha" component={HomePage} />
              <Route path="/initiatives/escape" component={HomePage} />
              <Route path="/initiatives/jagriti" component={HomePage} />
              <Route path="/initiatives/bloodline" component={HomePage} />
              <Route path="/members" component={HomePage} />
              <Route path="/donate" component={HomePage} />
              <Route path="/contactus" component={HomePage} />
              <Redirect to="/home" />
            </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;