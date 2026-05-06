// import React, { useState } from "react";
import {useNavigate } from "react-router-dom";
import footer from "../../../public/static/images/footer.png";
import detail from "../../../public/static/images/detail-3.jpeg";
const Detail2 = () => {
  // const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="details-page">
      {/* TOP GRADIENT SECTION */}
      <div className="details-header text-center text-white">
        <h2 className="fw-bold">
          Growth Tools Comparison: Snaapii vs Other Platforms
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
              Most traditional influencer platforms only connect brands and
              creators. They rarely offer tools that help users grow faster.
              Manual outreach, repetitive tasks, and slow workflows remain
              common problems.
            </p>

            <p>
              Snaapii goes beyond simple matchmaking by offering growth-focused
              tools such as Smart Auto DM, automation systems, and AI-powered
              recommendations. These tools help creators reach brands faster and
              help brands scale outreach more efficiently. Automation saves
              valuable time, improves productivity, and increases opportunities.
              AI recommendations also help users make smarter decisions by
              finding relevant partnerships quickly.
            </p>

            <p>
              While many platforms stay basic, Snaapii gives users the tools
              needed for modern growth.
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
            <img src={footer} alt="app preview" className="img-fluid" />
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

export default Detail2;
