import React from "react";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Testimonial from "./components/tesimonial/Testimonial";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
      <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
      </div>
      <div className="bg-[#d5ffff]">
        <div className="max-w-screen-xl mx-auto">
          <Features />
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto">
        <Projects />
      </div>
      <div className="bg-[#d5ffff]">
        <div className="max-w-screen-xl mx-auto">
          <Resume />
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto">
        <Testimonial />
      </div>
      <div className="bg-[#d5ffff]">
        <div className="max-w-screen-xl mx-auto">
          <Contact />
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto">
        <Footer />
        <FooterBottom />
      </div>
    </div>
  );
}

export default App;
