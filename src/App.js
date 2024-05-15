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
import Fade from "react-reveal";

function App() {
  return (
    <div className="w-full h-auto bg-white text-lightText">
      <Navbar />
      <div className="banner-section">
        <div className="max-w-screen-xl mx-auto">
          <Banner />
        </div>
      </div>
      <div className="features-section">
        <div className="max-w-screen-xl mx-auto">
          <Fade up>
            <Features />
          </Fade>
        </div>
      </div>
      <div className="projects-section">
        <div className="max-w-screen-xl mx-auto">
          <Fade right>
            <Projects />
          </Fade>
        </div>
      </div>

      <div className="features-section">
        <div className="max-w-screen-xl mx-auto">
          <Fade left>
            <Resume />
          </Fade>
        </div>
      </div>

      <div className="projects-section">
        <div className="max-w-screen-xl mx-auto">
          <Fade down>
            <Testimonial />
          </Fade>
        </div>
      </div>

      <div className="features-section">
        <div className="max-w-screen-xl mx-auto">
          <Fade up>
            <Contact />
          </Fade>
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
