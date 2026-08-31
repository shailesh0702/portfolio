"use client";

import React from "react";
import { experiences } from "../../data/portfolio";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export default function ExperienceSection() {
  const { ref } = useScrollAnimation({ threshold: 0.1 });

  if (!experiences || experiences.length === 0) return null;

  return (
    <section id="experience" ref={ref} className="section-wrapper text-[var(--text-primary)]" aria-label="Experience & Workshops">
      <div className="site-container">
        {/* Section Header */}
        <div className="section-header-box">
          <p className="section-badge-tag" style={{ color: "#FF6B35" }}>Mentorship & Tutoring</p>
          <h2 className="section-main-title">Experience</h2>
          <div className="section-line-accent"></div>
          <p className="section-subtitle-text">
            Conducted technical tutoring sessions to mentor peers in programming logic, algorithms, and debugging.
          </p>
        </div>

        {/* Experience Card */}
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="portfolio-card"
              style={{
                padding: "2.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: "1rem",
                  borderBottom: "1px solid var(--border-color)",
                  paddingBottom: "1.25rem",
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontFamily: "monospace",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      color: "#FF6B35",
                      backgroundColor: "rgba(255,107,53,0.15)",
                      border: "1px solid rgba(255,107,53,0.35)",
                      padding: "0.3rem 0.85rem",
                      borderRadius: "9999px",
                      display: "inline-block",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {exp.role}
                  </span>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: 900, color: "var(--text-primary)", lineHeight: 1.3 }}>
                    {exp.title}
                  </h3>
                  <p style={{ color: "#8B5CF6", fontWeight: 700, fontSize: "0.95rem", marginTop: "0.25rem" }}>
                    {exp.organization}
                  </p>
                </div>

                <span
                  style={{
                    fontSize: "0.85rem",
                    fontFamily: "monospace",
                    fontWeight: 700,
                    color: "#00F0FF",
                    backgroundColor: "rgba(0,240,255,0.12)",
                    border: "1px solid rgba(0,240,255,0.3)",
                    padding: "0.35rem 0.9rem",
                    borderRadius: "9999px",
                  }}
                >
                  {exp.duration}
                </span>
              </div>

              <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>
                {exp.description}
              </p>

              {/* Highlights 2-column grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                  gap: "1rem",
                }}
              >
                {exp.highlights.map((highlight, hIdx) => (
                  <div
                    key={hIdx}
                    style={{
                      padding: "1rem 1.25rem",
                      borderRadius: "1rem",
                      border: "1px solid var(--border-color)",
                      backgroundColor: "var(--bg-secondary)",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.75rem",
                    }}
                  >
                    <span style={{ color: "#00F0FF", fontWeight: 900, marginTop: "1px" }}>✓</span>
                    <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>

              {/* Skills & Repos */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "1rem",
                  borderTop: "1px solid var(--border-color)",
                  paddingTop: "1.25rem",
                }}
              >
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      style={{
                        padding: "0.3rem 0.8rem",
                        borderRadius: "9999px",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        backgroundColor: "var(--bg-secondary)",
                        border: "1px solid var(--border-color)",
                        color: "var(--text-primary)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {exp.githubUrl && (
                  <a
                    href={exp.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: "0.85rem",
                      fontWeight: 700,
                      color: "#00F0FF",
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.25rem",
                    }}
                  >
                    <span>View Repository & Materials</span>
                    <span>↗</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
