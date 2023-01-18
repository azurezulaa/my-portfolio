import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Socials from "./components/Hero/Socials";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("dark");
  const change = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
    console.log(theme);
  };
  return (
    <BrowserRouter>
      <div id={theme}>
        <Navbar />
        <Routes>
          <Route
            path="/"
            exact={true}
            element={<Hero theme={theme} change={change} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Socials />
      </div>
    </BrowserRouter>
  );
}

export default App;
