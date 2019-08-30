import React from "react";

const Footer = () => {
  return (
    <div>
      <section className="section-padding footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3">
              <h4 className="mb-5 mt-0">
                <a className="logo" href="index.html">
                  {/* <img src="img/logo.png" alt="samar logo" /> */}
                </a>
              </h4>
              <p>
                86 Petersham town, New South wales
                <br />
                Waedll Steet, Australia PA 658
              </p>
              <p className="mb-0">
                <a className="text-warning" href="/">
                  <i className="mdi mdi-phone" /> +61 525 240 310
                </a>
              </p>
              <p className="mb-0">
                <a className="text-success" href="/">
                  <i className="mdi mdi-email" /> yoursite@gmail.com
                </a>
              </p>
              <p className="mb-0">
                <a className="text-primary" href="/">
                  <i className="mdi mdi-earth" /> www.yoursite.com
                </a>
              </p>
            </div>
            <div className="col-lg-2 col-md-2">
              <h6 className="mb-4">OUR PROPERTIES</h6>
              <ul>
                <li>
                  <a href="/">
                    <i className="mdi mdi-arrow-right" /> Single Story
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="mdi mdi-arrow-right" /> Dubble Story
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="mdi mdi-arrow-right" /> Tripple Story
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="mdi mdi-arrow-right" /> Resort
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="mdi mdi-arrow-right" /> Home in Merrick Way
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-2">
              <h6 className="mb-4">QUICK LINKS</h6>
              <ul>
                <li>
                  <a href="/">
                    <i className="mdi mdi-arrow-right" /> Home in Coral Gables
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="mdi mdi-arrow-right" /> Villa Grand Avenue
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="mdi mdi-arrow-right" /> Home in Merrick Way
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="mdi mdi-arrow-right" /> Land / Plots
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="mdi mdi-arrow-right" /> Restaurent
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-2">
              <h6 className="mb-4">ABOUT</h6>
              <ul>
                <li>
                  <a href="/">
                    <i className="mdi mdi-arrow-right" /> Company
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="mdi mdi-arrow-right" /> Careers
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="mdi mdi-arrow-right" /> Store Location
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="mdi mdi-arrow-right" /> Affillate Program
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="mdi mdi-arrow-right" /> Copyright
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-3">
              <h6 className="mb-4">NEWSLETTER</h6>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email Address..."
                />
                <div className="input-group-append">
                  <button className="btn btn-secondary" type="button">
                    <i className="mdi mdi-arrow-right" />
                  </button>
                </div>
              </div>
              <p className="text-info newsletter-info">
                <i className="mdi mdi-email-variant" /> Get the most recent
                updates from our site and be updated your self...
              </p>
              <h6 className="mb-3 mt-4">GET IN TOUCH</h6>
              <div className="footer-social">
                <a className="btn-facebook" href="/">
                  <i className="mdi mdi-facebook" />
                </a>
                <a className="btn-twitter" href="/">
                  <i className="mdi mdi-twitter" />
                </a>
                <a className="btn-instagram" href="/">
                  <i className="mdi mdi-instagram" />
                </a>
                <a className="btn-whatsapp" href="/">
                  <i className="mdi mdi-whatsapp" />
                </a>
                <a className="btn-messenger" href="/">
                  <i className="mdi mdi-facebook-messenger" />
                </a>
                <a className="btn-google" href="/">
                  <i className="mdi mdi-google" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
