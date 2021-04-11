import React from "react";
import Header from './Components/Header/Header';
import AboutMe from "./Components/AboutMe/AboutMe";
import Projects from "./Components/Projects/Projects";
import Contact from './Components/Contact/Contact';
import Connect from "./Components/Connect/Connect";
import Footer from "./Components/Footer/Footer";

import './Styles/styles.scss';


export default () => (
  <>
  {/* Add a floating Button Navbar 
  Live Chat Support
  Move to Top
  Resume {Download link}
  Projects Cards (Glass Moving)
  Experiences {Timeline}
  Skills
  SVGS */}
    <Header />
    <AboutMe />
    <Projects />
    <Connect />
    <Contact />
    <Footer />
  </>
);
