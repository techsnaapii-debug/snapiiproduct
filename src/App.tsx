import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import "./App.css";
import Home from "./pages/home";
import Knowledge from "./pages/knowledge/knowledge";
import Footer from "./components/footer";
import Details from "./pages/details";
import FAQs from "./pages/FAQs"; 
import Contact from "./pages/contact";
import Detail1 from "./pages/detail1";
import Detail2 from "./pages/detail2";
import Detail3 from "./pages/detail3";
import Detail4 from "./pages/detail4";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/knowledge" element={<Knowledge />} />
        <Route path="/faqs" element={<FAQs />} /> {/* ✅ now works */}
        <Route path="/details/:id" element={<Details />} />
         <Route path="/detail1/:id" element={<Detail1 />} />
         <Route path="/detail2/:id" element={<Detail2 />} />
          <Route path="/detail3/:id" element={<Detail3 />} />
          <Route path="/detail4/:id" element={<Detail4 />} />
         <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;