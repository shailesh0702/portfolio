"use client";

import React from "react";
import { achievements } from "../../data/portfolio";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export default function AchievementsSection() {
  const { ref } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="achievements" ref={ref} className="section-wrapper text-[var(--text-primary)]" aria-label="Key Achievements">
      <div className="site-container">
        {/* Section Header */}
        <div className="section-header-box">
          <p className="section-badge-tag" style={{ color: "#8B5CF6" }}>Milestones & Recognition</p>
          <h2 className="section-main-title">Achievements</h2>
          <div className="section-line-accent"></div>
          <p className="section-subtitle-text">
            Key highlights in student leadership, embedded hardware systems, and community teaching.
          </p>
        </div>

        {/* 3 Achievements Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
          }}
        >
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="portfolio-card"
              style={{
                padding: "2.25rem 2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "260px",
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "12px",
                      backgroundColor: `${item.color}15`,
                      border: `1px solid ${item.color}40`,
                      color: item.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.2rem",
                    }}
                  >
                    {idx === 0 ? "👥" : idx === 1 ? "⚡" : "⭐"}
                  </div>

                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontFamily: "monospace",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      color: item.color,
                      backgroundColor: `${item.color}15`,
                      border: `1px solid ${item.color}40`,
                      padding: "0.25rem 0.75rem",
                      borderRadius: "9999px",
                    }}
                  >
                    {item.badge}
                  </span>
                </div>

                <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "0.75rem", lineHeight: 1.4 }}>
                  {item.title}
                </h3>

                <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>
                  {item.description}
                </p>
              </div>

              <div
                style={{
                  borderTop: "1px solid var(--border-color)",
                  paddingTop: "1rem",
                  marginTop: "1.5rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "0.75rem",
                  fontFamily: "monospace",
                  color: "var(--text-secondary)",
                }}
              >
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: item.color }} />
                <span>Verified Contribution</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
