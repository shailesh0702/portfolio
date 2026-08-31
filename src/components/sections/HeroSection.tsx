"use client";

import React from "react";
import Image from "next/image";
import { personalInfo, socialLinks } from "../../data/portfolio";
import { useTypingEffect } from "../../hooks/useTypingEffect";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import SparkleCanvas from "../SparkleCanvas";

export default function HeroSection() {
  const typedText = useTypingEffect(personalInfo.roles, 80, 40, 1800);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen w-full overflow-hidden flex items-center pt-28 pb-20 md:pt-36 md:pb-28 text-[var(--text-primary)]"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Sparkle particle canvas */}
      <SparkleCanvas />

      {/* Floating ambient glow orbs */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div
          style={{
            width: "550px",
            height: "550px",
            background: "radial-gradient(circle, #00F0FF 0%, transparent 70%)",
            opacity: 0.1,
            top: "5%",
            left: "5%",
          }}
          className="absolute rounded-full blur-[120px] animate-float-1"
        />
        <div
          style={{
            width: "480px",
            height: "480px",
            background: "radial-gradient(circle, #8B5CF6 0%, transparent 70%)",
            opacity: 0.08,
            top: "30%",
            right: "5%",
          }}
          className="absolute rounded-full blur-[120px] animate-float-2"
        />
      </div>

      <div className="site-container relative z-10 w-full">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "3.5rem",
            alignItems: "center",
          }}
        >
          {/* Left Column (Text & CTAs) */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              textAlign: "left",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.8s ease, transform 0.8s ease",
            }}
          >
            {/* Status Pill */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.4rem 1.1rem",
                borderRadius: "9999px",
                background: "var(--glass-bg)",
                border: "1px solid var(--glass-border)",
                fontSize: "0.85rem",
                fontWeight: 600,
                color: "var(--text-secondary)",
                marginBottom: "1.25rem",
                boxShadow: "var(--glass-shadow)",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: "#10B981",
                  boxShadow: "0 0 10px #10B981",
                  display: "inline-block",
                }}
              />
              <span>{personalInfo.status}</span>
            </div>

            {/* Name Heading */}
            <h1
              style={{
                fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)",
                fontWeight: 900,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: "var(--text-primary)",
                marginBottom: "0.75rem",
              }}
            >
              Shailesh
              <span
                style={{
                  display: "block",
                  background: "linear-gradient(90deg, #00F0FF, #8B5CF6, #FF6B35)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  marginTop: "0.25rem",
                }}
              >
                Pratap Singh
              </span>
            </h1>

            {/* Tagline */}
            <div
              style={{
                fontSize: "clamp(1.05rem, 2vw, 1.25rem)",
                fontWeight: 700,
                color: "#00F0FF",
                marginBottom: "0.75rem",
                letterSpacing: "-0.01em",
              }}
            >
              {personalInfo.tagline}
            </div>

            {/* Typing Role Line */}
            <div
              style={{
                fontSize: "1.05rem",
                fontWeight: 400,
                color: "var(--text-secondary)",
                marginBottom: "1.25rem",
                minHeight: "1.8rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span style={{ marginRight: "0.5rem" }}>Specializing in</span>
              <span
                style={{
                  fontWeight: 700,
                  color: "#8B5CF6",
                }}
              >
                {typedText}
              </span>
              <span
                style={{
                  display: "inline-block",
                  width: "2px",
                  height: "1.2em",
                  backgroundColor: "#00F0FF",
                  marginLeft: "4px",
                  animation: "cursor-blink 0.7s step-end infinite",
                }}
              />
            </div>

            {/* Short Intro */}
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.7,
                color: "var(--text-secondary)",
                marginBottom: "1.75rem",
                maxWidth: "560px",
              }}
            >
              {personalInfo.shortIntro}
            </p>

            {/* Quick Metrics Bar */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "0.75rem",
                width: "100%",
                maxWidth: "480px",
                marginBottom: "2rem",
              }}
            >
              <div
                style={{
                  padding: "0.75rem",
                  borderRadius: "1rem",
                  border: "1px solid var(--glass-border)",
                  background: "var(--glass-bg)",
                  textAlign: "center",
                }}
              >
                <div style={{ fontWeight: 800, color: "#00F0FF", fontSize: "0.95rem" }}>B.Tech CSE</div>
                <div style={{ fontSize: "0.75rem", color: "var(--text-secondary)", marginTop: "2px" }}>LPU (7.37 TGPA)</div>
              </div>
              <div
                style={{
                  padding: "0.75rem",
                  borderRadius: "1rem",
                  border: "1px solid var(--glass-border)",
                  background: "var(--glass-bg)",
                  textAlign: "center",
                }}
              >
                <div style={{ fontWeight: 800, color: "#FF6B35", fontSize: "0.95rem" }}>Embedded IoT</div>
                <div style={{ fontSize: "0.75rem", color: "var(--text-secondary)", marginTop: "2px" }}>Arduino & Sensors</div>
              </div>
              <div
                style={{
                  padding: "0.75rem",
                  borderRadius: "1rem",
                  border: "1px solid var(--glass-border)",
                  background: "var(--glass-bg)",
                  textAlign: "center",
                }}
              >
                <div style={{ fontWeight: 800, color: "#8B5CF6", fontSize: "0.95rem" }}>Full Stack</div>
                <div style={{ fontSize: "0.75rem", color: "var(--text-secondary)", marginTop: "2px" }}>React & Node.js</div>
              </div>
            </div>

            {/* Action Buttons: "View Projects" and "Contact Me" */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                marginBottom: "2rem",
              }}
            >
              <a
                href="#projects"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0.85rem 2rem",
                  borderRadius: "9999px",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  color: "#FFFFFF",
                  background: "linear-gradient(135deg, #00F0FF, #8B5CF6)",
                  boxShadow: "0 0 25px rgba(0, 240, 255, 0.35)",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
              >
                <span>View Projects</span>
                <span style={{ marginLeft: "0.5rem" }}>↓</span>
              </a>
              <a
                href="#contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0.85rem 2rem",
                  borderRadius: "9999px",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  color: "var(--text-primary)",
                  border: "1px solid var(--glass-border)",
                  background: "var(--glass-bg)",
                  backdropFilter: "blur(12px)",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
              >
                <span>Contact Me</span>
                <span style={{ marginLeft: "0.5rem", color: "#00F0FF" }}>→</span>
              </a>
            </div>

            {/* Social Links with Icons */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.85rem",
              }}
            >
              {socialLinks.slice(0, 2).map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.45rem 1.1rem",
                    borderRadius: "9999px",
                    border: "1px solid var(--glass-border)",
                    background: "var(--glass-bg)",
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    transition: "all 0.2s ease",
                  }}
                >
                  {link.icon === "github" ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  )}
                  <span>{link.name}</span>
                  <span style={{ color: "#00F0FF", fontSize: "0.75rem" }}>↗</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column (Portrait Photo with Rotating Neon Border) */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "360px",
                height: "480px",
                borderRadius: "2.25rem",
                padding: "6px",
                background: "linear-gradient(135deg, #00F0FF, #8B5CF6, #FF6B35, #10B981)",
                boxShadow: "0 0 45px rgba(0, 240, 255, 0.28)",
              }}
            >
              {/* Photo Container */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  borderRadius: "2rem",
                  overflow: "hidden",
                  backgroundColor: "#0B1220",
                }}
              >
                <Image
                  src="/shailesh.jpg"
                  alt="Portrait of Shailesh Pratap Singh"
                  fill
                  priority
                  style={{
                    objectFit: "cover",
                    objectPosition: "top center",
                  }}
                  sizes="(max-width: 768px) 100vw, 360px"
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent 40%)",
                    pointerEvents: "none",
                  }}
                />
              </div>

              {/* Floating tech badge pill on the bottom of the photo */}
              <div
                style={{
                  position: "absolute",
                  bottom: "-14px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  padding: "0.45rem 1.25rem",
                  borderRadius: "9999px",
                  border: "1px solid var(--glass-border)",
                  backgroundColor: "var(--bg-primary)",
                  backdropFilter: "blur(16px)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "0.75rem",
                  fontFamily: "monospace",
                  color: "var(--text-primary)",
                  whiteSpace: "nowrap",
                  zIndex: 20,
                }}
              >
                <span
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    backgroundColor: "#00F0FF",
                  }}
                />
                <span>C++ • Python • React • IoT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
