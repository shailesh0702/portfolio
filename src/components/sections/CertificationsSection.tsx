"use client";

import React from "react";
import { certifications } from "../../data/portfolio";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export default function CertificationsSection() {
  const { ref } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="certifications" ref={ref} className="section-wrapper text-[var(--text-primary)]" aria-label="Certifications & Credentials">
      <div className="site-container">
        {/* Section Header */}
        <div className="section-header-box">
          <p className="section-badge-tag">Verified Credentials</p>
          <h2 className="section-main-title">Certifications</h2>
          <div className="section-line-accent"></div>
          <p className="section-subtitle-text">
            Industry and academic certifications in programming languages, software skills, and professional development.
          </p>
        </div>

        {/* 3 Certifications Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
          }}
        >
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="portfolio-card"
              style={{
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "260px",
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem", flexWrap: "wrap", gap: "0.5rem" }}>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontFamily: "monospace",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      color: cert.color,
                      backgroundColor: `${cert.color}15`,
                      border: `1px solid ${cert.color}40`,
                      padding: "0.3rem 0.85rem",
                      borderRadius: "9999px",
                    }}
                  >
                    {cert.badgeText}
                  </span>

                  <span style={{ fontSize: "0.8rem", color: "var(--text-secondary)", fontFamily: "monospace" }}>
                    {cert.issueDate}
                  </span>
                </div>

                <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "0.5rem", lineHeight: 1.4 }}>
                  {cert.title}
                </h3>

                <p style={{ fontSize: "0.9rem", fontWeight: 700, color: cert.color }}>
                  {cert.issuer}
                </p>
              </div>

              <div
                style={{
                  borderTop: "1px solid var(--border-color)",
                  paddingTop: "1rem",
                  marginTop: "1.5rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: "0.8rem",
                }}
              >
                <span style={{ color: "var(--text-secondary)", fontFamily: "monospace" }}>
                  {cert.credentialId ? `ID: ${cert.credentialId}` : "Verified Completion"}
                </span>

                {cert.verifyLink && (
                  <a
                    href={cert.verifyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: cert.color,
                      fontWeight: 700,
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.25rem",
                    }}
                  >
                    <span>Verify</span>
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
