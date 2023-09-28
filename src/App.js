import React from "react";
import "./index.css"
import "./App.css"
import Sidebar from "./components/sidebar/Navbar";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";


function App() {
  return (
    <>
      <main className="main">
        <Sidebar />
        <Home />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>
    </>
  );
}

export default App;
