import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "../Firebase";
import Input from "../Components/Input";

class Properties extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("properties");
    this.unsubscribe = null;
    this.state = {
      properties: []
    };
  }

  onUpdate = querySnapshot => {
    const properties = [];
    querySnapshot.forEach(doc => {
      const {
        title,
        description,
        address,
        city,
        country,
        garages,
        bedroom,
        bathroom,
        price,
        type,
        image
      } = doc.data();
      properties.push({
        key: doc.id,
        doc, // DocumentSnapshot
        title,
        description,
        address,
        city,
        country,
        garages,
        bedroom,
        bathroom,
        price,
        type,
        image
      });
    });
    this.setState({
      properties
    });
    console.log(properties);
  };

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onUpdate);
  }

  render() {
    return (
      <div>
        <input />
        <section className="section-padding bg-dark inner-header">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="mt-0 mb-3">Properties</h1>
                <div className="breadcrumbs">
                  <p className="mb-0">
                    <a href="/">
                      <i className="mdi mdi-home-outline" /> Home
                    </a>{" "}
                    / Properties
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-padding">
          <div className="section-title text-center mb-5">
            <h2>All Properties</h2>
            <div className="line mb-2" />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          {this.state.properties ? (
            <div className="container">
              <div className="row">
                {this.state.properties.map(item => {
                  return (
                    <div key={item.key} className="col-md-4 col-lg-4">
                      <div className="card card-list">
                        <div className="card-img">
                          <Link to={`/property/${item.key}`}>
                            <div className="badge images-badge">
                              <i className="mdi mdi-image-filter" />
                            </div>
                            <img
                              className="card-img-top"
                              src={item.image.avatarURL}
                              alt="Card cap"
                            />
                          </Link>
                        </div>
                        <div className="card-body">
                          <h2 className="text-primary mb-2 mt-0">
                            {item.price} <small />
                          </h2>
                          <h5 className="card-title mb-2">{item.title}</h5>
                          <h6 className="card-subtitle mt-1 mb-0 text-muted">
                            <i className="mdi mdi-home-map-marker" />
                            {item.address}
                          </h6>
                          <h6 className="card-subtitle mt-1 mb-0">
                            {item.type}
                          </h6>
                        </div>
                        <div className="card-footer">
                          <span>
                            <i className="mdi mdi-sofa" /> Beds :{" "}
                            <strong>{item.bedroom}</strong>
                          </span>
                          <span>
                            <i className="mdi mdi-scale-bathroom" /> Baths :{" "}
                            <strong>{item.bathroom}</strong>
                          </span>
                          <span>
                            <i className="mdi mdi-move-resize-variant" /> Garage
                            : <strong>{item.garages}</strong>
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="spinner-grow" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          )}
        </section>
      </div>
    );
  }
}

export default Properties;
