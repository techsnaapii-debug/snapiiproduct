import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../public/static/images/logo-img.png";
import apple from "../../../public/icons/apple.svg";
import video from "../../../public/icons/video.svg";

const menuItems = [
  { label: "Home", path: "/" },
  { label: "Knowledge", path: "/knowledge" },
  { label: "FAQs", path: "/faqs" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="nav-wrapper">
      <div className="custom-navbar container">

        {/* LOGO */}
        <div className="logo">
          <Link to="#">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        {/* CENTER MENU */}
        <ul className={`nav-links ${open ? "active" : ""}`}>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link to={item.path} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* RIGHT BUTTON */}
       <button
  className="download-btn"
  onClick={() => navigate("/contact")}
>
  <div className="download-box d-flex align-items-center gap-2">
    <div className="play-icon"><img src={apple}  className="img-fluid"/></div>
    <div className="play-icon"><img src={video}  className="img-fluid"/></div>
  </div>

  <span className="btn-text">Download App</span>


</button>

        {/* MOBILE HAMBURGER */}
        <div className="hamburger" onClick={() => setOpen(!open)}>
          ☰
        </div>

      </div>
    </div>
  );
};

export default Navbar;