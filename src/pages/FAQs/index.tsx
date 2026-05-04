import { useState } from "react";
import Home from "../../../public/static/images/home.png";

const faqsData = [
  {
    question: "What is Snaapii?",
    answer:
      "Snaapii is a creator-brand collaboration platform where brands and creators connect directly, manage campaigns, automate outreach, and grow faster without middlemen or hidden commission fees.",
  },
  {
    question: "How does Snaapii help creators?",
    answer:
      "Creators can discover brand campaigns, automate outreach, negotiate directly, keep full earnings, and build long-term partnerships to grow their income and personal brand.",
  },
  {
    question: "How does Snaapii help brands?",
    answer:
      "Brands can find relevant creators, launch campaigns quickly, automate outreach, manage collaborations efficiently, and achieve better ROI with lower marketing costs.",
  },
  {
    question: "Is Snaapii safe for payments and collaborations?",
    answer:
      "Yes, Snaapii is designed with secure systems, transparent workflows, and reliable payment processes to make collaborations smooth, professional, and trustworthy.",
  },
  {
    question: "Why choose Snaapii over agencies or other platforms?",
    answer:
      "Snaapii offers direct collaboration, zero commission, faster execution, smart automation tools, AI-powered growth features, and full transparency for both creators and brands.",
  },
];

const FAQs = () => {
  // ✅ Correct state (only once, with proper type)
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="faq-section py-5">
      <div className="container text-center">
        <span className="faq-badge mb-2 d-inline-block">
          <span className="faq-icon">?</span> FAQs
        </span>

        <h2 className="faq-title mb-4">Frequently Asked Questions</h2>

        <div className="faq-wrapper">
          {faqsData.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggle(index)}
            >
              <div className="d-flex justify-content-between align-items-center">
                <h6 className="mb-0">{item.question}</h6>
                <span className="accordian-icon">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </div>

              {activeIndex === index && (
                <p className="mt-3 faq-answer text-start">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* social-section */}
      <section className="social-section d-flex align-items-center">
        <div className="container text-center">
          <div className="social-img mb-4">
            <img src={Home} alt="app preview" className="img-fluid" />
          </div>

          <h2 className="social-title">
            Turn Content Into Income. Grow <br />
            Your Brand with Snaapii.
          </h2>

          <p className="social-desc mt-3">
            Join creators and brands using Snaapii for paid campaigns, creator
            services, AI tools, secure payments, and unlimited growth opportunities.
          </p>

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

export default FAQs;