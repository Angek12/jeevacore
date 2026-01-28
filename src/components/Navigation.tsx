"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "The Problem", href: "#problem" },
    { name: "Solution", href: "#solution" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Devices", href: "#devices" },
    { name: "Impact", href: "#impact" },
    { name: "Pricing", href: "#pricing" },
    { name: "Research", href: "#research" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 50,
        transition: "all 0.3s",
        backgroundColor: scrolled ? "rgba(248, 250, 252, 0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 10px 25px -5px rgba(0, 0, 0, 0.1)" : "none"
      }}
    >
      <div style={{maxWidth: "1280px", margin: "0 auto", padding: "0 16px"}}>
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", height: "64px"}}>
          <div style={{display: "flex", alignItems: "center"}}>
            <div style={{fontSize: "24px", fontWeight: "bold", color: "#0F766E"}}>
              JeevaCore
            </div>
          </div>

          {/* Desktop Navigation */}
          <div style={{display: window.innerWidth >= 768 ? "block" : "none"}}>
            <div style={{marginLeft: "40px", display: "flex", alignItems: "baseline", gap: "16px"}}>
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  style={{
                    color: "#374151",
                    textDecoration: "none",
                    padding: "8px 12px",
                    borderRadius: "6px",
                    fontSize: "14px",
                    fontWeight: "500",
                    transition: "all 0.2s"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#0F766E";
                    e.target.style.backgroundColor = "#F3F4F6";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#374151";
                    e.target.style.backgroundColor = "transparent";
                  }}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div style={{display: window.innerWidth >= 768 ? "none" : "block"}}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "8px",
                borderRadius: "6px",
                color: "#374151",
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
                transition: "all 0.2s"
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "#0F766E";
                e.target.style.backgroundColor = "#F3F4F6";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "#374151";
                e.target.style.backgroundColor = "transparent";
              }}
            >
              {isOpen ? (
                <X style={{width: "24px", height: "24px"}} />
              ) : (
                <Menu style={{width: "24px", height: "24px"}} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div style={{
          display: window.innerWidth >= 768 ? "none" : "block",
          backgroundColor: "rgba(248, 250, 252, 0.95)",
          backdropFilter: "blur(12px)"
        }}>
          <div style={{padding: "8px 8px 12px", display: "flex", flexDirection: "column", gap: "4px"}}>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                style={{
                  color: "#374151",
                  textDecoration: "none",
                  padding: "8px 12px",
                  borderRadius: "6px",
                  fontSize: "16px",
                  fontWeight: "500",
                  display: "block",
                  transition: "all 0.2s"
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#0F766E";
                  e.target.style.backgroundColor = "#F3F4F6";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "#374151";
                  e.target.style.backgroundColor = "transparent";
                }}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
