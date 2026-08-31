"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useActiveSection } from "@/hooks/useActiveSection";
import { navItems } from "@/data/portfolio";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  const activeSection = useActiveSection(navItems.map((item) => item.href.substring(1)));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (root.classList.contains("dark")) {
      root.classList.remove("dark");
      setIsDark(false);
    } else {
      root.classList.add("dark");
      setIsDark(true);
    }
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        height: isScrolled ? "64px" : "76px",
        backgroundColor: isScrolled ? "rgba(8, 11, 17, 0.88)" : "transparent",
        backdropFilter: isScrolled ? "blur(16px)" : "none",
        borderBottom: isScrolled ? "1px solid var(--glass-border)" : "1px solid transparent",
        boxShadow: isScrolled ? "var(--glass-shadow)" : "none",
        display: "flex",
        alignItems: "center",
        transition: "all 0.3s ease",
      }}
    >
      <div className="site-container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
        {/* Logo */}
        <Link href="#hero" style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none", color: "var(--text-primary)" }}>
          <div
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "10px",
              background: "linear-gradient(135deg, #00F0FF, #8B5CF6, #FF6B35)",
              color: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 900,
              fontSize: "0.85rem",
              boxShadow: "0 0 16px rgba(0, 240, 255, 0.4)",
            }}
          >
            SPS
          </div>
          <div>
            <div style={{ fontWeight: 800, fontSize: "0.95rem", lineHeight: 1.1 }}>
              Shailesh<span style={{ color: "#00F0FF" }}>.dev</span>
            </div>
            <div style={{ fontSize: "0.65rem", fontFamily: "monospace", color: "var(--text-secondary)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
              Portfolio
            </div>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex" style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <Link
                key={item.label}
                href={item.href}
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: isActive ? "#00F0FF" : "var(--text-secondary)",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                  position: "relative",
                  padding: "0.25rem 0",
                }}
              >
                {item.label}
                {isActive && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: "-4px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "5px",
                      height: "5px",
                      borderRadius: "50%",
                      backgroundColor: "#00F0FF",
                      boxShadow: "0 0 8px #00F0FF",
                    }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "10px",
              border: "1px solid var(--glass-border)",
              backgroundColor: "var(--glass-bg)",
              color: "var(--text-primary)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.95rem",
            }}
          >
            {isDark ? "🌙" : "☀️"}
          </button>

          {/* Quick CTA */}
          <Link
            href="#contact"
            style={{
              display: "none",
              padding: "0.45rem 1.25rem",
              borderRadius: "9999px",
              fontWeight: 700,
              fontSize: "0.8rem",
              color: "#FFFFFF",
              background: "linear-gradient(135deg, #00F0FF, #8B5CF6)",
              textDecoration: "none",
              boxShadow: "0 0 16px rgba(0, 240, 255, 0.3)",
            }}
            className="sm:inline-flex"
          >
            Contact Me
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden"
            style={{
              padding: "0.4rem 0.6rem",
              borderRadius: "8px",
              border: "1px solid var(--glass-border)",
              backgroundColor: "var(--glass-bg)",
              color: "var(--text-primary)",
              cursor: "pointer",
              fontSize: "1.1rem",
            }}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            backgroundColor: "var(--bg-primary)",
            borderBottom: "1px solid var(--glass-border)",
            padding: "1.5rem",
            boxShadow: "0 12px 30px rgba(0,0,0,0.5)",
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
          }}
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  padding: "0.6rem 1rem",
                  borderRadius: "8px",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  textDecoration: "none",
                  color: isActive ? "#00F0FF" : "var(--text-primary)",
                  backgroundColor: isActive ? "rgba(0, 240, 255, 0.1)" : "transparent",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span>{item.label}</span>
                {isActive && <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#00F0FF" }} />}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
};

export default Navbar;
