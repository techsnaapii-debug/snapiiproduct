import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Images
import home from "../../../public/static/images/home.png";
import img1 from "../../../public/static/images/mobile.png";
import img2 from "../../../public/static/images/mobile.png";
import img3 from "../../../public/static/images/mobile.png";
import img6 from "../../../public/static/images/creater.png";
import img7 from "../../../public/static/images/why.png";
import icon from "../../../public/icons/swipe.png";

// import img2 from "../assets/icon2.png";
// import img3 from "../assets/icon3.png";
// import img4 from "../assets/icon4.png";
// import img5 from "../assets/icon5.png";

// ✅ Dummy Cards (IMPORTANT warna crash hoga)
const data = [
  {
    title: "Direct Collaboration. Zero Commission. Faster Execution",
    desc: "Manage creator bookings and campaigns in one platform with no middlemen, no hidden fees, built-in AI tools, and reliable on-time payments.",
    icon: img7,
  },
  {
    title: "An All-in-One Platform for Creator–Brand Collaboration",
    desc: "From profile discovery to campaign execution, collaborate directly, eliminate agency costs, and ensure fast, secure, and timely payments.",
  },
  {
    title: "Built for Speed, Transparency, and Results",
    desc: "Launch campaigns instantly, book creators in minutes, and manage everything seamlessly with zero commission and no delays.",
  },
  {
    title: "No Commission. No Middleman. No Payment Delays.",
    desc: "A transparent platform where brands and creators collaborate directly, execute faster, and get paid on time.",
  },
  {
    title: "Simplifying Creator–Brand Collaboration at Scale",
    desc: "Direct access, intelligent matching, AI-powered tools, and seamless system designed for efficient execution and timely payouts.",
  },
];
const cardsData = [
  {
    img: img6,
    title: "Direct Deals. Zero Commission.",
    desc: "Creators list their services or apply to campaigns. Brands connect directly without any middleman or extra charges.",
    link: "/one",
  },
  {
    img: img6,
    title: "Earn More. Pay Zero Fees.",
    desc: "A transparent platform where creators and brands collaborate directly through listings and campaigns.",
    link: "/two",
  },
  {
    img: img6,
    title: "Smarter Growth with AI Tools.",

    desc: "Use AI-powered features, automated messaging, and insights to grow faster and collaborate better.",

    link: "/three",
  },
  {
    img: img6,
    title: "One Platform. Two Ways to Grow.",
    desc: "List your profile for direct bookings or apply to brand campaigns in a simple, fast, and effective way.",
    link: "/four",
  },
  {
    img: img6,
    title: "Direct Deals. Zero Commission.",
    desc: "Creators list their services or apply to campaigns. Brands connect directly without any middleman or extra charges.",
    link: "/one",
  },
  {
    img: img6,
    title: "Earn More. Pay Zero Fees.",
    desc: "A transparent platform where creators and brands collaborate directly through listings and campaigns.",
    link: "/two",
  },
  {
    img: img6,
    title: "Smarter Growth with AI Tools.",

    desc: "Use AI-powered features, automated messaging, and insights to grow faster and collaborate better.",

    link: "/three",
  },
  {
    img: img6,
    title: "One Platform. Two Ways to Grow.",
    desc: "List your profile for direct bookings or apply to brand campaigns in a simple, fast, and effective way.",
    link: "/four",
  },
];
const cards = cardsData;

const groupedCards = cards.reduce((acc, _, i) => {
  if (i % 4 === 0) acc.push(cards.slice(i, i + 4));
  return acc;
}, []);
function Home() {
  const navigate = useNavigate();
  const swiperRef = useRef(null);
  const brandSwiperRef = useRef(null);

  const cards = cardsData;

  // ✅ grouping (4 per slide)
  const groupedCards = [];
  for (let i = 0; i < cards.length; i += 4) {
    groupedCards.push(cards.slice(i, i + 4));
  }

  return (
    <div className="home">
      <div className="container py-5">
        {/* Top Section */}
        <div className="text-center mb-5">
          <h2 className="fw-bold main-title">Turn Your Content Into Income</h2>
          <p className="title-desc mt-3">
            India’s most powerful creator platform for direct deals...
          </p>

          <div className="d-flex justify-content-center mt-4">
            <img src={home} alt="logo" className="img-fluid  bounce" />
          </div>
        </div>

        {/* Middle Section */}
        <div className="text-center mb-5">
          <h4 className="fw-bold main-title">
            Explore the Snaapii App Experience
          </h4>

          <Swiper
            className="explore"
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500 }}
            loop
          >
            {[img1, img2, img3].map((img, index) => (
              <SwiperSlide key={index}>
                <div className="phone-card">
                  <img src={img} alt="slide" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Why Section */}
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="fw-bold main-title">Why Choose Snaapii?</h2>
          </div>

          <div className="cards-wrapper">
            {/* TOP ROW */}
            <div className="cards-track">
              {[...cards, ...cards].map((item, index) => (
                <div className="why-card" key={index}>
                  <div className="why-box">
                    <img src={item.icon} alt="icon" className="icon-img" />
                  </div>
                  <h6 className="fw-bold mt-3">{item.title}</h6>
                  <p className="text-muted small">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* BOTTOM ROW */}
            <div className="cards-track reverse">
              {[...cards, ...cards].map((item, index) => (
                <div className="why-card" key={index}>
                  <div className="why-box">{item.icon}</div>
                  <h6 className="fw-bold mt-3">{item.title}</h6>
                  <p className="text-muted small">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 🔥 Creator Section */}
        <div className="container py-5">
          <div className="text-center mb-4">
            <h3 className="fw-bold main-title">
              Why Choose Snaapii For Creators
            </h3>
          </div>
          <Swiper
            modules={[Navigation]}
            allowTouchMove={true}
            loop={true}
            slidesPerView={1}
            slidesPerGroup={1}
            spaceBetween={20}
            speed={800}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
          >
            {groupedCards.map((group, i) => (
              <SwiperSlide key={i}>
                <div className="grid">
                  {group.map((item, index) => (
                    <div className="card" key={index}>
                      <img src={item.img} alt="" />

                      <div className="overlay">
                        <div className="position">
                          <div className="text">
                            <h4>{item.title}</h4>
                            <p className="col-10">{item.desc}</p>
                          </div>

                          <div
                            className="arrow"
                            onClick={() => navigate(item.link)}
                          >
                            →
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* ✅ Swipe Button */}
          <div className="d-flex justify-content-center mt-4">
            <button
              className="swipe-btn"
              onClick={() => swiperRef.current.slideNext()}
            >
              Swipe
              <span className="ms-3">
                <img src={icon} alt="icon" />
              </span>
            </button>
          </div>
        </div>

        {/* brand-section */}
        <div className="container py-5">
          <div className="text-center mb-4">
            <h3 className="fw-bold main-title">
              Why Choose Snaapii For Brands
            </h3>
          </div>
          <Swiper
            modules={[Navigation]}
            allowTouchMove={true}
            loop={true}
            slidesPerView={1}
            slidesPerGroup={1}
            spaceBetween={20}
            speed={800}
            onSwiper={(swiper) => (brandSwiperRef.current = swiper)}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
          >
            {groupedCards.map((group, i) => (
              <SwiperSlide key={i}>
                <div className="grid">
                  {group.map((item, index) => (
                    <div className="card" key={index}>
                      <img src={item.img} alt="" />

                      <div className="overlay">
                        <div className="position">
                          <div className="text">
                            <h4>{item.title}</h4>
                            <p className="col-10">{item.desc}</p>
                          </div>

                          <div
                            className="arrow"
                            onClick={() => navigate(item.link)}
                          >
                            →
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* ✅ Swipe Button */}
          <div className="d-flex justify-content-center mt-4">
            <button
              className="swipe-btn"
              onClick={() => brandSwiperRef.current.slideNext()}
            >
              Swipe
              <span className="ms-3">
                <img src={icon} alt="icon" />
              </span>
            </button>
          </div>
        </div>

        {/* social-section */}
        <section className="social-section d-flex align-items-center">
          <div className="container text-center">
            {/* Image */}
            <div className="social-img mb-4">
              <img src={home} alt="app preview" className="img-fluid" />
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
    </div>
  );
}

export default Home;
