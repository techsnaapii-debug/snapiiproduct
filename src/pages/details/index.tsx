import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Home from "../../../public/static/images/home.png";
import detail from "../../../public/static/images/details.png";
const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="details-page">

      {/* TOP GRADIENT SECTION */}
      <div className="details-header text-center text-white">
        <h2 className="fw-bold">
          How Creators Can Earn More <br />
          Through Paid Campaigns in 2026
        </h2>
        <p className="mt-2">April 15, 2026</p>
      </div>

      {/* IMAGE */}
      <div className="container">
        <div className="details-card">
          <img
            src={detail}
            alt="banner"
            className="img-fluid main-img"
          />

          {/* TEXT CONTENT */}
          <div className="details-content">
            <p>
              The creator economy is growing rapidly, and 2026 brings more earning
              opportunities for creators than ever before. Brands are now investing
              heavily in influencer marketing because creators build trust and
              engagement faster than traditional ads.
            </p>

            <p>
              To earn more, creators need to build a professional profile, post
              consistent content, and focus on a specific niche. Brands prefer
              creators with loyal audiences.
            </p>

            <p>
              Platforms like Snaapii help creators connect directly with brands,
              apply to paid campaigns, and unlock income opportunities without
              unnecessary middlemen.
            </p>

            <p>
              The future belongs to creators who treat content like a business.
              By staying consistent and learning trends, creators can build stable
              monthly income and long-term growth.
            </p>

            {/* BACK BUTTON */}
            <div className="text-center mt-4">
              <button
                className="btn back-btn"
                onClick={() => navigate("/details")}
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
          <img
            src={Home}
            alt="app preview"
            className="img-fluid"
          />
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

export default Details;