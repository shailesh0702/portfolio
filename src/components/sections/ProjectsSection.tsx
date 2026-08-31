"use client";

import React, { useState } from "react";
import { projects, Project } from "../../data/portfolio";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export default function ProjectsSection() {
  const { ref } = useScrollAnimation({ threshold: 0.1 });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" ref={ref} className="section-wrapper text-[var(--text-primary)]" aria-label="Featured Projects">
      <div className="site-container">
        {/* Section Header */}
        <div className="section-header-box">
          <p className="section-badge-tag">Featured Works</p>
          <h2 className="section-main-title">Projects</h2>
          <div className="section-line-accent"></div>
          <p className="section-subtitle-text">
            Software applications and smart IoT embedded prototypes.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2.5rem",
          }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="portfolio-card"
              style={{
                padding: "2.25rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontFamily: "monospace",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      padding: "0.3rem 0.85rem",
                      borderRadius: "9999px",
                      backgroundColor: `${project.color}18`,
                      border: `1px solid ${project.color}50`,
                      color: project.color,
                    }}
                  >
                    {project.role}
                  </span>
                  <span style={{ fontSize: "0.8rem", color: "var(--text-secondary)", fontFamily: "monospace" }}>
                    {project.duration}
                  </span>
                </div>

                <h3 style={{ fontSize: "1.45rem", fontWeight: 900, marginBottom: "0.5rem", color: "var(--text-primary)", lineHeight: 1.3 }}>
                  {project.title}
                </h3>

                <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                  {project.description}
                </p>

                <ul style={{ listStyle: "none", padding: 0, marginBottom: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {project.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} style={{ fontSize: "0.85rem", color: "var(--text-secondary)", display: "flex", alignItems: "flex-start", gap: "0.5rem", lineHeight: 1.5 }}>
                      <span style={{ color: project.color, fontWeight: 700, marginTop: "2px" }}>✦</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                {/* Tech Stack */}
                <div style={{ borderTop: "1px solid var(--border-color)", paddingTop: "1rem", marginBottom: "1.25rem" }}>
                  <div style={{ fontSize: "0.7rem", fontFamily: "monospace", color: "var(--text-secondary)", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                    Tech Stack
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        style={{
                          padding: "0.25rem 0.65rem",
                          borderRadius: "9999px",
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          backgroundColor: "var(--bg-secondary)",
                          border: "1px solid var(--border-color)",
                          color: "var(--text-primary)",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <button
                    onClick={() => setSelectedProject(project)}
                    style={{
                      background: "none",
                      border: "none",
                      color: "#00F0FF",
                      fontSize: "0.85rem",
                      fontWeight: 700,
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.25rem",
                    }}
                  >
                    <span>View Specifications</span>
                    <span>↗</span>
                  </button>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: "0.4rem 0.9rem",
                        borderRadius: "9999px",
                        border: "1px solid var(--border-color)",
                        backgroundColor: "var(--bg-secondary)",
                        color: "var(--text-primary)",
                        textDecoration: "none",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.4rem",
                      }}
                    >
                      <span>GitHub</span>
                      <span style={{ fontSize: "0.7rem", color: "#00F0FF" }}>↗</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            backdropFilter: "blur(8px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1.5rem",
          }}
          onClick={() => setSelectedProject(null)}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "600px",
              maxHeight: "90vh",
              overflowY: "auto",
              borderRadius: "1.75rem",
              padding: "2rem",
              backgroundColor: "var(--bg-primary)",
              border: `1px solid ${selectedProject.color}`,
              boxShadow: `0 0 40px ${selectedProject.color}35`,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              style={{
                position: "absolute",
                top: "1.25rem",
                right: "1.25rem",
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                border: "1px solid var(--border-color)",
                background: "var(--bg-secondary)",
                color: "var(--text-secondary)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
              }}
            >
              ✕
            </button>

            <span
              style={{
                fontSize: "0.75rem",
                fontFamily: "monospace",
                fontWeight: 700,
                color: selectedProject.color,
                backgroundColor: `${selectedProject.color}15`,
                padding: "0.25rem 0.75rem",
                borderRadius: "9999px",
                display: "inline-block",
                marginBottom: "0.75rem",
              }}
            >
              {selectedProject.duration} • {selectedProject.role}
            </span>

            <h3 style={{ fontSize: "1.5rem", fontWeight: 900, marginBottom: "0.5rem", color: "var(--text-primary)" }}>
              {selectedProject.title}
            </h3>

            <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              {selectedProject.description}
            </p>

            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ fontSize: "0.75rem", fontFamily: "monospace", textTransform: "uppercase", color: "var(--text-secondary)", marginBottom: "0.5rem" }}>
                Key Technical Details
              </div>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                {selectedProject.bullets.map((b, i) => (
                  <li key={i} style={{ fontSize: "0.85rem", color: "var(--text-secondary)", display: "flex", gap: "0.5rem" }}>
                    <span style={{ color: "#00F0FF" }}>✓</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ borderTop: "1px solid var(--border-color)", paddingTop: "1rem", display: "flex", justifyContent: "flex-end" }}>
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "0.6rem 1.5rem",
                  borderRadius: "9999px",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  color: "#FFFFFF",
                  background: `linear-gradient(135deg, ${selectedProject.color}, #8B5CF6)`,
                  textDecoration: "none",
                }}
              >
                View on GitHub ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
