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
      className="relative min-h-screen w-full overflow-hidden flex items-center text-[var(--text-primary)]"
      style={{
        background: "var(--bg-primary)",
        paddingTop: "clamp(8.5rem, 22vw, 10.5rem)",
        paddingBottom: "clamp(3.5rem, 6vw, 6rem)",
      }}
    >
      {/* Sparkle particle canvas */}
      <SparkleCanvas />

      {/* Floating ambient glow orbs */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div
          style={{
            width: "clamp(300px, 50vw, 550px)",
            height: "clamp(300px, 50vw, 550px)",
            background: "radial-gradient(circle, #00F0FF 0%, transparent 70%)",
            opacity: 0.1,
            top: "5%",
            left: "5%",
          }}
          className="absolute rounded-full blur-[100px] animate-float-1"
        />
        <div
          style={{
            width: "clamp(250px, 45vw, 480px)",
            height: "clamp(250px, 45vw, 480px)",
            background: "radial-gradient(circle, #8B5CF6 0%, transparent 70%)",
            opacity: 0.08,
            top: "30%",
            right: "5%",
          }}
          className="absolute rounded-full blur-[100px] animate-float-2"
        />
      </div>

      <div className="site-container relative z-10 w-full">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
            gap: "clamp(2rem, 5vw, 3.5rem)",
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
                padding: "0.35rem 1rem",
                borderRadius: "9999px",
                background: "var(--glass-bg)",
                border: "1px solid var(--glass-border)",
                fontSize: "clamp(0.75rem, 1.8vw, 0.85rem)",
                fontWeight: 600,
                color: "var(--text-secondary)",
                marginBottom: "1rem",
                boxShadow: "var(--glass-shadow)",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: "#00F0FF",
                  boxShadow: "0 0 10px #00F0FF",
                  display: "inline-block",
                }}
              />
              <span>{personalInfo.status}</span>
            </div>

            {/* Name Heading */}
            <h1
              style={{
                fontSize: "clamp(2.25rem, 6vw, 4.25rem)",
                fontWeight: 900,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: "var(--text-primary)",
                marginBottom: "0.6rem",
              }}
            >
              Shailesh
              <span
                style={{
                  display: "block",
                  color: "#00F0FF",
                  marginTop: "0.2rem",
                }}
              >
                Pratap Singh
              </span>
            </h1>

            {/* Tagline */}
            <div
              style={{
                fontSize: "clamp(0.95rem, 2.2vw, 1.25rem)",
                fontWeight: 700,
                color: "#00F0FF",
                marginBottom: "0.6rem",
                letterSpacing: "-0.01em",
              }}
            >
              {personalInfo.tagline}
            </div>

            {/* Typing Role Line */}
            <div
              style={{
                fontSize: "clamp(0.9rem, 2vw, 1.05rem)",
                fontWeight: 400,
                color: "var(--text-secondary)",
                marginBottom: "1rem",
                minHeight: "1.8rem",
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <span style={{ marginRight: "0.4rem" }}>Specializing in</span>
              <span
                style={{
                  fontWeight: 700,
                  color: "#00F0FF",
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
                fontSize: "clamp(0.9rem, 1.8vw, 1.05rem)",
                lineHeight: 1.7,
                color: "var(--text-secondary)",
                marginBottom: "1.5rem",
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
                gap: "0.6rem",
                width: "100%",
                maxWidth: "480px",
                marginBottom: "1.75rem",
              }}
            >
              <div
                style={{
                  padding: "0.65rem 0.5rem",
                  borderRadius: "1rem",
                  border: "1px solid var(--glass-border)",
                  background: "var(--glass-bg)",
                  textAlign: "center",
                }}
              >
                <div style={{ fontWeight: 800, color: "#00F0FF", fontSize: "clamp(0.8rem, 1.8vw, 0.95rem)" }}>B.Tech CSE</div>
                <div style={{ fontSize: "0.7rem", color: "var(--text-secondary)", marginTop: "2px" }}>LPU (7.37 TGPA)</div>
              </div>
              <div
                style={{
                  padding: "0.65rem 0.5rem",
                  borderRadius: "1rem",
                  border: "1px solid var(--glass-border)",
                  background: "var(--glass-bg)",
                  textAlign: "center",
                }}
              >
                <div style={{ fontWeight: 800, color: "#00F0FF", fontSize: "clamp(0.8rem, 1.8vw, 0.95rem)" }}>Embedded IoT</div>
                <div style={{ fontSize: "0.7rem", color: "var(--text-secondary)", marginTop: "2px" }}>Arduino & Sensors</div>
              </div>
              <div
                style={{
                  padding: "0.65rem 0.5rem",
                  borderRadius: "1rem",
                  border: "1px solid var(--glass-border)",
                  background: "var(--glass-bg)",
                  textAlign: "center",
                }}
              >
                <div style={{ fontWeight: 800, color: "#00F0FF", fontSize: "clamp(0.8rem, 1.8vw, 0.95rem)" }}>Full Stack</div>
                <div style={{ fontSize: "0.7rem", color: "var(--text-secondary)", marginTop: "2px" }}>React & Node.js</div>
              </div>
            </div>

            {/* Action Buttons: "View Projects" and "Contact Me" */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.75rem",
                marginBottom: "1.75rem",
                width: "100%",
              }}
            >
              <a
                href="#projects"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "clamp(0.75rem, 2vw, 0.85rem) clamp(1.5rem, 4vw, 2rem)",
                  borderRadius: "9999px",
                  fontWeight: 700,
                  fontSize: "clamp(0.85rem, 1.8vw, 0.95rem)",
                  color: "#FFFFFF",
                  background: "linear-gradient(135deg, #00F0FF, #0284C7)",
                  boxShadow: "0 0 25px rgba(0, 240, 255, 0.35)",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  flex: "1 1 auto",
                  minWidth: "140px",
                  textAlign: "center",
                }}
              >
                <span>View Projects</span>
                <span style={{ marginLeft: "0.4rem" }}>↓</span>
              </a>
              <a
                href="#contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "clamp(0.75rem, 2vw, 0.85rem) clamp(1.5rem, 4vw, 2rem)",
                  borderRadius: "9999px",
                  fontWeight: 600,
                  fontSize: "clamp(0.85rem, 1.8vw, 0.95rem)",
                  color: "var(--text-primary)",
                  border: "1px solid var(--glass-border)",
                  background: "var(--glass-bg)",
                  backdropFilter: "blur(12px)",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  flex: "1 1 auto",
                  minWidth: "140px",
                  textAlign: "center",
                }}
              >
                <span>Contact Me</span>
                <span style={{ marginLeft: "0.4rem", color: "#00F0FF" }}>→</span>
              </a>
            </div>

            {/* Social Links with Icons */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.75rem",
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
                    gap: "0.4rem",
                    padding: "0.4rem 1rem",
                    borderRadius: "9999px",
                    border: "1px solid var(--glass-border)",
                    background: "var(--glass-bg)",
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    transition: "all 0.2s ease",
                  }}
                >
                  {link.icon === "github" ? (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  ) : (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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

          {/* Right Column (Portrait Photo with Responsive Neon Border) */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
              width: "100%",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "clamp(260px, 80vw, 360px)",
                height: "clamp(350px, 60vh, 480px)",
                borderRadius: "clamp(1.5rem, 4vw, 2.25rem)",
                padding: "4px",
                background: "linear-gradient(135deg, #00F0FF, #0284C7)",
                boxShadow: "0 0 35px rgba(0, 240, 255, 0.25)",
                margin: "0 auto",
              }}
            >
              {/* Photo Container */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  borderRadius: "clamp(1.25rem, 3.5vw, 2rem)",
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
                  sizes="(max-width: 768px) 80vw, 360px"
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
                  bottom: "-12px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  padding: "0.35rem 1rem",
                  borderRadius: "9999px",
                  border: "1px solid var(--glass-border)",
                  backgroundColor: "var(--bg-primary)",
                  backdropFilter: "blur(16px)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  fontSize: "clamp(0.65rem, 1.8vw, 0.75rem)",
                  fontFamily: "monospace",
                  color: "var(--text-primary)",
                  whiteSpace: "nowrap",
                  zIndex: 20,
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
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
