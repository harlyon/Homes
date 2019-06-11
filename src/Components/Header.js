import React from "react";

const Header = () => {
  return (
    <section className="samar-slider">
      {/* <Navbar /> */}
      <div id="samarslider" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#slider" data-slide-to="0" className="active" />
          <li data-target="#slider" data-slide-to="1" />
          <li data-target="#slider" data-slide-to="2" />
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active slider-one">
            <div className="overlay" />
          </div>
          <div className="carousel-item slider-two">
            <div className="overlay" />
          </div>
          <div className="carousel-item slider-three">
            <div className="overlay" />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#samarslider"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#samarslider"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
      <div className="slider-form">
        <h2 className="text-left mb-1  text-white d-none d-sm-block">
          Find Your Dream Home
        </h2>
        <p className="text-white mb-5 d-none d-sm-block">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard <br />
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book.
        </p>
        {/* <form >
    <div className="tab-content">
      <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
        <div className="row no-gutters">
          <div className="col-sm-4">
            <div className="input-group">
              <div className="input-group-addon"><i className="mdi mdi-map-marker-multiple" /></div>
              <input className="form-control" placeholder="Enter Location or Landmark" type="text" />
            </div>
          </div>
          <div className="col-sm-3">
            <div className="input-group">
              <div className="input-group-addon"><i className="mdi mdi-google-maps" /></div>
              <select className="form-control select2 no-radius">
                <option value>Locations</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="input-group">
              <div className="input-group-addon"><i className="mdi mdi-security-home" /></div>
              <select className="form-control select2 no-radius">
                <option value>Property Type</option>
                <option value>House/Villa</option>
                <option value>Flat</option>
                <option value>Plot/Land</option>
                <option value>Office Space</option>
                <option value>Shop/Showroom</option>
                <option value>Commercial Land</option>
                <option value>Warehouse/ Godown</option>
                <option value>Industrial Building</option>
              </select>
            </div>
          </div>
          <div className="col-sm-2">
            <button type="submit" className="btn btn-secondary btn-block no-radius font-weight-bold">SEARCH</button>
          </div>
        </div>
      </div>
      <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
        <div className="row no-gutters">
          <div className="col-sm-7">
            <div className="input-group">
              <div className="input-group-addon"><i className="mdi mdi-map-marker-multiple" /></div>
              <input className="form-control" placeholder="Enter Location or Landmark" type="text" />
            </div>
          </div>
          <div className="col-sm-3">
            <div className="input-group">
              <div className="input-group-addon"><i className="mdi mdi-security-home" /></div>
              <select className="form-control select2 no-radius">
                <option value>Property Type</option>
                <option value>House/Villa</option>
                <option value>Flat</option>
                <option value>Plot/Land</option>
                <option value>Office Space</option>
                <option value>Shop/Showroom</option>
                <option value>Commercial Land</option>
                <option value>Warehouse/ Godown</option>
                <option value>Industrial Building</option>
              </select>
            </div>
          </div>
          <div className="col-md-2">
            <button type="submit" className="btn btn-secondary btn-block no-radius font-weight-bold">SEARCH</button>
          </div>
        </div>
      </div>
    </div>
        </form> */}
      </div>
    </section>
  );
};

export default Header;
