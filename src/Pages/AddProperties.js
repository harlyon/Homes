import React, { Component } from "react";
import FileUploader from "react-firebase-file-uploader";
import firebase from "../Firebase";
import Login from "./Login";

class AddProperties extends Component {
  constructor() {
    super();
    this.ref = firebase.firestore().collection("properties");
    this.state = {
      user: {},
      title: "",
      description: "",
      address: "",
      city: "",
      country: "",
      garages: "",
      bedroom: "",
      bathroom: "",
      price: "",
      type: "",
      image: {
        avatar: "",
        isUploading: "",
        progress: 0,
        avatarURL: ""
      }
    };
  }

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

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleProgress = progress => {
    this.setState({ image: { progress } });
  };

  handleUploadSuccess = filename => {
    console.log(this.state.image);
    this.setState({
      image: { avatar: filename, progress: 100, isUploading: false }
    });
    firebase
      .storage()
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then(url => this.setState({ image: { avatarURL: url } }));
  };

  onSubmit = e => {
    e.preventDefault();
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
    } = this.state;
    this.ref
      .add({
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
      })
      .then(docRef => {
        this.setState({
          title: "",
          description: "",
          address: "",
          city: "",
          country: "",
          garages: "",
          bedroom: "",
          bathroom: "",
          price: "",
          type: "",
          image: {
            avatar: "",
            isUploading: "",
            progress: 0,
            avatarURL: ""
          }
        });
        this.props.history.push("/properties");
      })
      .catch(error => {
        console.error("Error adding document: ", error);
      });
  };

  render() {
    return (
      <div>
        <br />
        <br />
        {this.state.user ? (
          <section className="section-padding">
            <div className="col-lg-12 col-md-12">
              <form onSubmit={this.onSubmit} autoComplete="off">
                <div className="col-lg-5 col-md-5 mx-auto">
                  <div className="card padding-card  no-radius border">
                    <div className="card-body">
                      <h5 className="card-title mb-4">Property Description</h5>
                      <div className="form-group">
                        <label>
                          Property Title <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          name="title"
                          value={this.state.title}
                          onChange={this.handleChange}
                          className="form-control"
                          placeholder="Enter Title"
                        />
                      </div>
                      <div className="form-group">
                        <label>
                          Property Description{" "}
                          <span className="text-danger">*</span>
                        </label>
                        <textarea
                          className="form-control"
                          name="description"
                          value={this.state.description}
                          onChange={this.handleChange}
                          rows={4}
                        />
                      </div>
                      <div className="row">
                        <div className="form-group col-md-4">
                          <label>
                            Address <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            name="address"
                            value={this.state.address}
                            onChange={this.handleChange}
                            className="form-control"
                            placeholder="Enter Address"
                          />
                        </div>
                        <div className="form-group col-md-4">
                          <label>
                            City <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            name="city"
                            value={this.state.city}
                            onChange={this.handleChange}
                            className="form-control"
                            placeholder="Enter City"
                          />
                        </div>
                        <div className="form-group col-md-4">
                          <label>
                            Country <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            name="country"
                            value={this.state.country}
                            onChange={this.handleChange}
                            className="form-control"
                            placeholder="Enter Country"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-md-4">
                          <label>
                            Garages <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            name="garages"
                            value={this.state.garages}
                            onChange={this.handleChange}
                            className="form-control"
                            placeholder="Enter Garages"
                          />
                        </div>
                        <div className="form-group col-md-4">
                          <label>
                            Bedroom <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            name="bedroom"
                            value={this.state.bedroom}
                            onChange={this.handleChange}
                            className="form-control"
                            placeholder="bedrooms"
                          />
                        </div>
                        <div className="form-group col-md-4">
                          <label>
                            Bathroom <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            name="bathroom"
                            value={this.state.bathroom}
                            onChange={this.handleChange}
                            className="form-control"
                            placeholder="bathrooms"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-md-4">
                          <label>
                            Price<span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            name="price"
                            value={this.state.price}
                            onChange={this.handleChange}
                            className="form-control"
                            placeholder="Enter Price Label"
                          />
                        </div>
                        <div className="form-group col-md-4">
                          <label>
                            Type - sale or rent
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            name="type"
                            value={this.state.type}
                            onChange={this.handleChange}
                            className="form-control"
                            placeholder="Enter Price Label"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <FileUploader
                          accept="image/*"
                          name="avatar"
                          randomizeFilename
                          storageRef={firebase.storage().ref("images")}
                          onUploadStart={this.handleUploadStart}
                          onUploadError={this.handleUploadError}
                          onUploadSuccess={this.handleUploadSuccess}
                          onProgress={this.handleProgress}
                        />
                        <br />
                        <br />
                        <div className="fuzone">
                          <span>
                            <i className="mdi mdi-image-area"> </i>
                          </span>
                          {this.state.image.isUploading && (
                            <p>progress : {this.state.image.progress} </p>
                          )}
                          {this.state.image.progress && (
                            <div>
                              <br />
                              <br />
                              <div className="spinner-grow" role="status">
                                <span className="sr-only">Loading...</span>
                              </div>
                            </div>
                          )}
                          {this.state.image.avatarURL ? (
                            <div>
                              <img
                                style={{ height: "50%", width: "50%" }}
                                src={this.state.image.avatarURL}
                                alt="hry"
                              />
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <br />
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg"
                        value="Submit"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </section>
        ) : (
          <Login />
        )}
      </div>
    );
  }
}

export default AddProperties;
