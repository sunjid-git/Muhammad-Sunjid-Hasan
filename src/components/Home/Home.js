import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Project from "../Project/Project";
import HomePage from "./HomePage";

const Home = () => {
  return (
    <>
      <HomePage />
      <About />
      <Project />
      <Contact />
    </>
  );
};

export default Home;
