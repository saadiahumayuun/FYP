import React from "react";

export default function About() {
  return (
    /* The id="about-section" is right here in the first line */
    <section className="section-gray" id="about-section">
      <div className="container about-split">
        <div className="about-image">
          {/* High-quality placeholder of a museum stupa */}
          <img
            src="https://images.unsplash.com/photo-1608407558230-058983995f9d?auto=format&fit=crop&q=80&w=800"
            alt="Taxila Museum Stupa"
          />
        </div>
        <div className="about-text">
          <span
            style={{
              color: "var(--primary)",
              fontWeight: "bold",
              textTransform: "uppercase",
              fontSize: "14px",
              letterSpacing: "1px",
            }}
          >
            Preserving Gandhara
          </span>
          <h2>Explore Taxila Museum</h2>
          <p>
            Established in 1928, the Taxila Museum is a gateway to the ancient
            Gandhara civilization. It houses thousands of artifacts, including
            stone and stucco sculptures, gold and silver jewelry, and coins from
            the 1st to the 7th century AD.
          </p>
          <p>
            Our AI-powered platform helps digitize this vast history, making it
            accessible to researchers and history enthusiasts worldwide through
            high-precision identification and archival tools.
          </p>
        </div>
      </div>
    </section>
  );
}
