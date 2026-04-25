
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Home from "../../../public/static/images/home.png";



  const tabs = ["All", "Creators", "Brands", "Trends", "AI Tools", "Campaigns"];

  const cardsData = [
    {
      id: 1,
      category: "Creators",
      title: "How Creators Can Earn More Through Paid Campaigns in 2026",
      date: "April 15, 2026",
      img: "../public/static/images/tab-image.png",
       link: "/details/1",
    },
    {
      id: 2,
      category: "Brands",
      title: "Why Brands Choose Snaapii Over Traditional Influencer Platforms",
      date: "April 15, 2026",
       img: "../public/static/images/tab-image.png",
        link: "/details/2",

    },
    {
      id: 3,
      category: "Trends",
      title: "Top Instagram Trends Every Creator Should Use This Year",
      date: "April 15, 2026",
       img: "../public/static/images/tab-image.png",
        link: "/details/3",
    },
    {
      id: 4,
      category: "AI Tools",
      title: "How AI Tools Help Creators and Brands Grow Faster",
      date: "April 15, 2026",
       img: "../public/static/images/tab-image.png",
        link: "/details/4",
    },
    {
      id: 5,
      category: "Campaigns",
      title: "Best Influencer Marketing Strategies for Brands to Boost Sales",
      date: "April 15, 2026",
       img: "../public/static/images/tab-image.png",
        link: "/details/5",
    }
  ];
const Knowledge = () => {
  const [activeTab, setActiveTab] = useState("All");
const navigate = useNavigate();
  const filteredCards =
    activeTab === "All"
      ? cardsData
      : cardsData.filter((item) => item.category === activeTab);

  return (
    <div>
      <div className="container py-5">
      {/* Heading */}
      <div className="text-center mb-4">
        <h2 className="fw-bold main-title">Snaapii Insights</h2>
        <p className="tab-desc">
          Latest growth tips, creator strategies, brand marketing guides,
          AI tools, and social media trends.
        </p>
      </div>

      {/* Tabs */}
      <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab-btn ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="row g-4">
        {filteredCards.map((card) => (
          <div key={card.id} className="col-lg-4 col-md-6 col-12">
            <div className="card custom-card h-100">
              
              <div className="img-box">
                <img src={card.img} className="card-img-top" alt="img" />
                <div className="overlay-text">
                  How SLUT turned storytelling into sell-through
                </div>
              </div>

              <div className="tab-body py-3">
                <h6 className="tab-title">{card.title}</h6>
                
              </div>
              <div className="d-flex  justify-content-between position: absolute top-50 start-50;
  ">
              <p className="date">{card.date}</p>
            <div
                  className="arrow-btn"
                   onClick={() => navigate(`/details/${card.id}`)}
                >
                  →
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

</div>
   {/* social-section */}
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
}

export default Knowledge;