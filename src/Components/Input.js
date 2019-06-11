import React, { Component } from "react";

class Input extends Component {
  state = {
    city: "",
    location: ""
  };

  inputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  submitInput = e => {
    e.preventDefault();
    this.props.onUpdate(this.state.city, this.state.location);
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <div className="slider-form">
          <form onSubmit={this.submitInput}>
            <div className="tab-content">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="row no-gutters">
                  <div className="col-sm-8">
                    <div className="input-group">
                      <div className="input-group-addon">
                        <i className="mdi mdi-map-marker-multiple" />
                      </div>
                      <input
                        className="form-control"
                        name="city"
                        onChange={this.inputChange}
                        placeholder="Enter Location"
                        type="text"
                      />
                    </div>
                  </div>
                  {/* <div className="col-sm-4">
                    <div className="input-group">
                      <div className="input-group-addon">
                        <i className="mdi mdi-map-marker-multiple" />
                      </div>
                      <input
                        className="form-control"
                        name="location"
                        onChange={this.inputChange}
                        placeholder="Rent or Sale"
                        type="text"
                      />
                    </div>
                  </div> */}
                  <div className="col-sm-2">
                    <button
                      type="submit"
                      className="btn btn-secondary btn-block no-radius font-weight-bold"
                    >
                      SEARCH
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Input;
