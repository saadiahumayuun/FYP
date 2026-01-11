import React from "react";

export default function Navigation({ onLoginClick }) {
  // This function finds the ID we just added in the About file
  const scrollToAbout = () => {
    const element = document.getElementById("about-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar sticky-nav">
      <div className="container flex-between">
        <div
          className="logo"
          style={{ cursor: "pointer" }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Taxila AI
        </div>

        <div className="nav-right-group">
          <div className="nav-links">
            <button className="nav-link" onClick={scrollToAbout}>
              About
            </button>
            <button className="nav-link">Features</button>
            <button className="nav-link">Pricing</button>
          </div>

          <button className="btn btn-orange" onClick={onLoginClick}>
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}
