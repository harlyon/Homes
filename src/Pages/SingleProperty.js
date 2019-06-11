import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "../Firebase";

class SingleProperty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      property: {},
      key: "",
      user: {}
    };
  }

  componentDidMount() {
    this.authListener();
    const ref = firebase
      .firestore()
      .collection("properties")
      .doc(this.props.match.params.id);
    ref.get().then(doc => {
      if (doc.exists) {
        this.setState({
          property: doc.data(),
          key: doc.id
        });
      } else {
        console.log("No such document!");
      }
    });
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

  delete(id) {
    firebase
      .firestore()
      .collection("properties")
      .doc(id)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
        this.props.history.push("/properties");
      })
      .catch(error => {
        console.error("Error removing document: ", error);
      });
  }

  render() {
    console.log(this.state.property);
    return (
      <div>
        <section className="section-padding bg-dark inner-header">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="mt-0 mb-3">Featured Listing</h1>
                <div className="breadcrumbs">
                  <p className="mb-0">
                    <a href="/">
                      <i className="mdi mdi-home-outline" /> Home
                    </a>{" "}
                    / Featured Listing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="card bg-dark text-white card-overlay">
                  <a href="/">
                    <img
                      className="card-img"
                      src={
                        this.state.property.image !== undefined
                          ? this.state.property.image.avatarURL
                          : ""
                      }
                      alt="Card"
                    />
                  </a>
                </div>
                <section className="samar-slider">
                  <div className="property-single-title property-single-title-gallery">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-8 col-md-8">
                          <h1>{this.state.property.title}</h1>
                          <h6>
                            <i className="mdi mdi-home-map-marker" />
                            {this.state.property.address}
                          </h6>
                        </div>
                        <div className="col-lg-4 col-md-4 text-right">
                          <h6 className="mt-2">{this.state.property.title}</h6>
                          <h2 className="text-primary">
                            {this.state.property.price}{" "}
                            <small>{this.state.property.type}</small>
                          </h2>
                        </div>
                      </div>
                      <hr />
                      <h6 className="text-center">
                        For more information send email to Email -{" "}
                        <strong>agent@propertyajauror.nk</strong>
                      </h6>
                    </div>
                  </div>
                </section>
                <div className="card padding-card property-single-slider">
                  <div className="card-body">
                    <h5 className="card-title mb-3">Description</h5>
                    <div className="row">
                      <div className="col-lg-4 col-md-4">
                        <div className="list-icon">
                          <i className="mdi mdi-car-convertible" />
                          <strong>Garage:</strong>
                          <p className="mb-0">
                            {this.state.property.garages} Garage/Garages
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4">
                        <div className="list-icon">
                          <i className="mdi mdi-sofa" />
                          <strong>Beds:</strong>
                          <p className="mb-0">
                            {this.state.property.bedroom} Bedroom/Bedrooms
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4">
                        <div className="list-icon">
                          <i className="mdi mdi-hot-tub" />
                          <strong>Baths:</strong>
                          <p className="mb-0">
                            {this.state.property.bathroom} Bathroom/Bathrooms
                          </p>
                        </div>
                      </div>
                    </div>
                    <p>{this.state.property.description}. </p>
                    <div className="row mb-3">
                      <div className="col-lg-6 col-md-6">
                        <p>
                          <strong className="text-dark">City : </strong>{" "}
                          {this.state.property.city}
                        </p>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <p>
                          <strong className="text-dark">Country : </strong>
                          {this.state.property.country}
                        </p>
                      </div>
                    </div>
                  </div>
                  {this.state.user ? (
                    <div className="row mb-3">
                      <div className="col-lg-6 col-md-6">
                        <button
                          onClick={this.delete.bind(this, this.state.key)}
                          className="btn btn-danger"
                        >
                          Delete Property
                        </button>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <Link
                          to={`/edit/${this.state.key}`}
                          className="btn btn-secondary"
                        >
                          Edit Property
                        </Link>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default SingleProperty;
