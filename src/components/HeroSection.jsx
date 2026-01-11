import React from "react";

export default function HeroSection({ onSignupClick }) {
  return (
    <header className="hero container">
      <h1>AI Curation for Gandharan Heritage</h1>
      <p>Identify and catalog ancient artifacts with scholarly accuracy.</p>
      <button className="btn btn-orange" onClick={onSignupClick}>
        Get Started
      </button>
    </header>
  );
}
