import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Home from "../../../public/static/images/home.png";
import detail from "../../../public/static/images/detail-4.jpeg";
const Detail3 = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="details-page">
      {/* TOP GRADIENT SECTION */}
      <div className="details-header text-center text-white">
        <h2 className="fw-bold">
          Direct Collaboration Comparison: Snaapii vs Other Platforms
        </h2>
        <p className="mt-2">April 15, 2026</p>
      </div>

      {/* IMAGE */}
      <div className="container">
        <div className="details-card">
          <img src={detail} alt="banner" className="img-fluid main-img" />

          {/* TEXT CONTENT */}
          <div className="details-content">
            <p>
              One of the biggest problems in traditional influencer marketing
              platforms is slow communication. Many platforms depend on agencies
              or middlemen between creators and brands. This creates delays,
              misunderstandings, and unnecessary complexity during
              collaborations.
            </p>

            <p>
              Snaapii solves this problem by enabling direct communication
              between creators and brands. Both sides can discuss pricing,
              timelines, campaign goals, and deliverables clearly without
              depending on third parties. This saves time and builds stronger
              trust. Direct collaboration also creates better long-term
              relationships. Brands prefer creators who understand their goals,
              and creators prefer brands that value their work. Snaapii makes
              these repeat partnerships easier.
            </p>

            <p>
              Compared to many older influencer platforms, Snaapii offers a
              faster, clearer, and more modern collaboration system.
            </p>

            {/* BACK BUTTON */}
            <div className="text-center mt-4">
              <button
                className="btn back-btn"
                onClick={() => navigate("/knowledge")}
              >
                ← Back
              </button>
            </div>
          </div>
        </div>
      </div>
      <section className="social-section d-flex align-items-center">
        <div className="container text-center">
          {/* Image */}
          <div className="social-img mb-4">
            <img src={Home} alt="app preview" className="img-fluid" />
          </div>

          {/* Heading */}
          <h2 className="social-title">
            Turn Content Into Income. Grow <br />
            Your Brand with Snaapii.
          </h2>

          {/* Description */}
          <p className="social-desc mt-3">
            Join creators and brands using Snaapii for paid campaigns, creator
            services, AI tools, secure payments, and unlimited growth
            opportunities.
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

export default Detail3;
