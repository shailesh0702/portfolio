"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useActiveSection } from "@/hooks/useActiveSection";
import { navItems } from "@/data/portfolio";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);

  const activeSection = useActiveSection(navItems.map((item) => item.href.substring(1)));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-scroll the mobile sliding bar to keep active item in view
  useEffect(() => {
    if (!sliderRef.current) return;
    const activeEl = sliderRef.current.querySelector<HTMLElement>('[data-active="true"]');
    if (activeEl) {
      const slider = sliderRef.current;
      const leftPos = activeEl.offsetLeft - slider.offsetWidth / 2 + activeEl.offsetWidth / 2;
      slider.scrollTo({ left: leftPos, behavior: "smooth" });
    }
  }, [activeSection]);

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
        backgroundColor: isScrolled ? "rgba(8, 11, 17, 0.92)" : "rgba(8, 11, 17, 0.8)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid var(--glass-border)",
        boxShadow: isScrolled ? "var(--glass-shadow)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      {/* Top Main Navigation Row */}
      <div
        className="site-container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "60px",
        }}
      >
        {/* Brand Logo */}
        <Link href="#hero" style={{ display: "flex", alignItems: "center", gap: "0.6rem", textDecoration: "none", color: "var(--text-primary)" }}>
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "10px",
              background: "linear-gradient(135deg, #00F0FF, #0284C7)",
              color: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 900,
              fontSize: "0.85rem",
              boxShadow: "0 0 14px rgba(0, 240, 255, 0.4)",
            }}
          >
            SPS
          </div>
          <div>
            <div style={{ fontWeight: 800, fontSize: "0.9rem", lineHeight: 1.1 }}>
              Shailesh<span style={{ color: "#00F0FF" }}>.dev</span>
            </div>
            <div style={{ fontSize: "0.6rem", fontFamily: "monospace", color: "var(--text-secondary)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
              Portfolio
            </div>
          </div>
        </Link>

        {/* Desktop Nav Links (Hidden on Mobile via CSS) */}
        <nav className="desktop-nav-links" style={{ alignItems: "center", gap: "1.25rem" }}>
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
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          {/* Theme Toggle Button */}
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

          {/* Quick CTA on Desktop */}
          <Link
            href="#contact"
            className="desktop-nav-links"
            style={{
              padding: "0.4rem 1.1rem",
              borderRadius: "9999px",
              fontWeight: 700,
              fontSize: "0.8rem",
              color: "#FFFFFF",
              background: "linear-gradient(135deg, #00F0FF, #0284C7)",
              textDecoration: "none",
              boxShadow: "0 0 14px rgba(0, 240, 255, 0.3)",
            }}
          >
            Contact
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="mobile-menu-btn"
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
              fontSize: "1.1rem",
            }}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Horizontal Sliding Navigation Ribbon (Always accessible on phone view) */}
      <div
        ref={sliderRef}
        className="mobile-sliding-bar no-scrollbar"
        style={{
          width: "100%",
          overflowX: "auto",
          whiteSpace: "nowrap",
          WebkitOverflowScrolling: "touch",
          padding: "0.35rem 1rem 0.5rem 1rem",
          gap: "0.4rem",
          borderTop: "1px solid rgba(255, 255, 255, 0.05)",
          alignItems: "center",
        }}
      >
        {navItems.map((item) => {
          const isActive = activeSection === item.href.substring(1);
          return (
            <Link
              key={item.label}
              href={item.href}
              data-active={isActive ? "true" : "false"}
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "0.35rem 0.85rem",
                borderRadius: "9999px",
                fontSize: "0.75rem",
                fontWeight: 700,
                textDecoration: "none",
                color: isActive ? "#FFFFFF" : "var(--text-secondary)",
                backgroundColor: isActive ? "rgba(0, 240, 255, 0.25)" : "var(--glass-bg)",
                border: `1px solid ${isActive ? "#00F0FF" : "var(--glass-border)"}`,
                boxShadow: isActive ? "0 0 12px rgba(0, 240, 255, 0.35)" : "none",
                transition: "all 0.25s ease",
                flexShrink: 0,
              }}
            >
              {item.label}
            </Link>
          );
        })}
      </div>

      {/* Mobile Slide-Down Full Drawer Menu */}
      {isMobileMenuOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            backgroundColor: "var(--bg-primary)",
            borderBottom: "1px solid var(--glass-border)",
            padding: "1.25rem",
            boxShadow: "0 16px 36px rgba(0,0,0,0.6)",
            display: "flex",
            flexDirection: "column",
            gap: "0.6rem",
            maxHeight: "80vh",
            overflowY: "auto",
          }}
        >
          <div style={{ fontSize: "0.7rem", fontFamily: "monospace", color: "var(--text-secondary)", textTransform: "uppercase", marginBottom: "0.25rem" }}>
            Navigation Sections
          </div>
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  padding: "0.65rem 1rem",
                  borderRadius: "10px",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  textDecoration: "none",
                  color: isActive ? "#00F0FF" : "var(--text-primary)",
                  backgroundColor: isActive ? "rgba(0, 240, 255, 0.12)" : "var(--bg-secondary)",
                  border: `1px solid ${isActive ? "rgba(0, 240, 255, 0.3)" : "var(--border-color)"}`,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span>{item.label}</span>
                {isActive ? (
                  <span style={{ width: "7px", height: "7px", borderRadius: "50%", backgroundColor: "#00F0FF", boxShadow: "0 0 8px #00F0FF" }} />
                ) : (
                  <span style={{ color: "var(--text-secondary)", fontSize: "0.8rem" }}>→</span>
                )}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
};

export default Navbar;
