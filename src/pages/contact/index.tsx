// import React, { useState } from "react";
import footer from "../../../public/static/images/footer.png";
import email from "../../../public/icons/email.png";
import linkedin from "../../../public/icons/linkedin.png";
import insta from "../../../public/icons/insta.png";
import twitter from "../../../public/icons/twitter.png";

const Contact = () => {
  return (
    <div>
    <div className="contact-section py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* LEFT */}
          <div className="col-lg-6 mb-4 mb-lg-0 text-center text-lg-start">
            <h2 className="fw-bold contact-title mb-3">Let’s Connect!</h2>

            <p className="text-dark mb-4">
              We'd love to hear from you. Reach out for any queries or
              collaborations.
            </p>

            <div className="contact-info">
              <div className="d-flex align-items-center gap-3 mb-2">
                <a
                  href="mailto:support@snaapii.com"
                  className="d-flex align-items-center gap-3 text-decoration-none"
                >
                  <img src={email} alt="email" className="link-img" />
                  <p className="text-dark fw-medium mb-0">
                    support@snaapii.com
                  </p>
                </a>
              </div>

              <div className="d-flex align-items-center gap-3 mb-2">
                <img src={email} alt="email" className="link-img" />
                <p className="text-dark fw-medium">www.snaapii.com</p>
              </div>
              {/* SOCIAL ICONS */}
              <div className="d-flex gap-3 justify-content-center justify-content-lg-start">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={linkedin} alt="linkedin" className="link-img" />
                </a>

                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={insta} alt="instagram" className="link-img" />
                </a>

                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={twitter} alt="twitter" className="link-img" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT (FORM) */}
          <div className="col-lg-6">
            <div className="contact-card p-4">
              <form>
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Your Name"
                />

                <input
                  type="email"
                  className="form-control mb-3"
                  placeholder="Email Address"
                />

                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Phone Number"
                />

                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Subject"
                />

                <textarea
                  className="form-control mb-3"
                rows={3}
                  placeholder="Message"
                ></textarea>

                <button className="btn contact-btn w-100 mb-3">
                  Send Message
                </button>

                <div className="form-check text-start">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label small">
                    I agree to the Terms & Conditions and Privacy Policy
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      
    </div>
      {/* social-section */}
 <section className="social-section d-flex align-items-center">
      <div className="container text-center">
        
        {/* Image */}
      
      <div className="social-img mb-4">
            <img src={footer} alt="app preview" className="img-fluid" />
          </div>

        {/* Heading */}
        <h2 className="social-title">
          Turn Content Into Income. Grow <br />
          Your Brand with Snaapii.
        </h2>

        {/* Description */}
        <p className="social-desc mt-3">
          Join creators and brands using Snaapii for paid campaigns,
          creator services, AI tools, secure payments, and unlimited
          growth opportunities.
        </p>

        {/* Buttons */}
        <div className="social-buttons mt-4 d-flex justify-content-center gap-3 flex-wrap">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Google Play"
            className="store-btn"
          />
          <img
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="App Store"
            className="store-btn"
          />
        </div>

      </div>
    </section>
    </div>
  );
};

export default Contact;
