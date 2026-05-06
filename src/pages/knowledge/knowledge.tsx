import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import footer from "../../../public/static/images/footer.png";

const tabs = ["All", "Creators", "Brands", "Trends", "AI Tools", "Campaigns"];

const cardsData = [
  {
    id: 1,
    category: "Creators",
    title: "Creator Experience Comparison: Snaapii vs Other Platforms",
    date: "April 15, 2026",
    img: "/static/images/detail-1.jpeg",
    link: "/details/1",
  },
  {
    id: 2,
    category: "Brands",
    title: "Brand Experience Comparison: Snaapii vs Other Platforms.",
    date: "April 15, 2026",
    img: "/static/images/detail-2.jpeg",
    link: "/detail1/2",
  },
 
  {
    id: 3,
    category: "Trends",
    title: "Growth Tools Comparison: Snaapii vs Other Platforms",
    date: "April 15, 2026",
    img: "/static/images/detail-3.jpeg",
    link: "/detail2/3",
  },
  {
    id: 4,
    category: "AI Tools",
    title: "Direct Collaboration Comparison: Snaapii vs Other Platforms",
    date: "April 15, 2026",
    img: "/static/images/detail-4.jpeg",
    link: "/detail3/4",
  },
   
  {
    id: 5,
    category: "Campaigns",
    title: "Cost Comparison: Snaapii vs Other Platforms",
    date: "April 15, 2026",
    img: "/static/images/detail-5.jpeg",
    link: "/detail4/5",
  },
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
            Latest growth tips, creator strategies, brand marketing guides, AI
            tools, and social media trends.
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
              <div
                className="card custom-card h-100"
                onClick={() => navigate(card.link)}
                style={{ cursor: "pointer" }}
              >
                {/* IMAGE */}
                <div className="img-box">
                  <img src={card.img} className="card-img-top" alt="img" />

                  <div className="overlay-text"></div>
                </div>

                {/* TITLE */}
                <div className="tab-body py-3">
                  <h6 className="tab-title">{card.title}</h6>
                </div>

                {/* FOOTER */}
                <div className="d-flex justify-content-between align-items-center px-3 pb-3">
                  <p className="date m-0">{card.date}</p>

                  {/* ARROW */}
                  <div
                    className="arrow-btn"
                    onClick={() => navigate(card.link)}
                style={{ cursor: "pointer" }}
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

export default Knowledge;
