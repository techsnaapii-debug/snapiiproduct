import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import "./App.css";
import Home from "./pages/home";
import Knowledge from "./pages/knowledge/knowledge";
import Footer from "./components/footer";
import Details from "./pages/details";
import FAQs from "./pages/FAQs"; // ✅ ADD THIS
import Contact from "./pages/contact";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/knowledge" element={<Knowledge />} />
        <Route path="/faqs" element={<FAQs />} /> {/* ✅ now works */}
        <Route path="/details/:id" element={<Details />} />
         <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;