// import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container py-5">
        <div className="row">

          {/* Quick Links */}
          <div className="col-md-3 col-6 mb-4">
            <h6 className="footer-title">Quick Links</h6>
            <ul>
              <li><Link className="text-black text-decoration-none" to="/">Home</Link></li>
              <li><Link className="text-black text-decoration-none" to="/features">Features</Link></li>
              <li><Link className="text-black text-decoration-none" to="/faqs">FAQs</Link></li>
              <li><Link className="text-black text-decoration-none" to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-md-3 col-6 mb-4">
            <h6 className="footer-title">Resources</h6>
            <ul>
              <li><Link className="text-black text-decoration-none" to="/knowledge">Knowledge</Link></li>
              <li><Link className="text-black text-decoration-none" to="/help">Help center</Link></li>
              <li><Link className="text-black text-decoration-none" to="/privacy">Privacy Policy</Link></li>
              <li><Link className="text-black text-decoration-none" to="/terms">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="col-md-3 col-6 mb-4">
            <h6 className="footer-title">Follow Us</h6>
            <ul>
              <li><a href="https://instagram.com" className="text-black text-decoration-none" target="_blank">Instagram</a></li>
              <li><a href="https://www.linkedin.com/company/snaapii-official/" className="text-black text-decoration-none"  target="_blank">LinkedIn</a></li>
              <li><a href="https://youtube.com/@snaapii?si=ewNqkSwum2iqKhRG"  className="text-black text-decoration-none"  target="_blank">Youtube</a></li>
              <li><a href="https://x.com/_snaapii"  className="text-black text-decoration-none"  target="_blank">Twitter (X)</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-3 col-6 mb-4">
            <h6 className="footer-title">Contact Us</h6>
            <ul>
              <li ><a href="mailto:support@snaapii.com" className="text-black text-decoration-none">support@snaapii.com</a></li>
              <li><a href="mailto:business@snaapii.com" className="text-black text-decoration-none">business@snaapii.com</a></li>
            </ul>
          </div>

        </div>
      </div>

      <div className="footer-bottom text-center">
        <p>© 2026 Snaapii. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;