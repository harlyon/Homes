import React, { Component } from "react";
import swal from "sweetalert";
import { Redirect } from "react-router-dom";
import firebase from "../Firebase";

class Login extends Component {
  state = {
    email: "",
    password: "",
    redirect: false
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  validateForm = e => {
    e.preventDefault();
    if (this.state.email !== "" && this.state.password !== "") {
      this.submitForm();
    } else {
      swal("Error", "All fields must be filled in", "error");
    }
  };

  submitForm = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {
        this.setState({ redirect: true });
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    if (this.state.redirect) {
      return <Redirect to={"./Addproperties"} />;
    }
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <section className="section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-5 mx-auto">
                <div className="card padding-card no-radius border t-align-l">
                  <div className="card-body">
                    <h5 className="card-title mb-4">Login</h5>
                    <form onSubmit={this.validateForm} autoComplete="off">
                      <div className="form-group">
                        <label>
                          Email Address <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          name="email"
                          value={this.state.email}
                          onChange={this.handleChange}
                          className="form-control"
                          placeholder="Enter Email Address"
                        />
                      </div>
                      <div className="form-group">
                        <label>
                          Password <span className="text-danger">*</span>
                        </label>
                        <input
                          type="password"
                          name="password"
                          value={this.state.password}
                          onChange={this.handleChange}
                          className="form-control"
                          placeholder="Enter Password"
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg btn-block"
                        value="Submit"
                      >
                        Login
                      </button>
                      email : administrator@gmail.com <br /> password: string
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Login;
