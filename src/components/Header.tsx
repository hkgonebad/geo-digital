import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => setMobileMenuOpen((open) => !open);
  const handleLinkClick = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200 transition-colors py-2 px-4 lg:px-8 w-full">
      <div className="container px-0 lg:px-6 mx-auto flex justify-between items-center relative">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold">
            <span className="text-black">GEO</span>
            <span className="text-secondary">.</span>
            <span className="text-black">digital</span>
          </h1>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#services" className="font-medium hover:text-secondary transition-colors">
            Services
          </a>
          <a href="#about" className="font-medium hover:text-secondary transition-colors">
            About
          </a>
          <a href="#contact" className="font-medium hover:text-secondary transition-colors">
            Contact
          </a>
        </nav>
        <Button className="hidden md:block btn-primary">Get a Quote</Button>
        <button className="md:hidden text-2xl focus:outline-none" aria-label="Open menu" onClick={handleMenuToggle}>
          ☰
        </button>
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full right-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-50 md:hidden animate-fade-in">
            <nav className="flex flex-col p-4 space-y-2">
              <a href="#services" className="font-medium hover:text-secondary transition-colors" onClick={handleLinkClick}>
                Services
              </a>
              <a href="#about" className="font-medium hover:text-secondary transition-colors" onClick={handleLinkClick}>
                About
              </a>
              <a href="#contact" className="font-medium hover:text-secondary transition-colors" onClick={handleLinkClick}>
                Contact
              </a>
              <Button className="btn-primary mt-2 w-full" onClick={handleLinkClick}>
                Get a Quote
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
