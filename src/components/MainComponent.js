import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Home from './HomeComponent'
import Members from './MemberComponent'
import Bloodline from './BloodlineComponent'

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
              <Route path="/home" component={()=> <Home />} />
              <Route path="/aboutus" component={HomePage} />
              <Route path="/disha" component={HomePage} />
              <Route path="/escape" component={HomePage} />
              <Route path="/jagriti" component={HomePage} />
              <Route path="/bloodline" component={()=><Bloodline />} />
              <Route exact path="/members" component={() => <Members />} />
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