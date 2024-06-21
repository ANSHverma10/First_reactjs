import React from "react";
import Header from "./components/Header.jsx";
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Weather from './components/Weather.jsx';
import "./App.css";

function App() {
  const apiKey = '4a4da08b539bd76c2b32d6a33a74fb89';
  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Weather apiKey={apiKey} />
      <Footer />
    </>
  );
}

export default App;
