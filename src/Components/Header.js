import React from "react";
import { useEffect, useState } from "react";

function Header({ data }) {
  if (!data) return null;

  const name = data.name;
  const city = data.address.city;

  const [activeHash, setActiveHash] = useState(() => {
    if (typeof window !== "undefined") {
      return window.location.hash || "#home";
    }
    return "#home";
  });

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash || "#home");
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const isActive = (hash) =>
    activeHash === hash || (hash === "#home" && activeHash === "");

  return (
    <header id="home">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className={isActive("#home") ? "current" : ""}>
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li className={isActive("#about") ? "current" : ""}>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>
          <li className={isActive("#resume") ? "current" : ""}>
            <a className="smoothscroll" href="#resume">
              Resume
            </a>
          </li>
          <li className={isActive("#projects") ? "current" : ""}>
            <a className="smoothscroll" href="#projects">
              Projects
            </a>
          </li>
        </ul>
      </nav>
      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">Hello, Welcome I Am {name}</h1>
          <h3>
            A versatile software engineer from {city} crafting the web with
            modern tech like Typescript, Next.js, Prisma, and more. When I'm not
            coding, I immerse myself in books and continuous learning. Dive in
            to explore more
          </h3>
          <hr />
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
}

export default Header;
