import React from "react";

const Footer = () => {
  return (
      <footer className="footer">
      <div className="container py-5">
        <div className="row">

          {/* Quick Links */}
          <div className="col-md-3 col-6 mb-4">
            <h6 className="footer-title">Quick Links</h6>
            <ul>
              <li>Home</li>
              <li>Features</li>
              <li>FAQs</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-md-3 col-6 mb-4">
            <h6 className="footer-title">Resources</h6>
            <ul>
              <li>Knowledge</li>
              <li>Help center</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="col-md-3 col-6 mb-4">
            <h6 className="footer-title">Follow Us</h6>
            <ul>
              <li>Instagram</li>
              <li>LinkedIn</li>
              <li>Youtube</li>
              <li>Twitter (X)</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-3 col-6 mb-4">
            <h6 className="footer-title">Contact Us</h6>
            <ul>
              <li>support@snaapii.com</li>
              <li>business@snaapii.com</li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom text-center">
        <p>© 2026 Snaapii. All Rights Reserved. Built for Creators & Brands</p>
      </div>
    </footer>
  );
};

export default Footer;