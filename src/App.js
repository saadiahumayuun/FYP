import React, { useState } from "react";
import "./styles.css"; // This connects your CSS
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import About from "./components/About"; // 1. Added the Import for About
import AuthModal from "./components/AuthModal";

export default function App() {
  const [modal, setModal] = useState({ isOpen: false, view: "login" });

  const openModal = (viewType) => setModal({ isOpen: true, view: viewType });
  const closeModal = () => setModal({ ...modal, isOpen: false });
  const switchView = (newView) => setModal({ ...modal, view: newView });

  return (
    <div className="App">
      {/* Navigation bar stays at the top */}
      <Navigation onLoginClick={() => openModal("login")} />

      <main>
        {/* The Hero is the first thing people see */}
        <HeroSection onSignupClick={() => openModal("signup")} />

        {/* 2. The About section appears right below the Hero */}
        <About />
      </main>

      {/* The Login/Signup popup */}
      <AuthModal
        isOpen={modal.isOpen}
        view={modal.view}
        onClose={closeModal}
        onSwitch={switchView}
      />
    </div>
  );
}
