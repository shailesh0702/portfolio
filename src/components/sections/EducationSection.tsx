"use client";

import React from "react";
import { education } from "../../data/portfolio";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export default function EducationSection() {
  const { ref } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="education" ref={ref} className="section-wrapper text-[var(--text-primary)]" aria-label="Academic Education">
      <div className="site-container">
        {/* Section Header */}
        <div className="section-header-box">
          <p className="section-badge-tag">Academic Journey</p>
          <h2 className="section-main-title">Education</h2>
          <div className="section-line-accent"></div>
          <p className="section-subtitle-text">
            Formal academic background in Computer Science & Engineering and foundational sciences.
          </p>
        </div>

        {/* Timeline Container */}
        <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative", paddingLeft: "2.5rem" }}>
          {/* Vertical Gradient Bar */}
          <div
            style={{
              position: "absolute",
              left: "11px",
              top: "16px",
              bottom: "16px",
              width: "2px",
              background: "linear-gradient(180deg, #00F0FF, #8B5CF6, #FF6B35)",
            }}
          />

          {education.map((item, idx) => (
            <div key={idx} style={{ position: "relative", marginBottom: "2.5rem" }}>
              {/* Timeline Node Dot */}
              <div
                style={{
                  position: "absolute",
                  left: "-2.5rem",
                  top: "1.25rem",
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  backgroundColor: "var(--bg-primary)",
                  border: `2px solid ${idx === 0 ? "#00F0FF" : idx === 1 ? "#8B5CF6" : "#FF6B35"}`,
                  boxShadow: `0 0 12px ${idx === 0 ? "#00F0FF" : idx === 1 ? "#8B5CF6" : "#FF6B35"}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: idx === 0 ? "#00F0FF" : idx === 1 ? "#8B5CF6" : "#FF6B35",
                  }}
                />
              </div>

              {/* Education Card */}
              <div
                className="portfolio-card"
                style={{
                  padding: "2rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "0.75rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  <div>
                    <h3 style={{ fontSize: "1.35rem", fontWeight: 900, color: "var(--text-primary)", lineHeight: 1.3 }}>
                      {item.institution}
                    </h3>
                    <p style={{ fontSize: "0.95rem", fontWeight: 700, color: idx === 0 ? "#00F0FF" : idx === 1 ? "#8B5CF6" : "#FF6B35", marginTop: "0.25rem" }}>
                      {item.degree}
                    </p>
                  </div>

                  <span
                    style={{
                      fontSize: "0.8rem",
                      fontFamily: "monospace",
                      fontWeight: 700,
                      color: "#00F0FF",
                      backgroundColor: "rgba(0,240,255,0.12)",
                      border: "1px solid rgba(0,240,255,0.3)",
                      padding: "0.3rem 0.85rem",
                      borderRadius: "9999px",
                    }}
                  >
                    {item.duration}
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    gap: "1rem",
                    borderTop: "1px solid var(--border-color)",
                    paddingTop: "1rem",
                    marginTop: "1rem",
                  }}
                >
                  <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                    📍 {item.location}
                  </span>

                  {item.grade && (
                    <span
                      style={{
                        fontSize: "0.8rem",
                        fontFamily: "monospace",
                        fontWeight: 700,
                        color: "#FF6B35",
                        backgroundColor: "rgba(255,107,53,0.15)",
                        border: "1px solid rgba(255,107,53,0.35)",
                        padding: "0.25rem 0.75rem",
                        borderRadius: "9999px",
                      }}
                    >
                      {item.gradeLabel}: {item.grade}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
