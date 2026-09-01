"use client";

import React, { useEffect, useState } from "react";
import { aboutTerminalLines, personalInfo } from "../../data/portfolio";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);

  useEffect(() => {
    if (!isVisible) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < aboutTerminalLines.length) {
        setDisplayedLines((prev) => [...prev, aboutTerminalLines[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 220);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section id="about" className="section-wrapper text-[var(--text-primary)]">
      <div ref={ref} className="site-container">
        {/* Section Header */}
        <div className="section-header-box">
          <p className="section-badge-tag">Background & Vision</p>
          <h2 className="section-main-title">About Me</h2>
          <div className="section-line-accent"></div>
          <p className="section-subtitle-text">
            Bridging algorithmic software development with physical embedded computing.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2.5rem",
            alignItems: "start",
          }}
        >
          {/* Left Column: Narrative Card */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            <div
              className="portfolio-card"
              style={{
                padding: "2.25rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <span
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    backgroundColor: "#00F0FF",
                    boxShadow: "0 0 10px #00F0FF",
                  }}
                />
                <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--text-primary)" }}>
                  Engineering Background & Journey
                </h3>
              </div>

              <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--text-secondary)" }}>
                {personalInfo.aboutParagraph}
              </p>

              <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "var(--text-secondary)" }}>
                Currently pursuing B.Tech CSE at <strong style={{ color: "var(--text-primary)" }}>Lovely Professional University (LPU)</strong>, I combine theoretical foundations in Data Structures, OOP, and DBMS with practical development in React, Node.js, C/C++, and Arduino microcontrollers.
              </p>
            </div>

            {/* Two Highlights */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  padding: "1.25rem",
                  borderRadius: "1.25rem",
                  border: "1px solid var(--glass-border)",
                  background: "var(--glass-bg)",
                }}
              >
                <div style={{ fontSize: "0.75rem", fontFamily: "monospace", fontWeight: 700, color: "#00F0FF", textTransform: "uppercase", marginBottom: "0.25rem" }}>
                  01 • Full-Stack
                </div>
                <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.25rem" }}>
                  Web Applications
                </div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                  Clean React components, Node.js REST APIs & database sync.
                </div>
              </div>

              <div
                style={{
                  padding: "1.25rem",
                  borderRadius: "1.25rem",
                  border: "1px solid var(--glass-border)",
                  background: "var(--glass-bg)",
                }}
              >
                <div style={{ fontSize: "0.75rem", fontFamily: "monospace", fontWeight: 700, color: "#00F0FF", textTransform: "uppercase", marginBottom: "0.25rem" }}>
                  02 • Embedded Systems
                </div>
                <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.25rem" }}>
                  IoT & Sensors
                </div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                  Arduino UNO, RFID RC522, ultrasonic velocity tracking & I2C LCDs.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Terminal */}
          <div
            style={{
              borderRadius: "1.5rem",
              overflow: "hidden",
              border: "1px solid var(--glass-border)",
              boxShadow: "var(--glass-shadow)",
              fontFamily: "ui-monospace, monospace",
              fontSize: "0.85rem",
            }}
          >
            {/* macOS Chrome */}
            <div
              style={{
                height: "44px",
                display: "flex",
                alignItems: "center",
                padding: "0 1.25rem",
                gap: "0.5rem",
                background: "var(--bg-secondary)",
                borderBottom: "1px solid var(--glass-border)",
              }}
            >
              <div style={{ width: "11px", height: "11px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.2)" }} />
              <div style={{ width: "11px", height: "11px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.2)" }} />
              <div style={{ width: "11px", height: "11px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.2)" }} />
              <span style={{ marginLeft: "0.75rem", fontSize: "0.75rem", color: "var(--text-secondary)" }}>
                shailesh@portfolio:~$
              </span>
            </div>

            {/* Terminal Body */}
            <div
              style={{
                padding: "1.5rem",
                background: "linear-gradient(180deg, #0B1220 0%, #111827 100%)",
                color: "var(--text-primary)",
                minHeight: "380px",
                lineHeight: "1.8",
              }}
            >
              {displayedLines.map((line, idx) => {
                if (!line) return <div key={idx} style={{ height: "0.75rem" }} />;
                if (line.startsWith(">")) {
                  return (
                    <div key={idx} style={{ color: "#00F0FF", fontWeight: 700, marginTop: "0.5rem" }}>
                      <span style={{ color: "#00F0FF", marginRight: "0.5rem" }}>➜</span>
                      <span>{line.substring(1).trim()}</span>
                    </div>
                  );
                }
                return (
                  <div key={idx} style={{ color: "var(--text-secondary)", paddingLeft: "1.25rem", fontSize: "0.85rem" }}>
                    {line}
                  </div>
                );
              })}

              {isVisible && (
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "0.75rem" }}>
                  <span style={{ color: "#00F0FF" }}>➜</span>
                  <span style={{ color: "#00F0FF" }}>~</span>
                  <span
                    style={{
                      display: "inline-block",
                      width: "8px",
                      height: "16px",
                      backgroundColor: "#00F0FF",
                      animation: "cursor-blink 0.7s step-end infinite",
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
