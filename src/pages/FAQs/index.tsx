import React, { useState } from "react";
import Home from "../../../public/static/images/home.png";

const faqsData = [
  {
    question: "What is Snaapii?",
    answer:
      "Snaapii is a platform where creators and brands connect for paid campaigns, creator services, and business growth opportunities.",
  },
  {
    question: "How do creators earn on Snaapii?",
    answer:
      "Creators earn through paid campaigns, brand collaborations, and services.",
  },
  {
    question: "How do brands use Snaapii?",
    answer: "Brands find creators, run campaigns, and increase engagement.",
  },
  {
    question: "Are payments secure on Snaapii?",
    answer: "Yes, payments are secure and reliable.",
  },
  {
    question: "Is Snaapii free to join?",
    answer: "Yes, it is completely free to join.",
  },
];

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section py-5">
      <div className="container text-center">
        {/* Badge */}
        <span className="faq-badge mb-2 d-inline-block">
          <span className="faq-icon">?</span> FAQs
        </span>{" "}
        {/* Title */}
        <h2 className="faq-title mb-4">Frequently Asked Questions</h2>
        {/* Accordion */}
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

export default FAQs;
