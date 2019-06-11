import React, { Component } from "react";
import firebase from "../../Firebase";
import UserNavbar from "./UserNavbar";
import Navbar from "./Navbar";

class Index extends Component {
  state = {
    user: {}
  };

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return <div>{this.state.user ? <UserNavbar /> : <Navbar />}</div>;
  }
}

export default Index;
