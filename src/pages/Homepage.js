import React from "react";
import { Element } from "react-scroll";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Experiences from "../components/sections/Experiences";
import Herosection from "../components/sections/Herosection";
import Projects from "../components/sections/Projects";

function Homepage() {
  document.body.classList.add("dark");
  return (
    <>
      <Header logoSource="/images/logo.svg" />
      <main className="content-3">
        <Element name="section-home">
            <Herosection />
        </Element>
        <Element name="section-about">
          <About />
        </Element>
        <Element name="section-experiences">
          <Experiences />
        </Element>
        <Element name="section-projects">
          <Projects />
        </Element>
        <Element name="section-contact">
          <Contact />
        </Element>
        <div className="spacer" data-height="96"></div>
      </main>
      <Footer />
    </>
  );
}

export default Homepage;
