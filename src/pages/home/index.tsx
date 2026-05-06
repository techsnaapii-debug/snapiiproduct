import { useRef } from "react";
import { useNavigate } from "react-router-dom";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import type { Swiper as SwiperType } from "swiper";

// Images

import home from "../../../public/static/images/home1.png";
import footer from "../../../public/static/images/footer.png";
import img2 from "../../../public/static/images/app.png";
import img3 from "../../../public/static/images/app1.png";
import img4 from "../../../public/static/images/app2.png";
import img5 from "../../../public/static/images/app3.png";
import img from "../../../public/static/images/app4.png";
import img12 from "../../../public/static/images/app5.png";
import img13 from "../../../public/static/images/app6.png";
import img6 from "../../../public/static/images/creater.png";
import img7 from "../../../public/static/images/why.png";
import img8 from "../../../public/static/images/why1.jpeg";
import img9 from "../../../public/static/images/why2.jpeg";
import img10 from "../../../public/static/images/why3.jpeg";
import img11 from "../../../public/static/images/why4.jpeg";
import icon from "../../../public/icons/swipe.png";
import createrimg1 from "../../../public/static/images/creator for brand.png";
import createrimg2 from "../../../public/static/images/1 plateform 2 ways.png";
import createrimg3 from "../../../public/static/images/Connect & grow.png";
import createrimg4 from "../../../public/static/images/better result.png";
import createrimg5 from "../../../public/static/images/no agency.png";
import brandimg1 from "../../../public/static/images/right creator.png";
import brandimg2 from "../../../public/static/images/time.png";
import brandimg3 from "../../../public/static/images/right creator.png";
import brandimg4 from "../../../public/static/images/right creator.png";
import brandimg5 from "../../../public/static/images/right creator.png";

const images = [img2, img3, img4, img5, img, img12, img13];
const data = [
  {
    title: "Direct Collaboration. Zero Commission.",
    desc: "Brands and creators connect directly with no middleman and no hidden fees.",
    icon: img7,
  },
  {
    title: "All-in-One Growth Platform.",
    desc: "Everything from discovery to campaign management happens in one place.",
    icon: img8,
  },
  {
    title: "Smart Auto DM Tools.",
    desc: "Automate outreach, replies, and conversations to save time and grow faster.",
    icon: img9,
  },
  {
    title: "Launch Faster. Scale Smarter.",
    desc: "Use AI tools and automation to grow without delays.",
    icon: img10,
  },
  {
    title: "No Delays. Full Transparency.",
    desc: "Direct access, intelligent matching, AI-powered tools, and seamless system designed for efficient execution and timely payouts.",
    icon: img11,
  },
  {
    img: img6,
    title: "Built for Results.",
    desc: "Designed for creators and brands who want better ROI.",
    icon: img7,
  },
  {
    img: img6,
    title: "Smarter Matching System.",
    desc: "Find the right creators and brands quickly with intelligent recommendations.",
    icon: img8,
  },
  {
    img: img6,
    title: "Easy to Use Platform.",

    desc: "Reliable and safe payment systems for smooth collaborations.",

    icon: img9,
  },
  {
    img: img6,
    title: "Future of Creator Marketing.",
    desc: "A modern platform built for the next generation of growth.",
    icon: img10,
  },
];
const creatorData = [
  {
    img: createrimg1,
    title: "Direct Deals. Zero Commission.",
    desc: "Work directly with brands without agencies taking cuts from your income. Keep full earnings, negotiate better deals, and build genuine partnerships that help you grow faster..",
    link: "/one",
  },
  {
    img: createrimg2,
    title: "Earn More. Keep More.",
    desc: "No hidden charges, no unnecessary deductions, and no commission fees. Every collaboration helps you keep more money and maximize the true value of your content.",
    link: "/two",
  },
  {
    img: createrimg3,
    title: "Get More Brand Opportunities.",

    desc: "Apply to active campaigns, get discovered by growing brands, and unlock new paid opportunities that match your niche, audience, and creator style consistently.",

    link: "/three",
  },
  {
    img: createrimg4,
    title: "Smart Auto DM Growth.",
    desc: "Automate outreach to brands, follow-up replies, and conversations so you can save time, increase responses, and secure more paid partnerships faster.",
    link: "/four",
  },
  {
    img: createrimg5,
    title: "Smarter Growth with AI Tools.",
    desc: "Use AI insights, smart suggestions, and automation tools to improve performance, grow your audience, and attract better brand collaborations over time.",
    link: "/one",
  },
  {
    img: createrimg1,
    title: "Built for Creators First.",
    desc: "Every feature is designed to help creators earn consistently, build credibility, manage partnerships professionally, and scale their creator journey with confidence.",
    link: "/two",
  },
  {
    img: createrimg2,
    title: "Long-Term Partnerships.",
    desc: "Build repeat collaborations with trusted brands instead of one-time deals, creating stable income and stronger business relationships for sustainable long-term growth.",
    link: "/three",
  },
  {
    img: createrimg3,
    title: "More Control, More Freedom.",
    desc: "Set your pricing, choose the campaigns you want, negotiate directly, and manage your business independently without relying on agencies or third parties.",
    link: "/four",
  },

  {
    img: createrimg4,
    title: "Grow Your Personal Brand.",
    desc: "Increase your visibility, attract premium opportunities, and position yourself as a professional creator with a stronger personal brand presence online.",
    link: "/one",
  },
  {
    img: createrimg5,
    title: "Turn Content into Income.",
    desc: "Monetize your creativity through better deals, trusted brand partnerships, and consistent opportunities that turn your content into a real business.",
    link: "/two",
  },
];
const brandData = [
  {
    img: brandimg1,
    title: "Direct Collaboration. Zero Commission.",
    desc: "Work directly with creators without paying agency commissions, reducing costs while improving communication, campaign speed, and collaboration quality for better results.",
    link: "/one",
  },
  {
    img: brandimg2,
    title: "Find the Right Creators Faster.",
    desc: "Discover creators based on niche, audience, performance, and relevance so your brand can partner with the right people quickly and confidently.",
    link: "/two",
  },
  {
    img: brandimg3,
    title: "Launch Campaigns in Minutes.",
    desc: "Create campaigns fast, publish requirements easily, and start receiving creator applications quickly so your marketing moves without delays or complexity.",
    link: "/three",
  },
  {
    img: brandimg4,
    title: "Smart Auto DM Outreach.",
    desc: "Automate creator outreach, replies, and follow-ups at scale to save time, improve response rates, and build more collaborations efficiently.",
    link: "/four",
  },
  {
    img: brandimg5,
    title: "Smarter Campaigns with AI Tools.",
    desc: "Use AI recommendations, performance insights, and smart systems to choose better creators, optimize campaigns, and improve marketing ROI consistently.",
    link: "/five",
  },
  {
    img: brandimg1,
    title: "Built for Modern Brand Growth.",
    desc: "Snaapii is designed for modern businesses that want measurable growth, efficient creator partnerships, and scalable influencer marketing without outdated processes.",

    link: "/six",
  },
  {
    img: brandimg2,
    title: "Better ROI. Lower Costs.",
    desc: "Reduce unnecessary spending on agencies and middlemen while maximizing every campaign budget through direct and efficient creator collaborations.",
    link: "/seven",
  },
  {
    img: brandimg3,
    title: "Full Transparency.",
    desc: "Track pricing, communication, campaign progress, and deliverables clearly so your team stays informed and campaigns remain organized from start to finish.",
    link: "/eight",
  },
  {
    img: brandimg4,
    title: "Scale Campaigns Easily.",
    desc: "Manage multiple creator campaigns, outreach efforts, and partnerships efficiently using one centralized platform built for smooth scaling.",
    link: "/nine",
  },
  {
    img: brandimg5,
    title: "Grow with Trusted Creators.",
    desc: "Build long-term relationships with reliable creators who understand your brand, helping future campaigns perform better and faster each time.",
    link: "/ten",
  },
];
type CardType = {
  img: string;
  title: string;
  desc: string;
  link: string;
};
const groupCards = (data: CardType[]): CardType[][] => {
  const grouped: CardType[][] = [];

  for (let i = 0; i < data.length; i += 4) {
    grouped.push(data.slice(i, i + 4));
  }

  return grouped;
};

function Home() {
  const navigate = useNavigate();
  // const swiperRef = useRef(null);

  const brandSwiperRef = useRef<SwiperType | null>(null);
  const createrSwiperRef = useRef<SwiperType | null>(null);

  const creatorGrouped = groupCards(creatorData);
  const brandGrouped = groupCards(brandData);
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
            slidesPerView={1.2}
            centeredSlides={true}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 0, // continuous move
              disableOnInteraction: false,
            }}
            speed={3000} // jitna bada, utna smooth slow
            pagination={{ clickable: true }}
          >
            {images.map((img, index) => (
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
            <div className="cards-track">
              {[...data, ...data].map((item, index) => (
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
              {[...data, ...data].map((item, index) => (
                <div className="why-card" key={index}>
                  <div className="why-box">
                    {" "}
                    <img src={item.icon} alt="icon" className="icon-img" />
                  </div>
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
            loop={true}
            slidesPerView={1}
            spaceBetween={20}
            onSwiper={(swiper) => (createrSwiperRef.current = swiper)}
          >
            {creatorGrouped.map((group, i) => (
              <SwiperSlide key={i}>
                <div className="swipe-grid">
                  {group.map((item, index) => (
                    <div className="card whysection-card" key={index}>
                      {/* Gradient */}
                      <div className="gradient-box"></div>

                      {/* Content */}
                      <div className="overlay-box d-flex justify-content-between gap-4">
                        <div className="ai-box">
                          <img
                            src={item.img}
                            alt="icon"
                            className="img-fluid"
                          />
                        </div>

                        <div className="whytext">
                          <h4>{item.title}</h4>
                          <p className="col-10">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Swipe Button */}
          <div className=" d-flex justify-content-center mt-4">
            <button
              className="swipe-btn"
              onClick={() => createrSwiperRef.current?.slideNext()}
            >
              Swipe
              <span className="ms-2">
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
            loop={true}
            slidesPerView={1}
            spaceBetween={20}
            onSwiper={(swiper) => (brandSwiperRef.current = swiper)}
          >
            {brandGrouped.map((group, i) => (
              <SwiperSlide key={i}>
                <div className="swipe-grid">
                  {group.map((item, index) => (
                    <div className="card whysection-card" key={index}>
                      {/* 🔥 Gradient Box */}
                      <div className="gradient-box"></div>
                      <div className="">
                        <div className="overlay-box d-flex justify-content-between gap-4">
                          <div className="ai-box">
                            <img
                              src={item.img}
                              alt="icon"
                              className="img-fluid bg-transparent"
                            />
                          </div>
                          <div className="whytext">
                            <h4>{item.title}</h4>
                            <p className="col-10">{item.desc}</p>
                          </div>
                        </div>
                      </div>

                      <div
                        className="arrow"
                        onClick={() => navigate(item.link)}
                      >
                        →
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
              onClick={() => brandSwiperRef.current?.slideNext()}
            >
              Swipe
              <span className="ms-3">
                <img src={icon} alt="icon" />
              </span>
            </button>
          </div>
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
}

export default Home;
